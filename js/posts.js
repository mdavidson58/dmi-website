/* ------------------------------------------------------------------
   Blog posts. To add a post, copy an entry, give it a unique `id`,
   and write the body in HTML. Newest posts go first.
   `art` picks the header graphic: "spc", "edge", "graph", "docs".
   ------------------------------------------------------------------ */
const POSTS = [
  {
    id: "bpa-without-a-bpa-tool",
    title: "Business Process Automation Without a Separate BPA Tool: What DMI Does, and What's Still Missing",
    category: "Automation",
    date: "2026-10-14",
    author: "[Author Name], [Title]",
    readTime: "8 min read",
    art: "edge",
    excerpt: "You don't need a workflow platform to close the loop between a plant problem and the action that fixes it. DMI's BPA workflows take a finding to an approved action in your CMMS, QMS or MES and back to a measured result. Here's how, and where a full BPA platform still earns its keep.",
    body: `
      <p>Most small and mid-sized plants don't own a business process automation (BPA) platform, and many never will. They still want what BPA promises: when something goes wrong on the line, the right work order or quality investigation starts quickly, the right person approves it, and someone checks that the fix worked.</p>
      <p>DMI now does that itself. Its <strong>BPA workflows</strong> take a DMI finding to an approved action in the system of record, then record whether it worked. This article covers how it works, what you set up, and what you still give up compared with a dedicated BPA deployment.</p>

      <h2>The loop you're trying to close</h2>
      <p>Every useful automation in a plant follows the same loop:</p>
      <ol>
        <li><strong>Detect</strong> that something changed.</li>
        <li><strong>Investigate</strong> why it changed.</li>
        <li><strong>Decide</strong> what to do and what it's worth.</li>
        <li><strong>Act</strong> through the system of record: MES, ERP, CMMS or QMS.</li>
        <li><strong>Verify</strong> that the action worked.</li>
      </ol>
      <p>Typical BPA tools are strong at step 4 and weak at steps 1 to 3. They act on a threshold someone set years ago and don't know why the value moved. DMI covers all five steps, and puts a person's approval between deciding and acting.</p>

      <h2>What DMI does for you</h2>
      <ul>
        <li><strong>Detect without crying wolf.</strong> DMI's alerts rerun its statistical process control scan on a schedule, so they fire on special-cause changes rather than on every wiggle. That matters for automation: a workflow triggered by noise creates work orders nobody needs.</li>
        <li><strong>Investigate to a cause.</strong> Root-cause analysis walks the process graph upstream to find which signals moved first, and correlates them with batches, shifts, maintenance and quality context.</li>
        <li><strong>Recommend an action, with the reason.</strong> Recommendations come with the evidence behind them and the relevant SOP or manual passage.</li>
        <li><strong>Raise and approve the action.</strong> <strong>Start BPA</strong> on an alarm or a recommendation opens a workflow with the finding filled in: a maintenance request, a quality investigation, a production adjustment, an optimization recommendation, or a material or schedule change. Approval follows the system: reliability approves CMMS work, quality approves QMS work, the supervisor approves MES changes, and the plant leader can approve anything. Whoever raised the workflow can't approve it.</li>
        <li><strong>Send it to the system of record.</strong> Each business system has a connector. A <strong>webhook</strong> connector posts the approved workflow as JSON to the system's endpoint and records the work-order or CAPA number it returns. A <strong>manual</strong> connector asks the approver to raise it by hand and type in the reference. A dry run shows exactly what would be sent.</li>
        <li><strong>Verify, and put a dollar figure on it.</strong> After the work is done, the result is recorded on the workflow. Linked to a Savings register row, the workflow fills in the business system, the reference, the approver, the execution time and the measured result, so the saving is fully evidenced.</li>
        <li><strong>Keep the trail.</strong> Every step is written to a tamper-evident, hash-chained audit log.</li>
      </ul>

      <h2>Setting it up</h2>
      <ol>
        <li><strong>Pick one loop.</strong> For example: special-cause event on a filler → maintenance request in the CMMS. One loop that runs every week teaches you more than ten that are only on a diagram.</li>
        <li><strong>Choose the connector.</strong> Start with <em>manual</em> if you have no integration. The approval, the reference and the verification are still recorded. Move to <em>webhook</em> when your CMMS or QMS, or a small integration flow in front of it, can accept a JSON post.</li>
        <li><strong>Test it with a dry run.</strong> Manufacturing IT sets the URL, the token (stored on the DMI host and never shown again) and the reply field that holds the reference, then uses <strong>Test</strong> and a dry run before going live.</li>
        <li><strong>Agree the approvers.</strong> Make sure the reliability, quality and supervisor accounts that will approve each system exist in DMI.</li>
        <li><strong>Link the savings.</strong> Record the saving with a signed baseline and link the workflow, so the result counts.</li>
      </ol>
      <blockquote>DMI decides what's worth doing, a person approves it, your systems of record carry it out, and DMI records whether it worked.</blockquote>

      <h2>What's still missing compared with a full BPA platform</h2>
      <p>DMI's workflows cover the plant loop, not everything a dedicated BPA platform does. To be straight about the gaps:</p>
      <ul>
        <li><strong>Multi-step workflows.</strong> A DMI workflow is one action with a fixed lifecycle: raise, approve, act, verify. BPA platforms model branching processes with timers, escalations, SLAs and versioned definitions.</li>
        <li><strong>Native system connectors.</strong> DMI's webhook is generic JSON. Writing into SAP, Maximo or Plex in their own formats still needs that system's API to accept the post, or an integration flow (Node-RED, Power Automate, n8n) to translate it. BPA platforms ship tested connectors.</li>
        <li><strong>Automatic triggers.</strong> A person starts every workflow with <strong>Start BPA</strong>. No rule raises one on its own, and DMI doesn't push alerts to other systems.</li>
        <li><strong>Status back from the business system.</strong> DMI records the reference it gets back, but doesn't follow the work order to completion. The result is recorded when the team verifies.</li>
        <li><strong>Automatic retries.</strong> A failed send is marked failed and a person retries it. There's no automatic back-off or dead-letter queue.</li>
        <li><strong>Notifications outside DMI.</strong> Pending approvals wait on the BPA workflows tab with a badge. They aren't sent by email or Teams.</li>
        <li><strong>Assistant and agent access.</strong> DMI's MCP tools stay read-only, so AI assistants can investigate but can't raise or approve workflows.</li>
        <li><strong>One audit trail across systems.</strong> DMI's audit log covers its side of the loop. Each business system keeps its own.</li>
        <li><strong>Event-log process mining.</strong> Process-mining suites reconstruct order-to-cash or purchase-to-pay from ERP event logs. DMI maps the physical manufacturing process from plant data, which is a different and complementary picture.</li>
      </ul>

      <h2>What a typical BPA deployment is missing</h2>
      <p>The gap runs the other way too. A BPA platform on its own usually lacks:</p>
      <ul>
        <li><strong>A reason for the trigger.</strong> Thresholds don't separate a real process change from normal variation, so the automation either fires too often or gets switched off.</li>
        <li><strong>Root cause.</strong> The workflow knows the filler slowed down. It doesn't know that a temperature variation upstream caused it.</li>
        <li><strong>The value of the action.</strong> Few BPA deployments can say what a given work order was worth, or whether it worked.</li>
        <li><strong>Plant-local operation.</strong> Many BPA platforms are cloud-first. DMI's analysis and workflows run inside the plant.</li>
      </ul>

      <h2>If you already own a BPA platform</h2>
      <p>Use both. Point DMI's webhook connector at your BPA platform instead of straight at the CMMS. DMI supplies the detection, the root cause, the approval and the proof, and your platform runs the multi-step process and its connectors.</p>
    `,
  },
  {
    id: "beyond-threshold-automation",
    title: "Beyond the Threshold Alarm: What Process-Aware Automation Looks Like",
    category: "Automation",
    date: "2026-10-14",
    author: "[Author Name], [Title]",
    readTime: "5 min read",
    art: "graph",
    excerpt: "A filling line loses 15% of its throughput. Traditional automation opens a ticket. Process-aware automation finds the cause, sizes the cost, and runs the fix your team approves.",
    body: `
      <p>Most business process automation in manufacturing works the same way: a value crosses a predefined threshold, and the system raises an alert or opens a work order. That's useful, but it stops exactly where the hard work starts. Someone still has to figure out <em>why</em> it happened, what it's costing, and what to change.</p>
      <h2>An example: a filling line slows down</h2>
      <p>Picture a filling line whose throughput drops by 15%. A threshold-based system creates a ticket. With DMI, the same event goes through eight steps:</p>
      <ol>
        <li>DMI detects the throughput reduction.</li>
        <li>It investigates equipment and process data around the filler.</li>
        <li>It identifies a temperature variation upstream of the filler.</li>
        <li>It determines that the variation is what's affecting filling performance.</li>
        <li>It calculates the financial impact of the lost throughput.</li>
        <li>It recommends a corrective action.</li>
        <li>Once approved, it initiates the workflow through the MES or maintenance system.</li>
        <li>It measures whether the corrective action restored performance.</li>
      </ol>
      <blockquote>The difference isn't the automation. It's that the automation acts on a cause, not a symptom.</blockquote>
      <h2>Three capabilities working together</h2>
      <p><strong>Process analysis</strong> discovers your processes from operational data, builds the process graph, and puts a financial number on bottlenecks and quality losses. <strong>Process intelligence</strong> uses distributed small language models to investigate events across machines, lines and business systems and to find root causes. <strong>Process automation</strong> turns the result into action: maintenance requests, quality investigations and optimization steps, executed through MES, ERP, CMMS and QMS once your team approves them.</p>
      <h2>A progression, not a switch</h2>
      <p>Process discovery leads to process intelligence, then root-cause analysis, decision support, automation and finally continuous optimization. Each step builds on the one before. That matters most for small and mid-sized manufacturers, who often don't have a sophisticated MES or analytics team but still need to know why a line slowed down and what to do about it.</p>
    `,
  },
  {
    id: "special-cause-vs-common-cause",
    title: "Stop Chasing Every Wiggle: Special Cause vs. Common Cause on the Plant Floor",
    category: "Quality",
    date: "2026-10-06",
    author: "[Author Name], [Title]",
    readTime: "6 min read",
    art: "spc",
    excerpt: "A historian tells you a value moved. It doesn't tell you whether the process changed. Here's why that distinction decides whether your next adjustment helps or hurts.",
    body: `
      <p>Every plant has a trend screen, and every trend screen moves. The hard question isn't <em>whether</em> a value changed — it's whether the <strong>process</strong> changed. Get that wrong and well-meaning people make things worse.</p>
      <h2>Two kinds of variation</h2>
      <p>Walter Shewhart and W. Edwards Deming gave manufacturing a simple, durable idea: variation comes in two flavors. <strong>Common-cause</strong> variation is the natural noise of a stable system. <strong>Special-cause</strong> variation is a signal that something specific has changed — a worn bearing, a new raw-material lot, a recipe edit.</p>
      <blockquote>Reacting to common-cause noise as if it were a signal is called tampering — and it reliably increases variation.</blockquote>
      <p>Most loss in a mature plant is common-cause. It shrinks only when the system itself changes. Special causes, on the other hand, demand investigation — fast, before they become scrap, a trip, or a customer complaint.</p>
      <h2>Why this is hard in practice</h2>
      <ul>
        <li>Tags are named differently on every line and every site, so nobody is sure they're comparing like with like.</li>
        <li>Trends show a value without its process context — what's upstream, what batch, what shift.</li>
        <li>Investigations pull data from five systems by hand, and the answer arrives after the next shift has already changed something.</li>
      </ul>
      <h2>How DMI approaches it</h2>
      <p>DMI builds a process-aware model of your plant, then applies statistical process control through that model. When a point falls outside control limits, DMI walks the process upstream to show which stages and signals moved first, correlates the event with maintenance, quality and production context, and lays out the evidence for an engineer to review.</p>
      <p>Just as important, when a signal stays inside its limits, DMI says so — so your team spends its time on the problems that are real.</p>
    `,
  },
  {
    id: "plant-local-ai-data-sovereignty",
    title: "Why Manufacturing AI Should Run Inside the Plant",
    category: "Architecture",
    date: "2026-09-22",
    author: "[Author Name], [Title]",
    readTime: "5 min read",
    art: "edge",
    excerpt: "Shipping every tag to the cloud is expensive, slow, and often not allowed. Plant-local intelligence keeps data where it's created and keeps working when the connection doesn't.",
    body: `
      <p>Cloud platforms are great at many things. Being the only path between an operator and an answer about their own line is not one of them.</p>
      <h2>The case for plant-local intelligence</h2>
      <ul>
        <li><strong>Data sovereignty.</strong> Process recipes and quality records are core intellectual property. Many manufacturers — and many regulators — want them to stay on site.</li>
        <li><strong>Operational continuity.</strong> A plant runs 24/7. Its decision-support tools should too, with or without an Internet connection.</li>
        <li><strong>Latency and cost.</strong> Moving high-frequency machine data off-site just to analyze it adds delay and egress cost without adding insight.</li>
        <li><strong>Restricted environments.</strong> Defense, pharmaceutical, energy and remote sites often can't depend on a public cloud at all.</li>
      </ul>
      <blockquote>Bring the intelligence to the data — not the data to the intelligence.</blockquote>
      <h2>Cloud where it helps</h2>
      <p>Plant-local doesn't mean cloud-never. DMI runs its core intelligence next to the machines and uses optional cloud services for enterprise management, cross-site reporting and other capabilities your team chooses to enable. You decide what leaves the plant.</p>
    `,
  },
  {
    id: "intelligence-layer-not-rip-and-replace",
    title: "An Intelligence Layer, Not Another Rip-and-Replace",
    category: "Integration",
    date: "2026-09-08",
    author: "[Author Name], [Title]",
    readTime: "4 min read",
    art: "graph",
    excerpt: "Your MES, QMS, LIMS, CMMS and historian are systems of record for good reasons. The missing piece isn't another system — it's the context that connects them.",
    body: `
      <p>Most manufacturers already own the data they need to answer hard questions. It's just spread across a dozen systems that were never designed to talk to each other.</p>
      <h2>The fragmentation problem</h2>
      <p>Process values live in the historian. Batch and order context lives in the MES. Deviations live in the QMS. Lab results live in the LIMS. Work orders live in the CMMS. SOPs and manuals live in a document share. An investigation means stitching all of these together by hand.</p>
      <h2>Context, not consolidation</h2>
      <p>DMI doesn't ask you to move everything into a new database. It builds a unified, ISA-95-aligned view of enterprise, site, area, cell and signal — a single map of names for the plant — and reads from your existing systems through it.</p>
      <blockquote>Your existing investments stay the systems of record. DMI becomes the intelligence layer across them.</blockquote>
      <p>That works for brownfield plants with decades of equipment as well as greenfield sites designed from scratch.</p>
    `,
  },
  {
    id: "beyond-document-search",
    title: "Beyond Document Search: Why Process Context Beats a Chatbot",
    category: "Industrial AI",
    date: "2026-08-25",
    author: "[Author Name], [Title]",
    readTime: "5 min read",
    art: "docs",
    excerpt: "Searching manuals with AI is useful. But a write-up of what the manual says isn't the same as understanding what your process is actually doing.",
    body: `
      <p>Generative AI made it easy to ask questions of SOPs, equipment manuals and troubleshooting guides. That's genuinely helpful — and it's only half the picture.</p>
      <h2>What documents can't tell you</h2>
      <p>A manual describes how a pump <em>should</em> behave. It can't tell you that this pump's discharge pressure started drifting two hours after a recipe change on the upstream mixer, or that the same pattern preceded last quarter's batch deviation.</p>
      <h2>Combining the two</h2>
      <p>DMI pairs document intelligence with a live process model. When an engineer asks why yield dropped, the answer draws on the process graph, statistical evidence, production and maintenance context — and then cites the relevant SOP or manual passage for what to check next.</p>
      <blockquote>Documentation search supplies the passage. Process context is what fixes the process.</blockquote>
      <p>And because DMI's AI runs inside the plant, those questions — and their answers — stay in your environment.</p>
    `,
  },
];

/* Header graphics for posts (inline SVG, brand colours). */
function postArt(kind) {
  const bg = `<defs><linearGradient id="g-${kind}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2a55"/><stop offset="1" stop-color="#1e88e5"/></linearGradient></defs><rect width="400" height="200" fill="url(#g-${kind})"/>`;
  const art = {
    spc: `<line x1="30" y1="60" x2="370" y2="60" stroke="#e2574c" stroke-dasharray="5 5" opacity=".8"/><line x1="30" y1="140" x2="370" y2="140" stroke="#e2574c" stroke-dasharray="5 5" opacity=".8"/><line x1="30" y1="100" x2="370" y2="100" stroke="#fff" opacity=".35"/><polyline fill="none" stroke="#fff" stroke-width="2.5" points="30,104 60,92 90,110 120,96 150,108 180,94 210,112 240,98 270,88 300,46 330,102 360,96"/><circle cx="300" cy="46" r="9" fill="#e2574c"/><circle cx="300" cy="46" r="16" fill="none" stroke="#e2574c" stroke-width="2" class="pulse"/>`,
    edge: `<rect x="40" y="110" width="320" height="60" rx="8" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.3)"/><g fill="#fff" opacity=".85"><rect x="60" y="130" width="30" height="40"/><rect x="100" y="120" width="20" height="50"/><rect x="130" y="135" width="40" height="35"/><rect x="230" y="125" width="26" height="45"/><rect x="266" y="138" width="44" height="32"/></g><rect x="175" y="62" width="50" height="40" rx="6" fill="#6cbf3c"/><text x="200" y="88" fill="#fff" font-size="13" font-family="Inter" text-anchor="middle" font-weight="700">AI</text><path d="M200 102 V120" stroke="#6cbf3c" stroke-width="2" class="flow"/><path d="M290 40 C330 20 370 40 360 60 H260 C240 60 250 30 290 40Z" fill="none" stroke="rgba(255,255,255,.5)" stroke-dasharray="4 4"/>`,
    graph: `<g stroke="rgba(255,255,255,.55)" stroke-width="2"><line x1="200" y1="100" x2="90" y2="50"/><line x1="200" y1="100" x2="90" y2="150"/><line x1="200" y1="100" x2="310" y2="50"/><line x1="200" y1="100" x2="310" y2="150"/><line x1="200" y1="100" x2="200" y2="30"/><line x1="200" y1="100" x2="200" y2="170"/></g><circle cx="200" cy="100" r="26" fill="#6cbf3c"/><g fill="#fff"><circle cx="90" cy="50" r="13"/><circle cx="90" cy="150" r="13"/><circle cx="310" cy="50" r="13"/><circle cx="310" cy="150" r="13"/><circle cx="200" cy="30" r="11"/><circle cx="200" cy="170" r="11"/></g>`,
    docs: `<g transform="translate(90 40)"><rect width="90" height="120" rx="6" fill="#fff" opacity=".9"/><g stroke="#9db6d6" stroke-width="4"><line x1="14" y1="24" x2="76" y2="24"/><line x1="14" y1="40" x2="70" y2="40"/><line x1="14" y1="56" x2="76" y2="56"/><line x1="14" y1="72" x2="60" y2="72"/></g></g><path d="M190 100 H220" stroke="#6cbf3c" stroke-width="3" class="flow"/><g transform="translate(230 50)"><circle cx="40" cy="50" r="46" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.5)"/><polyline fill="none" stroke="#fff" stroke-width="2.5" points="10,62 24,50 36,56 50,34 66,40"/><circle cx="50" cy="34" r="5" fill="#6cbf3c"/></g>`,
  };
  return `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">${bg}${art[kind] || ""}</svg>`;
}

function fmtDate(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function postCard(p) {
  return `<article class="card post-card" data-cat="${p.category}">
    <a class="thumb" href="post.html?id=${p.id}">${postArt(p.art)}</a>
    <div class="body">
      <div class="post-meta"><span class="cat">${p.category}</span><span>${fmtDate(p.date)}</span><span>${p.readTime}</span></div>
      <h3><a href="post.html?id=${p.id}">${p.title}</a></h3>
      <p>${p.excerpt}</p>
      <a class="more" href="post.html?id=${p.id}">Read article →</a>
    </div></article>`;
}
