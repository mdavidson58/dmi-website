/* ------------------------------------------------------------------
   Google Analytics 4. Paste your Measurement ID (looks like G-XXXXXXXXXX)
   from Google Analytics > Admin > Data streams. Leave empty to disable.
   Analytics only loads after the visitor accepts the cookie banner
   (see renderConsentBanner in site.js).
   ------------------------------------------------------------------ */
const GA_MEASUREMENT_ID = "G-W8BW6VD1K7";
const CONSENT_KEY = "cw-analytics-consent"; // "granted" | "denied"

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

function getAnalyticsConsent() {
  try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
}

let gaLoaded = false;
function loadAnalytics() {
  if (gaLoaded || !GA_MEASUREMENT_ID) return;
  gaLoaded = true;
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

function setAnalyticsConsent(value) {
  try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* storage blocked */ }
  if (value === "granted") {
    loadAnalytics();
  } else if (gaLoaded) {
    gtag("consent", "update", { analytics_storage: "denied" });
    // Remove cookies Google Analytics already set.
    const host = location.hostname.replace(/^www\./, "");
    document.cookie.split(";").map(c => c.trim().split("=")[0]).filter(n => n.startsWith("_ga")).forEach(n => {
      [location.hostname, "." + host].forEach(d => {
        document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
      });
      document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
  }
}

if (getAnalyticsConsent() === "granted") loadAnalytics();
