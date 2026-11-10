import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function verify() {
  console.log('Launching Chrome from /usr/bin/google-chrome...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  const consoleMessages = [];
  const networkErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleMessages.push(msg.text());
    }
  });

  page.on('response', resp => {
    if (resp.status() >= 400) {
      networkErrors.push({ url: resp.url(), status: resp.status() });
    }
  });

  // Desktop View
  await page.setViewport({ width: 1440, height: 900 });
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  console.log('Title:', await page.title());

  // Check Portfolio images
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth
    }));
  });
  console.log(`Found ${images.length} images on page.`);
  const failedImages = images.filter(i => i.naturalWidth === 0);
  if (failedImages.length > 0) {
    console.error('Failed images:', failedImages);
  } else {
    console.log('All images loaded successfully with positive naturalWidth!');
  }

  // Take Desktop screenshots
  await page.screenshot({ path: 'public/assets/screenshot-desktop-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  
  // Scroll to Portfolio section and take screenshot
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'public/assets/screenshot-portfolio.png' });

  // Scroll to Gemini AI Demo section
  await page.evaluate(() => {
    const el = document.getElementById('ai-agent-demo');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'public/assets/screenshot-ai-demo.png' });

  // Mobile View
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.screenshot({ path: 'public/assets/screenshot-mobile-hero.png', clip: { x: 0, y: 0, width: 390, height: 844 } });

  console.log('Network errors encountered:', networkErrors);
  console.log('Console errors encountered:', consoleMessages);

  await browser.close();
  console.log('✅ UI Verification Completed Successfully!');
}

verify().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
