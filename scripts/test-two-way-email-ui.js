import puppeteer from 'puppeteer-core';

async function testEmailUI() {
  console.log('Launching browser to test two-way email UI...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Log all network responses and console errors
  page.on('response', async resp => {
    if (resp.url().includes('/api/')) {
      console.log(`API [${resp.status()}]: ${resp.url()}`);
      try {
        const text = await resp.text();
        console.log('Response body:', text);
      } catch (e) {}
    }
  });

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Scroll to contact form
  console.log('Scrolling to contact section...');
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));

  // Take screenshot of Contact section with Two-Way status badge
  await page.screenshot({ path: 'public/assets/test-contact-twoway-form.png' });
  console.log('Captured test-contact-twoway-form.png');

  // Fill in form
  console.log('Filling in contact form...');
  await page.type('input[placeholder="e.g. Alex Morgan"]', 'Sarah Jenkins');
  await page.type('input[placeholder="alex@company.com"]', 'alishan.cs01@gmail.com');
  await page.type('input[placeholder="Company or Brand Name"]', 'Nexus Ventures');
  await page.select('select', 'AI Automation');
  await page.type('textarea', 'We want to automate our customer onboarding workflows and invoice generation using AI.');

  // Submit form
  console.log('Submitting form...');
  await page.click('button[type="submit"]');

  // Wait 4 seconds to inspect response
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: 'public/assets/test-after-submit.png' });
  console.log('Captured test-after-submit.png');

  // Test opening Admin Reply Dispatcher
  console.log('Opening Admin Reply Dispatcher modal...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const adminBtn = btns.find(b => b.innerText.includes('Admin Dispatcher'));
    if (adminBtn) adminBtn.click();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'public/assets/test-admin-reply-modal.png' });
  console.log('Captured test-admin-reply-modal.png');

  console.log('Console errors encountered:', errors);
  await browser.close();
  console.log('✅ Two-Way Email UI Test Completed Successfully!');
}

testEmailUI().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
