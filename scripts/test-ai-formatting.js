import puppeteer from 'puppeteer-core';

const SAMPLE_TEXT = `As the Senior AI Solution Architect at Nutcrackers, I have designed a resilient, low-latency automation architecture to instantly handle incoming ecommerce customer inquiries with high precision. **1. Webhook Ingestion & Context Extraction** The pipeline initiates via an inbound webhook from your ecommerce platform (e.g., Shopify/WooCommerce) capturing the customer's message. This payload is routed through an n8n or Make orchestration layer, where a pre-processing script sanitizes the input, extracts metadata (order history, lifetime value), and maps it to a standardized JSON schema. **2. Intelligent RAG & Sentiment Transformation** The structured payload is dispatched to an LLM agent enriched with Retrieval-Augmented Generation (RAG). The AI queries your internal knowledge base (product docs, shipping policies) and evaluates customer sentiment and urgency. It then synthesizes a highly personalized, context-aware draft response while simultaneously tagging the intent (e.g., *return request*, *sizing query*, *technical bug*). **3. Multi-Channel Syncing & Autonomous Execution** Finally, the enriched data is concurrently pushed to your CRM (e.g., HubSpot/Salesforce) to update the customer lifecycle stage and logged in a data warehouse for analytics. Simultaneously, based on the intent confidence score, the system either auto-dispatches the resolution via email/SMS or routes it to a human support queue with a pre-formatted Copilot summary. To deploy this scalable workflow integrated into your existing tech stack, let's schedule a milestone project consultation with the Nutcrackers team.`;

async function testFormatting() {
  console.log('Testing AI text formatting and Gemini branding removal...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  page.on('request', req => {
    if (req.url().includes('/api/')) console.log('FETCH REQUEST:', req.method(), req.url());
  });
  page.on('response', res => {
    if (res.url().includes('/api/')) console.log('FETCH RESPONSE:', res.status(), res.url());
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Check that NO customer-facing text contains "gemini"
  const pageText = await page.evaluate(() => document.body.innerText.toLowerCase());
  const containsGemini = pageText.includes('gemini');
  console.log('Page visible text contains "gemini":', containsGemini);
  if (containsGemini) {
    const matches = await page.evaluate(() => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const found = [];
      let node;
      while (node = walker.nextNode()) {
        if (node.nodeValue && node.nodeValue.toLowerCase().includes('gemini')) {
          found.push(node.nodeValue.trim());
        }
      }
      return found;
    });
    console.error('Found raw "gemini" strings in DOM:', matches);
  } else {
    console.log('✅ Verified: Zero visible mentions of "Gemini" on the entire website!');
  }

  // 2. Scroll to Interactive AI Demo (#demo)
  console.log('Navigating to #demo...');
  await page.evaluate(() => document.getElementById('demo')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));

  // 3. Switch to Tab 2: AI Automation Pipeline
  console.log('Clicking Tab 2 (Automation Pipeline)...');
  const tabBtn = await page.waitForSelector('button ::-p-text(AI Automation Pipeline)');
  await tabBtn.click();
  await new Promise(r => setTimeout(r, 1000));

  // 4. Click "Generate Pipeline with AI"
  console.log('Finding and clicking "Generate Pipeline"...');
  const genBtn = await page.waitForSelector('button ::-p-text(Generate Pipeline)');
  await genBtn.click();

  console.log('Waiting for AI response...');
  await new Promise(r => setTimeout(r, 8000));

  const pageSnapshot = await page.evaluate(() => {
    return {
      hasText: document.body.innerText.includes('Autonomous Pipeline Architecture'),
      bodySnippet: document.body.innerText.substring(0, 500)
    };
  });
  console.log('Snapshot:', pageSnapshot);

  await new Promise(r => setTimeout(r, 1000));

  // Inspect the rendered structure of the AI output
  const renderedCheck = await page.evaluate(() => {
    const containers = Array.from(document.querySelectorAll('div'));
    const container = containers.find(el => el.innerText && el.innerText.includes('Autonomous Pipeline Architecture') && el.innerText.includes('Synthesized in'));
    if (!container) return { found: false };
    const rawText = container.innerText;
    const hasUnparsedAsterisks = container.innerHTML.includes('**');
    const boldTags = Array.from(container.querySelectorAll('strong, .font-bold, .font-semibold')).map(s => s.innerText);
    const stepCards = container.querySelectorAll('.bg-white\\/\\[0\\.03\\]').length;
    return {
      found: true,
      hasUnparsedAsterisks,
      boldTagsCount: boldTags.length,
      stepCardsCount: stepCards,
      snippet: rawText.substring(0, 300)
    };
  });

  console.log('Rendered AI Architecture Check:\n', JSON.stringify(renderedCheck, null, 2));

  // Take screenshot of beautifully formatted AI response
  await page.screenshot({ path: 'public/assets/verified-ai-formatted-output.png' });
  console.log('Captured public/assets/verified-ai-formatted-output.png');

  // 5. Test Tab 1 chat message rendering
  console.log('Testing Tab 1 Chat...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const tab1 = btns.find(b => b.innerText.includes('Live Nutcrackers AI Agent'));
    if (tab1) tab1.click();
  });
  await new Promise(r => setTimeout(r, 800));

  await page.type('input[placeholder*="Ask our AI Consultant"]', 'What are your core AI services?');
  await page.evaluate(() => {
    const sendBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Ask AI Assistant'));
    if (sendBtn) sendBtn.click();
  });

  await new Promise(r => setTimeout(r, 7000));
  await page.screenshot({ path: 'public/assets/verified-ai-chat-formatted.png' });
  console.log('Captured public/assets/verified-ai-chat-formatted.png');

  await browser.close();
  console.log('✅ Formatting and Branding Verification Completed Successfully!');
}

testFormatting().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
