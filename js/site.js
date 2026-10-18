/* ------------------------------------------------------------------
   Site-wide settings. Replace the placeholders below before launch.
   ------------------------------------------------------------------ */
const SITE = {
  company: "CogniaWerks",
  product: "DMI — Distributed Manufacturing Intelligence",
  email: "support@cogniawerks.com",
  salesEmail: "sales@cogniawerks.com",
  phone: "+1 404 358 4409",
  address: "2866 Silver Hill Terrace, Atlanta, GA 30316",
  // Set to a form backend URL (e.g. Formspree, HubSpot, or your own API) to
  // POST form submissions. When empty, forms open a pre-filled email instead.
  formEndpoint: "",
};

const NAV = [
  ["index.html", "Home"],
  ["product.html", "Product"],
  ["solutions.html", "How We Solve It"],
  ["automation.html", "Automation"],
  ["industries.html", "Industries"],
  ["blog.html", "Blog"],
  ["about.html", "Who We Are"],
  ["partners.html", "Partners"],
  ["contact.html", "Contact"],
];

function renderHeader() {
  const here = location.pathname.split("/").pop() || "index.html";
  const current = here === "post.html" ? "blog.html" : here;
  const links = NAV.map(([href, label]) =>
    `<li><a href="${href}"${href === current ? ' class="active"' : ""}>${label}</a></li>`).join("");
  document.getElementById("site-header").innerHTML = `
  <header class="site-header">
    <nav class="container nav" aria-label="Main">
      <a class="brand" href="index.html"><img src="assets/logo.png" alt="CogniaWerks — Industrial Knowledge. Intelligent Action."></a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <ul class="nav-links">${links}<li><a class="btn btn-primary" href="contact.html#demo">Request a Demo</a></li></ul>
    </nav>
  </header>`;
  const toggle = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="footer-logo" href="index.html"><img src="assets/logo.png" alt="CogniaWerks"></a>
          <p>A unified intelligence layer across manufacturing operations — running inside your plant, alongside the systems you already own.</p>
        </div>
        <div><h4>Platform</h4><ul>
          <li><a href="product.html">DMI Product</a></li>
          <li><a href="solutions.html">How We Solve It</a></li>
          <li><a href="automation.html">Process Automation</a></li>
          <li><a href="product.html#integrations">Integrations</a></li>
          <li><a href="product.html#roadmap">Roadmap</a></li></ul></div>
        <div><h4>Company</h4><ul>
          <li><a href="about.html">Who We Are</a></li>
          <li><a href="industries.html">Industries</a></li>
          <li><a href="partners.html">Partners</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li></ul></div>
        <div><h4>Get in touch</h4><ul>
          <li>Sales: <a href="mailto:${SITE.salesEmail}">${SITE.salesEmail}</a></li>
          <li>Support: <a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li><a href="tel:${SITE.phone.replace(/[^\d+]/g, "")}">${SITE.phone}</a></li>
          <li>${SITE.address}</li>
          <li><a href="contact.html#demo">Request a Demo →</a></li></ul></div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${SITE.company}. All rights reserved.</span>
        <span><a href="privacy.html">Privacy Policy</a> · <a href="#">Terms of Use</a> · <a href="#" data-cookie-settings>Cookie settings</a></span>
      </div>
    </div>
  </footer>`;
}

function fillPlaceholders() {
  document.querySelectorAll("[data-site]").forEach(el => {
    const key = el.dataset.site;
    el.textContent = SITE[key];
    if (el.tagName === "A" && key.toLowerCase().includes("email")) el.href = "mailto:" + SITE[key];
    if (el.tagName === "A" && key === "phone") el.href = "tel:" + SITE.phone.replace(/[^\d+]/g, "");
  });
}

/* Forms: POST to SITE.formEndpoint if configured, otherwise open a pre-filled email. */
function wireForms() {
  document.querySelectorAll("form[data-form]").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      data.formType = form.dataset.form;
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      try {
        if (SITE.formEndpoint) {
          const res = await fetch(SITE.formEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data),
          });
          if (!res.ok) throw new Error("Submission failed");
        } else {
          const subject = form.dataset.form === "demo"
            ? `Demo request — ${data.company || ""}` : `Website inquiry — ${data.name || ""}`;
          const body = Object.entries(data).filter(([k]) => k !== "formType")
            .map(([k, v]) => `${k}: ${v}`).join("\n");
          const to = SITE.salesEmail;
          location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
        if (window.gtag) gtag("event", form.dataset.form === "newsletter" ? "sign_up" : "generate_lead", { form_type: form.dataset.form });
        form.hidden = true;
        form.parentElement.querySelector(".form-success").classList.add("show");
      } catch (err) {
        alert("Sorry, something went wrong. Please email us at " + SITE.salesEmail);
        btn.disabled = false;
      }
    });
  });
}

/* Cookie consent: analytics only loads after "Accept" (see analytics.js). */
function renderConsentBanner(force) {
  if (typeof setAnalyticsConsent !== "function" || !GA_MEASUREMENT_ID) return;
  if (!force && getAnalyticsConsent()) return;
  document.querySelector(".cookie-banner")?.remove();
  const el = document.createElement("div");
  el.className = "cookie-banner";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-live", "polite");
  el.setAttribute("aria-label", "Cookie consent");
  el.innerHTML = `
    <p><strong>We value your privacy.</strong> We'd like to use analytics cookies (Google Analytics) to understand how visitors use our site and improve it. They're only set if you accept. You can change your choice at any time from "Cookie settings" in the footer. <a href="privacy.html">Privacy Policy</a></p>
    <div class="cookie-actions">
      <button type="button" class="btn btn-primary" data-consent="denied">Reject</button>
      <button type="button" class="btn btn-primary" data-consent="granted">Accept</button>
    </div>`;
  el.addEventListener("click", e => {
    const v = e.target.closest("[data-consent]")?.dataset.consent;
    if (!v) return;
    setAnalyticsConsent(v);
    el.remove();
  });
  document.body.appendChild(el);
}

document.addEventListener("click", e => {
  if (e.target.closest("[data-cookie-settings]")) { e.preventDefault(); renderConsentBanner(true); }
});

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  fillPlaceholders();
  wireForms();
  renderConsentBanner();
});
