/* ------------------------------------------------------------------
   Blog posts. To add a post, copy an entry, give it a unique `id`,
   and write the body in HTML. Newest posts go first.
   `art` picks the header graphic: "spc", "edge", "graph", "docs".
   ------------------------------------------------------------------ */
const POSTS = [
  {
    id: "dmi-for-industrial-integrators",
    title: "For Industrial Integrators: Deliver Industrial AI to Your Customers, Under Your Own Brand",
    category: "Partners",
    date: "2026-10-16",
    author: "Mark Davidson, CEO",
    readTime: "6 min read",
    art: "partner",
    excerpt: "Your customers are asking for AI. DMI lets integrators deliver it on top of the systems they've already built, create recurring revenue, prove results in dollars, and even offer the solution under their own brand.",
    body: `
      <p>Systems integrators are the people manufacturers trust with their plants. You designed the control systems, built the SCADA screens, connected the historians and kept everything running. Now your customers are asking a new question: <em>"What are we doing with AI?"</em></p>
      <p>Most integrators face a choice. Build an AI practice from scratch, which takes data scientists, years and a lot of risk. Refer the work to a software vendor or consultancy and watch the relationship move with it. Or partner with a platform that turns your existing projects into the foundation for industrial AI. DMI is built for the third option.</p>

      <h2>What DMI gives your customers</h2>
      <ul>
        <li><strong>Answers, not just data.</strong> DMI separates real process changes from normal variation, traces problems upstream to their root cause, and recommends what to do, with the evidence behind it.</li>
        <li><strong>Built on what you already delivered.</strong> DMI runs on the AnyLog edge data fabric and connects through MQTT, OPC UA and SQL, so it works with the Ignition, Kepware, Litmus, Wonderware and other systems you've already installed.</li>
        <li><strong>Plant-local and secure.</strong> Data and AI stay inside the customer's plant, which removes one of the biggest objections to industrial AI.</li>
        <li><strong>Results in dollars.</strong> DMI's savings register records the baseline, the approved action and the measured result, so every improvement comes with an evidenced dollar figure that finance will accept.</li>
        <li><strong>Plain-language access.</strong> Operators, engineers and managers ask questions about their lines in plain English, without learning a new analytics tool.</li>
      </ul>

      <h2>What DMI gives you</h2>
      <ul>
        <li><strong>Recurring revenue.</strong> Move beyond one-time project fees to ongoing subscription and support revenue on every site you deploy.</li>
        <li><strong>A reason to go back to every customer.</strong> Your installed base becomes your pipeline. Every plant with a SCADA system or historian you built is a DMI opportunity.</li>
        <li><strong>More services, not fewer.</strong> Connecting data sources, modelling processes, configuring workflows and running continuous improvement are billable work that fits the skills your team already has.</li>
        <li><strong>Fast time to value.</strong> First use cases can be running in days, so pilots don't stall and customers see results while the project still has momentum.</li>
        <li><strong>Proof that sells the next project.</strong> Documented savings from one line make the case for the next line, the next plant and the next phase.</li>
        <li><strong>Outcome-based options.</strong> Because savings are measured and attributed, you can offer pricing tied to results, such as shared savings, instead of competing on hourly rates.</li>
      </ul>
      <blockquote>Your customers keep the systems you built. You add the intelligence layer on top, and the recurring revenue that comes with it.</blockquote>

      <h2>Three ways to offer DMI</h2>
      <h3>1. Resell</h3>
      <p>Offer DMI alongside your projects as a CogniaWerks product. You own the customer relationship and earn margin on every subscription, and CogniaWerks provides the platform and product support.</p>
      <h3>2. Deploy and support</h3>
      <p>Bundle DMI with your services. You deploy AnyLog and DMI at customer sites, connect their systems, configure the process models and workflows, and provide first-line support. You earn both the software margin and the services revenue.</p>
      <h3>3. Brand it as your own</h3>
      <p>Offer DMI as your own solution, under your company's name and branding. Your customers see your brand on the product they use every day, and your offering is clearly yours, not a reseller line item. CogniaWerks stays in the background, providing the platform, updates and technical support. White-label partnerships are arranged under a separate agreement.</p>

      <h2>What a typical engagement looks like</h2>
      <ol>
        <li><strong>Assess.</strong> Pick a line with a recurring quality, downtime or energy problem, and list the systems that hold its data.</li>
        <li><strong>Connect.</strong> Deploy an AnyLog node on site and connect it to the customer's existing SCADA, middleware and historians.</li>
        <li><strong>Pilot.</strong> Let DMI build the namespace and process graph, run the analysis, and find the first improvement.</li>
        <li><strong>Prove.</strong> Record the baseline, approve the action, and measure the result in the savings register.</li>
        <li><strong>Expand.</strong> Use the documented savings to roll out to more lines and sites, with recurring revenue at each one.</li>
      </ol>

      <h2>What CogniaWerks provides</h2>
      <ul>
        <li>Training for your sales and engineering teams.</li>
        <li>Demo environments and example scenarios you can show customers.</li>
        <li>Technical support behind your team.</li>
        <li>Partner pricing and help with joint opportunities.</li>
      </ul>

      <h2>Become a partner</h2>
      <p>If you're an integrator who wants to bring industrial AI to your customers, whether as a reseller, a deployment partner or under your own brand, we'd like to talk. Visit our <a href="partners.html">Partners page</a> or email <a href="mailto:sales@cogniawerks.com?subject=Integrator%20partnership%20inquiry">sales@cogniawerks.com</a>.</p>
      <p><a class="btn btn-primary" href="mailto:sales@cogniawerks.com?subject=Integrator%20partnership%20inquiry&amp;body=Company%3A%0AName%20and%20title%3A%0AInterested%20in%20(resell%2C%20deploy%20and%20support%2C%20white%20label)%3A%0ACustomers%20and%20industries%20we%20serve%3A%0A">Become a Partner →</a></p>
    `,
  },
  {
    id: "integrate-ignition-kepware-litmus-wonderware",
    title: "Keep Your OT Stack: How DMI and AnyLog Work With Existing Data Acquisition Middleware and SCADA",
    category: "Integration",
    date: "2026-10-16",
    author: "Mark Davidson, CEO",
    readTime: "7 min read",
    art: "stack",
    excerpt: "Most plants have already invested in middleware, SCADA and historians. DMI and AnyLog don't replace them. Any SCADA or middleware can send data to DMI over MQTT or OPC UA, and DMI can query SCADA and historian data in place over SQL. Here's how it fits.",
    body: `
      <p>Walk into almost any plant and you'll find a layer of software between the PLCs and the business systems: a SCADA platform like Ignition or Wonderware, a connectivity server like Kepware, an edge platform like Litmus, and one or more historians. These systems took years to configure and they run the plant every day. The last thing an operations team wants is a new platform that asks them to rip any of it out.</p>
      <p>DMI and AnyLog are designed for exactly that environment. They connect to what you already have, leave it in charge of what it does well, and add the analysis those systems weren't built to do.</p>

      <h2>Three layers, each doing its own job</h2>
      <ol>
        <li><strong>Your OT stack.</strong> PLCs, SCADA and HMI, connectivity servers, edge platforms, historians and SQL databases. It keeps collecting data, running screens and alarms, and controlling the process.</li>
        <li><strong>AnyLog edge data fabric.</strong> Lightweight AnyLog nodes run next to your existing systems, inside the plant firewall. They connect to them through standard interfaces, keep the data local, and publish the metadata that describes it. Together the nodes present every source, across lines and sites, as one queryable system.</li>
        <li><strong>DMI.</strong> DMI runs on top of AnyLog. It builds the unified namespace and process graph, runs statistical process control, OEE and root-cause analysis, answers questions in plain language, and turns findings into approved actions.</li>
      </ol>
      <blockquote>Your systems stay the systems of record. AnyLog connects them. DMI explains what's happening and what to do next.</blockquote>

      <h2>The interfaces that make it work</h2>
      <p>Integration doesn't depend on custom plug-ins for each vendor. It uses the open interfaces that OT platforms already expose:</p>
      <ul>
        <li><strong>OPC UA</strong> for live tag values from SCADA, connectivity servers and many PLCs.</li>
        <li><strong>MQTT</strong> for platforms that publish tag changes to a broker.</li>
        <li><strong>SQL databases</strong> for historians and platforms that store history in SQL Server, MySQL or PostgreSQL.</li>
        <li><strong>REST APIs</strong> for platforms and historians with web interfaces.</li>
        <li><strong>Industrial protocols</strong> such as Modbus and DNP3 where a device has no middleware in front of it.</li>
      </ul>
      <h2>If it speaks MQTT, OPC UA or SQL, it works with DMI</h2>
      <p>The platforms named in this article are examples, not a compatibility list. The same two paths work with virtually any SCADA system or middleware:</p>
      <ul>
        <li><strong>Send live data in over MQTT or OPC UA.</strong> Any SCADA or middleware platform that can publish to an MQTT broker or serve tags over OPC UA can stream data to DMI through AnyLog. No custom connector is needed.</li>
        <li><strong>Query history in place over SQL.</strong> Any SCADA system or historian that stores its data in a SQL database can be queried directly by DMI through AnyLog, so years of existing history are available without exporting or copying it.</li>
      </ul>
      <blockquote>If your system can publish over MQTT or OPC UA, or store its history in SQL, DMI can use its data.</blockquote>

      <h2>Ignition</h2>
      <p>Inductive Automation's Ignition is often the hub of a modern plant: it connects to PLCs, runs HMI screens and alarming, and logs tag history to a SQL database. AnyLog can read live tags from Ignition's OPC UA server, subscribe to tag data that Ignition publishes over MQTT, or read the tag history Ignition stores in its SQL database. Ignition keeps running the screens, alarms and control logic your operators rely on. DMI adds what Ignition doesn't do on its own: separating real process changes from noise, tracing a problem upstream to its cause, and putting a value on fixing it.</p>

      <h2>Kepware</h2>
      <p>PTC's Kepware KEPServerEX is the protocol translator in many plants, with drivers for a wide range of PLCs and devices. It exposes everything it collects through its OPC UA server, and its IoT Gateway can publish data over MQTT or REST. AnyLog connects to either path, so Kepware stays responsible for talking to the equipment and nothing needs to be re-tagged. Any device Kepware can reach becomes available to DMI.</p>

      <h2>Litmus</h2>
      <p>Litmus Edge collects and normalizes data from industrial equipment at the edge. It can publish that data to an MQTT broker, expose it over OPC UA, and send it to databases. AnyLog picks it up from any of those outputs. Litmus continues to handle device connectivity and data normalization, while AnyLog adds distributed, cross-site querying and DMI adds process-aware analysis and root cause.</p>

      <h2>Wonderware and AVEVA</h2>
      <p>Many plants still run Wonderware InTouch and System Platform, now part of AVEVA, with years of history in an AVEVA (Wonderware) Historian. That historian is built on Microsoft SQL Server, so its history can be queried with SQL right where it lives, and live values are available over OPC UA. DMI can analyze years of existing history without exporting it to a data lake, and compare it with what's happening on the line right now.</p>

      <h2>Other SCADA platforms and historians</h2>
      <p>The same approach applies to other platforms, such as FactoryTalk, WinCC, AVEVA PI and many others, through the interfaces they support: OPC UA for live data, SQL or REST for history, and MQTT where data is already published to a broker.</p>

      <h2>At a glance</h2>
      <div class="table-wrap"><table class="policy-table">
        <thead><tr><th>Platform</th><th>It keeps doing</th><th>AnyLog connects through</th><th>DMI adds</th></tr></thead>
        <tbody>
          <tr><td>Ignition</td><td>HMI, alarming, control logic, tag history</td><td>OPC UA, MQTT, SQL history</td><td>SPC, root cause, process graph</td></tr>
          <tr><td>Kepware</td><td>Device drivers and protocol translation</td><td>OPC UA, MQTT or REST (IoT Gateway)</td><td>Analysis across every device it reaches</td></tr>
          <tr><td>Litmus Edge</td><td>Edge collection and normalization</td><td>MQTT, OPC UA, database outputs</td><td>Cross-site querying, root cause</td></tr>
          <tr><td>Wonderware / AVEVA</td><td>SCADA, HMI, historian</td><td>SQL (historian), OPC UA</td><td>Analysis of years of history in place</td></tr>
          <tr><td>Other SCADA and historians</td><td>Supervision and history</td><td>OPC UA, SQL, REST, MQTT</td><td>A single view across vendors</td></tr>
        </tbody>
      </table></div>

      <h2>What doesn't change</h2>
      <ul>
        <li><strong>No rip and replace.</strong> Your SCADA, HMI, middleware and historians stay in place.</li>
        <li><strong>No re-tagging.</strong> DMI maps existing tags into its unified namespace instead of asking you to rename them.</li>
        <li><strong>No central copy.</strong> Data stays in the plant, and only metadata and query results move across the network.</li>
        <li><strong>No changes to control.</strong> DMI reads data. When it recommends an action, a person approves it and it runs as a work order, a Microsoft Teams post or a Power Automate flow. DMI doesn't write setpoints to your control system.</li>
      </ul>

      <h2>Getting started</h2>
      <ol>
        <li><strong>Pick a line</strong> with a recurring problem and list the systems that hold its data.</li>
        <li><strong>Deploy an AnyLog node</strong> on an existing server or edge device near those systems.</li>
        <li><strong>Point it at what you have:</strong> an OPC UA endpoint, an MQTT topic, or a historian database.</li>
        <li><strong>Let DMI discover</strong> the data, build the namespace and process graph, and start the analysis.</li>
      </ol>
      <p>If you run Ignition, Kepware, Litmus, Wonderware or another platform and want to see DMI working with it, request a demo and tell us what's in your stack.</p>
      <p style="font-size:.88rem;color:var(--muted)">Ignition is a trademark of Inductive Automation. Kepware and KEPServerEX are trademarks of PTC. Litmus and Litmus Edge are trademarks of Litmus Automation. Wonderware, InTouch, System Platform and AVEVA are trademarks of AVEVA Group. Other names are trademarks of their respective owners. Mentioned for compatibility only; no endorsement or partnership is implied.</p>
    `,
  },
  {
    id: "distributed-data-and-metadata",
    title: "Share the Metadata, Not the Data: The Advantages of Distributed Data for Manufacturing",
    category: "Architecture",
    date: "2026-10-16",
    author: "Mark Davidson, CEO",
    readTime: "6 min read",
    art: "fabric",
    excerpt: "The default answer to scattered plant data has been to copy it all to one place. A distributed approach leaves the data where it's created and shares only the metadata that describes it. Here's why that's faster, cheaper, more secure and better for AI.",
    body: `
      <p>For two decades, the standard answer to scattered industrial data has been the same: move it. Pipe PLC tags into a historian, push the historian into a data lake, copy the data lake into a cloud warehouse, and only then start asking questions. Each hop adds delay, cost and another copy to secure.</p>
      <p>A different architecture is gaining ground. Edge data fabrics such as <a href="https://anylog.network" target="_blank" rel="noopener">AnyLog</a>, and its open-source counterpart EdgeLake from the Linux Foundation, leave operational data where it's created and share only the <em>metadata</em> that describes it. Applications and AI then query the whole operation as if it were one system. This article explains the difference and why it matters for manufacturers.</p>

      <h2>Data and metadata are not the same thing</h2>
      <ul>
        <li><strong>Operational data</strong> is the high-volume stream of readings: temperatures, pressures, counts, torques, states. It's created every second on every line, and it's what you'd normally ship to the cloud.</li>
        <li><strong>Metadata</strong> describes that data: which asset a tag belongs to, what it measures, its units, where it's stored, how assets relate to lines, plants and processes, and who is allowed to see it. It's small and changes slowly.</li>
      </ul>
      <p>The key idea is to <strong>share the metadata across the network and keep the data at its source</strong>. Every node knows what exists and where, so a query can find the right data without anyone first collecting it in one place.</p>
      <blockquote>Processing moves to the data. Only the metadata, and the answers, travel.</blockquote>

      <h2>The advantages</h2>
      <h3>1. Real-time answers, not yesterday's copy</h3>
      <p>When data has to be extracted, transformed and loaded before anyone can use it, decisions are made on a delayed copy. Querying data where it lives means operators, applications and AI see the current state of the line, not the state when the last batch job ran.</p>

      <h3>2. Lower cost</h3>
      <p>Shipping every signal to the cloud means paying for bandwidth, egress, ingestion and storage, often several times over as the same data is copied between systems. A distributed approach processes and aggregates locally and sends only results, so you pay to move kilobytes of answers instead of terabytes of raw readings.</p>

      <h3>3. Ownership, sovereignty and security</h3>
      <p>Edge nodes can run inside the plant's firewall, connect to each other over authenticated, encrypted peer-to-peer links, and enforce their own access policies. Process data and the intellectual property it contains never have to leave the premises. Partners, vendors and AI models get access to <em>answers</em>, not custody of the source data, and privacy is enforced by where the data physically sits rather than by a cloud contract.</p>

      <h3>4. Resilience when the network isn't there</h3>
      <p>A plant can't stop because the WAN link went down. When data, processing and rules run locally, each site keeps working on its own and rejoins the wider network when the connection returns. Replication between nodes protects against the loss of a single device.</p>

      <h3>5. Scale one node at a time</h3>
      <p>Centralized architectures tend to be all-or-nothing projects. A distributed fabric starts with one machine, line or plant, and each new node simply joins the same logical system. Applications don't have to be rebuilt and central pipelines don't have to be re-engineered as you grow. First use cases can be running in days rather than months.</p>

      <h3>6. Many views of the same data, without copies</h3>
      <p>Because the structure lives in metadata, you can define several unified namespaces (UNS) over the same underlying stores: one organized for production, one for maintenance, one for energy, one for quality, one for management. Each team gets the hierarchy that makes sense to them, and none of them requires another copy of the data or another broker in the middle.</p>

      <h3>7. Context that AI can actually use</h3>
      <p>AI agents need more than raw values. They need to know how assets, processes, locations and systems relate to each other. A knowledge graph built from shared metadata gives them that map, and interfaces such as the Model Context Protocol (MCP) let agents and assistants query live edge data in plain language. The result is AI that reasons over the whole operation without a data lake behind it.</p>

      <h2>How a distributed query works</h2>
      <ol>
        <li>A user, application or AI agent asks a question, for example: <em>how many bottles were capped across all plants this shift?</em></li>
        <li>The shared metadata tells the network which nodes hold the relevant data.</li>
        <li>The query is sent to those nodes, and each one computes its part locally.</li>
        <li>Partial results are combined and returned as a single answer. The raw readings never left their plants.</li>
      </ol>

      <h2>What this means for DMI</h2>
      <a class="partner-callout" href="https://anylog.network" target="_blank" rel="noopener"><img src="assets/partners/anylog-mark.png" alt="" width="56" height="59"><span><span class="partner-name">AnyLog</span><span class="partner-sub">Powered by the AnyLog Edge Data Fabric</span></span></a>
      <p>DMI (Distributed Manufacturing Intelligence) runs on top of AnyLog. Root-cause analysis depends on two things: live data and context about how the process fits together, and AnyLog's edge data fabric provides both. Its metadata layer, unified namespaces and knowledge graph describe the process, so DMI can trace cause and effect upstream across lines, systems and sites. The data stays in the plant, so DMI's analysis and AI run where the data lives, inside your security boundary, without a central data lake.</p>
      <p>The result is industrial AI that is faster to deploy, cheaper to run, and safer to trust with your most sensitive operational data.</p>

      <h2>Getting started</h2>
      <p>You don't need to re-architect the whole enterprise. Pick one line with a recurring problem, connect its PLCs, historian and quality data in place, and ask the questions you can't answer today. Then add the next line. If you'd like to see this on a process like yours, request a demo.</p>
    `,
  },
  {
    id: "physical-ai-at-the-edge",
    title: "Driving the Future of Physical AI at the Edge: Why Causal AI Belongs on the Plant Floor",
    category: "Industrial AI",
    date: "2026-10-16",
    author: "Mark Davidson, CEO",
    readTime: "5 min read",
    art: "edge",
    image: "assets/blog/physical-ai-edge-thumb.jpg",
    excerpt: "Robots, machines and AI are converging on the plant floor. To act safely and fast, that intelligence has to run at the edge and understand cause and effect, not just correlation. Here's where CogniaWerks and DMI are taking physical AI.",
    body: `
      <p>Physical AI, meaning AI that senses, decides and acts on machines and robots in the real world, is moving from research labs to production lines. For manufacturers, the question isn't whether to use it. It's where it runs and how much you can trust its decisions. Our answer: run it in the plant, and ground it in cause and effect. This infographic summarizes that vision.</p>

      <figure class="article-figure">
        <a href="assets/blog/physical-ai-edge-infographic.jpg" target="_blank" rel="noopener"><img src="assets/blog/physical-ai-edge-infographic.jpg" alt="Infographic: CogniaWerks, driving the future of physical AI at the edge. Edge-native industrial intelligence, optimizing robotics and physical AI, why causal AI, and how to get involved." width="768" height="1376" loading="lazy"></a>
        <figcaption>Physical AI at the edge. Click to open full size.</figcaption>
      </figure>

      <h2>The vision: edge-native industrial intelligence</h2>
      <ul>
        <li><strong>Plant-local autonomy.</strong> AI models run on site, so operations continue even when the internet connection doesn't.</li>
        <li><strong>Zero trust, maximum security.</strong> Critical process data and intellectual property stay entirely under your control.</li>
        <li><strong>Low-latency execution.</strong> Processing close to the equipment makes real-time orchestration possible, without a round trip to the cloud.</li>
      </ul>

      <h2>Optimizing robotics and physical AI</h2>
      <p>Robots and automated cells generate rich data about paths, speeds, forces and wear. Edge intelligence can put that data to work:</p>
      <ul>
        <li><strong>Dynamic robotics optimization.</strong> Adjust paths, speed and force in real time as conditions change.</li>
        <li><strong>Physics-informed models.</strong> Predict wear and prevent downtime using digital-twin concepts grounded in how the equipment actually behaves.</li>
        <li><strong>Unified namespace navigation.</strong> Connect PLCs, SCADA and other fragmented systems into a single process graph, so every decision has full context.</li>
      </ul>

      <h2>Why causal AI? Moving beyond correlation</h2>
      <p>Correlational AI finds patterns: two signals that move together. On the plant floor, that leads to guesswork. The signal that moved first isn't always the cause, and acting on the wrong one wastes time or makes things worse.</p>
      <p>Causal AI follows a different path. It connects equipment and PLCs, puts the data in context on a process graph, traces cause and effect upstream to the true root cause, and only then recommends an action. That lets you:</p>
      <ul>
        <li><strong>Know exactly why a process drifted</strong>, not just that it did.</li>
        <li><strong>Unify fragmented systems</strong> such as MES and ERP around the physical process.</li>
        <li><strong>Move from recommendation toward automated action</strong>, with the evidence to trust it.</li>
      </ul>
      <blockquote>Bring AI to the plant. Understand the cause. Then act with confidence.</blockquote>

      <h2>Join the movement</h2>
      <ul>
        <li><strong>For manufacturers.</strong> Stop paying to ship every signal to the cloud. Deploy DMI (Distributed Manufacturing Intelligence) on your own floor.</li>
        <li><strong>For partners and innovators.</strong> Robotics, automation and edge-computing companies: help us co-develop the future of autonomous factories.</li>
      </ul>
      <p>Whether you run a plant or build the technology inside one, we'd like to talk. Request a demo, or get in touch about partnering.</p>
    `,
  },
  {
    id: "dmi-at-a-glance",
    title: "DMI at a Glance: Unify Plant Data, Speed Up Root-Cause Analysis, Secure Your Edge",
    category: "Industrial AI",
    date: "2026-10-15",
    author: "Mark Davidson, CEO",
    readTime: "4 min read",
    art: "graph",
    image: "assets/blog/dmi-at-a-glance-thumb.jpg",
    excerpt: "Plant data is spread across MES, SCADA, ERP and people's heads, so root-cause analysis is slow. Here's a one-page view of how DMI connects those systems into a plant-local intelligence layer, and what that gives your team.",
    body: `
      <p>Most plants don't have a data problem. They have a <em>connection</em> problem. The answers to "why did yield drop on Line 3?" usually exist, but they're split across systems that don't talk to each other. This infographic summarizes how Distributed Manufacturing Intelligence (DMI) closes that gap.</p>

      <figure class="article-figure">
        <a href="assets/blog/dmi-at-a-glance-infographic.jpg" target="_blank" rel="noopener"><img src="assets/blog/dmi-at-a-glance-infographic.jpg" alt="Infographic: CogniaWerks Distributed Manufacturing Intelligence. The challenge of siloed, slow data; how DMI unifies the operation; core benefits; and industries served." width="768" height="1376" loading="lazy"></a>
        <figcaption>DMI at a glance. Click to open full size.</figcaption>
      </figure>

      <h2>The challenge: siloed and slow data</h2>
      <ul>
        <li><strong>Fragmented systems.</strong> Process data lives in SCADA and historians, batch and order context in MES, and cost and materials in ERP. Each uses different names for the same equipment.</li>
        <li><strong>Reliance on tribal knowledge.</strong> Much of the troubleshooting know-how is in the heads of experienced staff, some of whom are close to retirement.</li>
        <li><strong>Slow, manual root-cause analysis.</strong> Engineers spend days pulling exports and building spreadsheets, and the problem often comes back before the investigation is finished.</li>
      </ul>

      <h2>The CogniaWerks solution: DMI unifies your operation</h2>
      <p>DMI is a plant-local intelligence layer that sits alongside the systems you already run:</p>
      <ul>
        <li><strong>Connects existing machines and historian data</strong> without moving it out of the plant.</li>
        <li><strong>Builds a process-aware model of your plant</strong>, so analysis follows cause and effect upstream and downstream.</li>
        <li><strong>Gives real-time visibility and analytics</strong>, including OEE and statistical process control.</li>
      </ul>

      <h2>Core benefits</h2>
      <ul>
        <li><strong>Fast root-cause analysis.</strong> Move from data collection to insight in minutes rather than days.</li>
        <li><strong>Natural-language queries.</strong> Ask about line performance in plain English and get answers backed by evidence.</li>
        <li><strong>Plant-local and secure.</strong> The AI runs on site, so your process data and intellectual property stay protected.</li>
        <li><strong>Improved OEE and efficiency.</strong> Reduce downtime and improve production yield.</li>
      </ul>
      <blockquote>Unify plant data. Speed up root-cause analysis. Keep your intelligence at the edge.</blockquote>

      <h2>Built for process and discrete manufacturing</h2>
      <p>DMI is deployed across industries including pharmaceuticals, chemicals, semiconductors, automotive and aerospace. Its process catalog covers dozens of manufacturing process types, from bioreactors to body shops.</p>

      <h2>See it on your process</h2>
      <p>The fastest way to judge DMI is to see it on a process like yours. Request a demo and we'll walk through a tailored example with your team.</p>
    `,
  },
  {
    id: "bpa-without-a-bpa-tool",
    title: "Business Process Automation Without a Separate BPA Tool: What DMI Does, and What's Still Missing",
    category: "Automation",
    date: "2026-10-14",
    author: "Mark Davidson, CEO",
    readTime: "8 min read",
    art: "edge",
    excerpt: "You don't need a workflow platform to close the loop between a plant problem and the action that fixes it. DMI's BPA workflows take a finding to an approved action, run it as a DMI work order, a Microsoft Teams post or a Power Automate flow, and record whether it worked. Here's how, and what's still missing.",
    body: `
      <p>Most small and mid-sized plants don't own a business process automation (BPA) platform, and many never will. They still want what BPA promises: when something goes wrong on the line, the right work order or quality investigation starts quickly, the right person approves it, and someone checks that the fix worked.</p>
      <p>DMI now does that itself. Its <strong>BPA workflows</strong> take a DMI finding to an approved action, carry it out through tools you already have, and record whether it worked. This article covers how it works, what you set up, and what you still give up compared with a dedicated BPA deployment.</p>

      <h2>The loop you're trying to close</h2>
      <p>Every useful automation in a plant follows the same loop:</p>
      <ol>
        <li><strong>Detect</strong> that something changed.</li>
        <li><strong>Investigate</strong> why it changed.</li>
        <li><strong>Decide</strong> what to do and what it's worth.</li>
        <li><strong>Act</strong>: get the work to the people who do it.</li>
        <li><strong>Verify</strong> that the action worked.</li>
      </ol>
      <p>Typical BPA tools are strong at step 4 and weak at steps 1 to 3. They act on a threshold someone set years ago and don't know why the value moved. DMI covers all five steps, and puts a person's approval between deciding and acting.</p>

      <h2>What DMI does for you</h2>
      <ul>
        <li><strong>Detect without crying wolf.</strong> DMI's alerts rerun its statistical process control scan on a schedule, so they fire on special-cause changes rather than on every wiggle. That matters for automation: a workflow triggered by noise creates work orders nobody needs.</li>
        <li><strong>Investigate to a cause.</strong> Root-cause analysis walks the process graph upstream to find which signals moved first, and correlates them with batches, shifts, maintenance and quality context.</li>
        <li><strong>Recommend an action, with the reason.</strong> Recommendations come with the evidence behind them and the relevant SOP or manual passage.</li>
        <li><strong>Raise and approve the action.</strong> Every role can raise a workflow, and <strong>Start BPA</strong> on an alarm or a recommendation fills in the finding. Approval follows the action: reliability approves maintenance requests, quality approves quality investigations, the supervisor approves production and material changes, and the plant leader can approve anything. Whoever raised the workflow can't approve it.</li>
        <li><strong>Carry it out three ways.</strong> A <strong>Local</strong> workflow becomes a DMI work order that is assigned, started and marked done, with a log of every step. A <strong>Microsoft Teams</strong> workflow posts a card with the action, priority, location and work order to a channel, a DMI work order tracks it, and a second card goes up when it's done. A <strong>Power Automate</strong> workflow starts a flow that can create a Planner task, a SharePoint item or a ticket, and records the ID the flow sends back.</li>
        <li><strong>Verify, and put a dollar figure on it.</strong> After the work is done, the result is recorded on the workflow. Linked to a Savings register row, the workflow fills in the system, the reference, the approver, the execution time and the measured result, so the saving is fully evidenced.</li>
        <li><strong>Keep the trail.</strong> Every step is written to a tamper-evident, hash-chained audit log.</li>
      </ul>

      <h2>Setting it up</h2>
      <ol>
        <li><strong>Pick one loop.</strong> For example: special-cause event on a filler → maintenance work order. One loop that runs every week teaches you more than ten that are only on a diagram.</li>
        <li><strong>Start with Local.</strong> DMI work orders need no setup: approve, assign, mark done, verify.</li>
        <li><strong>Add Teams if the crew lives there.</strong> In the channel, add the Workflows option <em>Post to a channel when a webhook request is received</em>, paste its URL under <strong>Configuration → Workflow integrations</strong>, and press <strong>Test</strong>.</li>
        <li><strong>Add Power Automate to reach other tools.</strong> Build a flow that starts with <em>When an HTTP request is received</em>, creates the item you want, and returns its ID. Paste the flow URL, set the reply field, try a dry run, then <strong>Test</strong>. The URLs are stored on the DMI host and never shown again.</li>
        <li><strong>Link the savings.</strong> Record the saving with a signed baseline and link the workflow, so the result counts.</li>
      </ol>
      <blockquote>DMI decides what's worth doing, a person approves it, your team does it through DMI, Teams or a flow, and DMI records whether it worked.</blockquote>

      <h2>What's still missing compared with a full BPA platform</h2>
      <p>DMI's workflows cover the plant loop, not everything a dedicated BPA platform does. To be straight about the gaps:</p>
      <ul>
        <li><strong>Native business-system connectors.</strong> DMI doesn't write directly into MES, ERP, CMMS or QMS yet. Those connectors are future integrations. Today, Power Automate is the bridge: a flow can create the work order in your system if it has a connector for it.</li>
        <li><strong>Multi-step workflows.</strong> A DMI workflow is one action with a fixed lifecycle: raise, approve, act, verify. BPA platforms model branching processes with timers, escalations, SLAs and versioned definitions.</li>
        <li><strong>Automatic triggers.</strong> A person starts every workflow with <strong>Start BPA</strong>. No rule raises one on its own.</li>
        <li><strong>Status back from the flow.</strong> DMI records the reference a Power Automate flow returns, but doesn't follow that item to completion. The result is recorded when the team verifies.</li>
        <li><strong>Automatic retries.</strong> A failed Teams post or flow call is marked failed and a person retries it. There's no automatic back-off or dead-letter queue.</li>
        <li><strong>Approval requests outside DMI.</strong> Teams gets the approved action, not the request. Pending approvals wait on the BPA workflows tab with a badge.</li>
        <li><strong>Assistant and agent access.</strong> DMI's MCP tools stay read-only, so AI assistants can investigate but can't raise or approve workflows.</li>
        <li><strong>One audit trail across systems.</strong> DMI's audit log covers its side of the loop. Teams, the flow and the systems it touches keep their own.</li>
        <li><strong>Event-log process mining.</strong> Process-mining suites reconstruct order-to-cash or purchase-to-pay from ERP event logs. DMI maps the physical manufacturing process from plant data, which is a different and complementary picture.</li>
      </ul>

      <h2>What a typical BPA deployment is missing</h2>
      <p>The gap runs the other way too. A BPA platform on its own usually lacks:</p>
      <ul>
        <li><strong>A reason for the trigger.</strong> Thresholds don't separate a real process change from normal variation, so the automation either fires too often or gets switched off.</li>
        <li><strong>Root cause.</strong> The workflow knows the filler slowed down. It doesn't know that a temperature variation upstream caused it.</li>
        <li><strong>The value of the action.</strong> Few BPA deployments can say what a given work order was worth, or whether it worked.</li>
        <li><strong>Plant-local operation.</strong> Many BPA platforms are cloud-first. DMI's analysis and its work orders run inside the plant.</li>
      </ul>

      <h2>If you already own a BPA platform</h2>
      <p>Use both. If it's Power Automate, DMI already talks to it. For other platforms, give them an HTTP trigger and point DMI's Power Automate integration at it, or keep using DMI work orders for the plant loop. DMI supplies the detection, the root cause, the approval and the proof, and your platform runs the multi-step process and its connectors.</p>
    `,
  },
  {
    id: "beyond-threshold-automation",
    title: "Beyond the Threshold Alarm: What Process-Aware Automation Looks Like",
    category: "Automation",
    date: "2026-10-14",
    author: "Mark Davidson, CEO",
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
        <li>Once approved, it starts the maintenance work order: in DMI, in a Teams channel, or through a Power Automate flow.</li>
        <li>It measures whether the corrective action restored performance.</li>
      </ol>
      <blockquote>The difference isn't the automation. It's that the automation acts on a cause, not a symptom.</blockquote>
      <h2>Three capabilities working together</h2>
      <p><strong>Process analysis</strong> discovers your processes from operational data, builds the process graph, and puts a financial number on bottlenecks and quality losses. <strong>Process intelligence</strong> uses distributed small language models to investigate events across machines, lines and business systems and to find root causes. <strong>Process automation</strong> turns the result into action: maintenance requests, quality investigations and optimization steps, run as DMI work orders, Microsoft Teams posts or Power Automate flows once your team approves them.</p>
      <h2>A progression, not a switch</h2>
      <p>Process discovery leads to process intelligence, then root-cause analysis, decision support, automation and finally continuous optimization. Each step builds on the one before. That matters most for small and mid-sized manufacturers, who often don't have a sophisticated MES or analytics team but still need to know why a line slowed down and what to do about it.</p>
    `,
  },
  {
    id: "special-cause-vs-common-cause",
    title: "Stop Chasing Every Wiggle: Special Cause vs. Common Cause on the Plant Floor",
    category: "Quality",
    date: "2026-10-06",
    author: "Mark Davidson, CEO",
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
    author: "Mark Davidson, CEO",
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
    author: "Mark Davidson, CEO",
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
    author: "Mark Davidson, CEO",
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
    fabric: `<g fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2" stroke-dasharray="5 5"><path d="M124 144 H166"/><path d="M234 144 H276"/><path d="M90 122 C110 96 150 82 170 76"/><path d="M310 122 C290 96 250 82 230 76"/><path d="M200 122 V76"/></g><rect x="130" y="42" width="140" height="34" rx="17" fill="#6cbf3c"/><text x="200" y="64" fill="#fff" font-size="13" font-family="Inter" text-anchor="middle" font-weight="700">METADATA</text><g fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.7)" stroke-width="2"><rect x="56" y="122" width="68" height="44" rx="8"/><rect x="166" y="122" width="68" height="44" rx="8"/><rect x="276" y="122" width="68" height="44" rx="8"/></g><g fill="#fff" opacity=".9"><rect x="68" y="146" width="10" height="12"/><rect x="82" y="138" width="10" height="20"/><rect x="96" y="142" width="16" height="16"/><rect x="178" y="140" width="12" height="18"/><rect x="194" y="134" width="10" height="24"/><rect x="208" y="146" width="14" height="12"/><rect x="288" y="142" width="14" height="16"/><rect x="306" y="136" width="10" height="22"/><rect x="320" y="146" width="12" height="12"/></g>`,
    stack: `<g font-family="Inter" font-size="12" font-weight="700" text-anchor="middle"><rect x="70" y="30" width="260" height="38" rx="8" fill="#6cbf3c"/><text x="200" y="54" fill="#fff">DMI</text><rect x="70" y="82" width="260" height="38" rx="8" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.6)"/><text x="200" y="106" fill="#fff">ANYLOG EDGE DATA FABRIC</text><g fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.45)"><rect x="70" y="134" width="56" height="34" rx="6"/><rect x="138" y="134" width="56" height="34" rx="6"/><rect x="206" y="134" width="56" height="34" rx="6"/><rect x="274" y="134" width="56" height="34" rx="6"/></g><g fill="#fff" font-size="9" font-weight="600"><text x="98" y="155">SCADA</text><text x="166" y="155">OPC UA</text><text x="234" y="155">MQTT</text><text x="302" y="155">SQL</text></g></g><g stroke="#6cbf3c" stroke-width="2" class="flow"><path d="M200 68 V82"/><path d="M98 134 V120"/><path d="M166 134 V120"/><path d="M234 134 V120"/><path d="M302 134 V120"/></g>`,
    partner: `<g font-family="Inter" font-weight="700" text-anchor="middle"><rect x="40" y="76" width="96" height="48" rx="10" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.7)" stroke-width="2"/><text x="88" y="105" fill="#fff" font-size="12">INTEGRATOR</text><rect x="160" y="70" width="80" height="60" rx="12" fill="#6cbf3c"/><text x="200" y="105" fill="#fff" font-size="15">DMI</text><g fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.6)"><rect x="276" y="34" width="84" height="34" rx="6"/><rect x="276" y="83" width="84" height="34" rx="6"/><rect x="276" y="132" width="84" height="34" rx="6"/></g><g fill="#fff" font-size="10" font-weight="600"><text x="318" y="55">PLANT A</text><text x="318" y="104">PLANT B</text><text x="318" y="153">PLANT C</text></g></g><g stroke="#6cbf3c" stroke-width="2.5" fill="none" class="flow"><path d="M136 100 H160"/><path d="M240 100 C258 100 258 51 276 51"/><path d="M240 100 H276"/><path d="M240 100 C258 100 258 149 276 149"/></g>`,
    docs: `<g transform="translate(90 40)"><rect width="90" height="120" rx="6" fill="#fff" opacity=".9"/><g stroke="#9db6d6" stroke-width="4"><line x1="14" y1="24" x2="76" y2="24"/><line x1="14" y1="40" x2="70" y2="40"/><line x1="14" y1="56" x2="76" y2="56"/><line x1="14" y1="72" x2="60" y2="72"/></g></g><path d="M190 100 H220" stroke="#6cbf3c" stroke-width="3" class="flow"/><g transform="translate(230 50)"><circle cx="40" cy="50" r="46" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.5)"/><polyline fill="none" stroke="#fff" stroke-width="2.5" points="10,62 24,50 36,56 50,34 66,40"/><circle cx="50" cy="34" r="5" fill="#6cbf3c"/></g>`,
  };
  return `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">${bg}${art[kind] || ""}</svg>`;
}

function fmtDate(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function postCard(p) {
  return `<article class="card post-card" data-cat="${p.category}">
    <a class="thumb" href="post.html?id=${p.id}">${p.image ? `<img src="${p.image}" alt="">` : postArt(p.art)}</a>
    <div class="body">
      <div class="post-meta"><span class="cat">${p.category}</span><span>${fmtDate(p.date)}</span><span>${p.readTime}</span></div>
      <h3><a href="post.html?id=${p.id}">${p.title}</a></h3>
      <p>${p.excerpt}</p>
      <a class="more" href="post.html?id=${p.id}">Read article →</a>
    </div></article>`;
}
