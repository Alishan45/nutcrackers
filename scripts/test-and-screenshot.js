import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function run() {
  console.log('Launching Chrome via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  // Collect console logs and errors
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    errors.push(err.message);
  });

  // Set desktop viewport
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Wait for 1 second for animations to settle
  await new Promise(r => setTimeout(r, 1200));

  // Screenshot 1: Hero & Top Navigation
  await page.screenshot({ path: 'test-1-hero.png' });
  console.log('Saved test-1-hero.png');

  // Scroll to #services and capture Bento Grid
  await page.evaluate(() => {
    document.getElementById('services')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test-2-services.png' });
  console.log('Saved test-2-services.png');

  // Click on the first service card ("Video Editing") to verify modal
  console.log('Clicking on Video Editing card to test modal...');
  await page.click('#services .group');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'test-3-service-modal.png' });
  console.log('Saved test-3-service-modal.png');

  // Close modal by clicking Close button
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const closeBtn = btns.find(b => b.textContent?.includes('Close'));
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // Scroll to #showcase and capture Video Showcase
  await page.evaluate(() => {
    document.getElementById('showcase')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test-4-video-showcase.png' });
  console.log('Saved test-4-video-showcase.png');

  // Scroll to #demo and test AI Micro-Demo
  await page.evaluate(() => {
    document.getElementById('demo')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test-5-ai-demo.png' });
  console.log('Saved test-5-ai-demo.png');

  // Click on the "02 · AI Automation Workflow" tab
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('#demo button'));
    const tabBtn = btns.find(b => b.textContent?.includes('AI Automation Workflow'));
    if (tabBtn) tabBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'test-6-automation-tab.png' });
  console.log('Saved test-6-automation-tab.png');

  // Scroll to #work (Portfolio)
  await page.evaluate(() => {
    document.getElementById('work')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test-7-portfolio.png' });
  console.log('Saved test-7-portfolio.png');

  // Scroll to #contact and capture Contact form & Business card
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test-8-contact.png' });
  console.log('Saved test-8-contact.png');

  // Mobile responsiveness test (390x844 iPhone 14 / modern smartphone)
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'test-9-mobile-hero.png' });
  console.log('Saved test-9-mobile-hero.png');

  // Check errors
  console.log('--- TEST RESULTS ---');
  console.log('Console Errors count:', errors.length);
  if (errors.length > 0) {
    console.error('Errors found:', errors);
  } else {
    console.log('PASS: Zero console errors or runtime failures detected!');
  }

  await browser.close();
}

run().catch((e) => {
  console.error('Puppeteer test error:', e);
  process.exit(1);
});
