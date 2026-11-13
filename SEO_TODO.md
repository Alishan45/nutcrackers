# Nutcrackers (nutcrackers.tech) — SEO Action Checklist & Next Steps

This document outlines the **exact, step-by-step actions** for you to perform to complete domain-level verification, connect telemetry, and initiate immediate indexing in Google Search Console.

---

## 1. Google Search Console (GSC) Domain Verification

Because `nutcrackers.tech` was purchased via **Namify** (hosted on Radix `.tech` registry), you need to add a DNS TXT verification record at your domain registrar or DNS host.

### Step-by-Step Instructions:
1. Open the [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** (top left dropdown).
3. Select the **Domain** property type (left card) and enter:
   ```
   nutcrackers.tech
   ```
4. Google will generate a unique TXT record value looking like:
   ```
   google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
5. Log into your **Namify** account dashboard:
   - Navigate to **Domain Management** &rarr; `nutcrackers.tech` &rarr; **DNS Management / DNS Records**.
   - Add a new record:
     - **Record Type:** `TXT`
     - **Host / Name:** `@` (or leave blank depending on interface)
     - **TXT Value:** Paste the `google-site-verification=...` string from Google.
     - **TTL:** `3600` (or `Automatic`)
   - Click **Save DNS Record**.
6. Return to Google Search Console and click **Verify**. *(DNS propagation can take between 5 to 60 minutes).*

> **Note on Existing HTML Verification Tags:**  
> The site already carries active meta verification tags in `index.html`:
> - `GoVY514zhiJbKBcxB-NMo2-mgX-oQYUOYdIzoPCRTIw`
> - `HvH33N7DJ1sin6okdqF6hCtaO_QDJ37eouXNNTE9rbc`  
> If you choose the **URL prefix** method (`https://nutcrackers.tech`), it will verify instantly via these HTML tags. However, verifying via **DNS Domain Property** is strongly recommended as it tracks all subdomains (`www`, non-www, and protocol variations).

---

## 2. Submit XML Sitemap to Google Search Console

Once your property is verified in Google Search Console:
1. In the left navigation menu, click **Sitemaps** (under "Indexing").
2. Under "Add a new sitemap", enter:
   ```
   sitemap.xml
   ```
3. Click **Submit**.
4. Google will display a confirmation banner: *"Sitemap submitted successfully. Google will periodically process it and look for changes."*
5. The sitemap includes all 15 indexable URLs:
   - `https://nutcrackers.tech/`
   - `https://nutcrackers.tech/web-development`
   - `https://nutcrackers.tech/mobile-app-development`
   - `https://nutcrackers.tech/ai-automation`
   - `https://nutcrackers.tech/chatbot-development`
   - `https://nutcrackers.tech/data-science`
   - `https://nutcrackers.tech/data-analytics`
   - `https://nutcrackers.tech/digital-marketing`
   - `https://nutcrackers.tech/video-editing`
   - `https://nutcrackers.tech/blog`
   - `https://nutcrackers.tech/blog/choose-right-web-development-company-pakistan`
   - `https://nutcrackers.tech/blog/how-ai-automation-improves-business-productivity`
   - `https://nutcrackers.tech/blog/why-businesses-need-data-analytics-bi`
   - `https://nutcrackers.tech/blog/custom-chatbots-vs-traditional-customer-support`
   - `https://nutcrackers.tech/blog/choose-mobile-app-development-company`

---

## 3. Request Immediate Indexing via URL Inspection

To expedite indexing for your primary pages today:
1. In Google Search Console, click the top search bar: **"Inspect any URL in nutcrackers.tech"**.
2. Paste the homepage:
   ```
   https://nutcrackers.tech/
   ```
3. Once the data retrieval completes, click **Request Indexing**.
4. Repeat for the 8 core service landing pages:
   - `https://nutcrackers.tech/web-development`
   - `https://nutcrackers.tech/mobile-app-development`
   - `https://nutcrackers.tech/ai-automation`
   - `https://nutcrackers.tech/chatbot-development`
   - `https://nutcrackers.tech/data-science`
   - `https://nutcrackers.tech/data-analytics`
   - `https://nutcrackers.tech/digital-marketing`
   - `https://nutcrackers.tech/video-editing`
5. Repeat for the blog hub and your articles.

---

## 4. Google Analytics 4 (GA4) Measurement ID Setup

The tracking utility (`src/utils/analytics.ts`) is fully built and deployed. It automatically listens for your GA4 ID.

### How to Activate GA4 Tracking:
1. Go to [Google Analytics](https://analytics.google.com/).
2. Create a GA4 property named **Nutcrackers** with timezone set to **Pakistan (GMT+5)** and currency set to **USD ($)**.
3. Under **Data Streams**, select **Web** and enter:
   - Website URL: `https://nutcrackers.tech`
   - Stream Name: `Nutcrackers Web Production`
4. Copy your **Measurement ID** (formatted as `G-XXXXXXXXXX`).
5. Open your [Vercel Project Dashboard](https://vercel.com/ali-shans-projects-33c0142d/nutcrackers).
6. Navigate to **Settings** &rarr; **Environment Variables**.
7. Add a new variable:
   - **Key:** `VITE_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your actual Measurement ID)
   - **Environments:** Check Production, Preview, and Development.
8. Click **Save**.
9. Trigger a redeploy (or simply let the next git commit redeploy).
10. The website will immediately begin streaming live page views and conversion events (`whatsapp_click`, `generate_lead`, `video_start`) into GA4 Realtime reports.

---

## 5. Google Business Profile (GBP) Local SEO Checklist

To dominate local search queries in **Taxila**, **Wah Cantt**, **Islamabad**, and **Rawalpindi**:

1. Visit [Google Business Profile](https://www.google.com/business/).
2. Click **Manage Now** and enter the business name: **Nutcrackers**.
3. Select primary category: **Software Company** or **Website Designer**.
4. Secondary categories:
   - *Video Production Service*
   - *Marketing Agency*
   - *Internet Marketing Service*
5. **Location Type**: Select **"Service-area business"** (do not display a physical street address if you operate as a digital studio without customer walk-ins).
6. Add Service Areas:
   - `Taxila, Punjab, Pakistan`
   - `Wah Cantt, Punjab, Pakistan`
   - `Islamabad, Islamabad Capital Territory, Pakistan`
   - `Rawalpindi, Punjab, Pakistan`
7. Add Contact Details:
   - Primary Phone: `+92 312 5355078`
   - Website URL: `https://nutcrackers.tech`
8. Upload High-Resolution Visual Assets:
   - Official Logo: `public/assets/nutcrackers-emblem-cropped.png`
   - Branded Business Card: `new_nutcrackers_business_card.jpeg`
   - Portfolio showcase previews from `dist/images/portfolio/`

---

## 6. Bing Webmaster Tools Integration

Bing powers Yahoo, DuckDuckGo, and Copilot AI search results.

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Sign in with the same Google Account used for Google Search Console.
3. Click **Import from Google Search Console**.
4. Bing will automatically verify `nutcrackers.tech` and import `sitemap.xml` with zero manual DNS configuration required.

---

## 7. Namify Nameserver & DNS Verification

When you are ready to point your Namify domain directly to Vercel:
- Ensure the following DNS records are configured in Namify for `nutcrackers.tech`:
  - **A Record**: Host `@` &rarr; Points to `76.76.21.21` (Vercel IP)
  - **CNAME Record**: Host `www` &rarr; Points to `cname.vercel-dns.com`

---

*All local codebase engineering, prerendering, sitemaps, structured data, service routes, and content marketing articles are 100% complete and deployed live on Vercel.*
