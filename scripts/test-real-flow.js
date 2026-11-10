import puppeteer from 'puppeteer-core';

async function testFullTwoWayCycle() {
  console.log('Testing full two-way cycle with UI interaction...');
  const browser = await puppeteer.launch({ 
    executablePath: '/usr/bin/google-chrome', 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('response', async resp => {
    if (resp.url().includes('/api/')) {
      console.log(`[API Response ${resp.status()}]:`, resp.url());
      try {
        console.log('Body:', (await resp.text()).substring(0, 200));
      } catch (e) {}
    }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Submit Inquiry from Visitor
  console.log('Submitting visitor inquiry...');
  await page.evaluate(() => document.getElementById('contact')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));

  const nameInput = await page.$('#contact input[placeholder="e.g. Alex Morgan"]');
  await nameInput.type('Zubair Ahmed');

  const emailInput = await page.$('#contact input[placeholder="alex@company.com"]');
  await emailInput.type('alishan.cs01@gmail.com');

  const descInput = await page.$('#contact textarea');
  await descInput.type('We need high-performance predictive analytics and customer cohort modeling for our fintech platform.');

  await page.evaluate(() => {
    document.querySelector('#contact form')?.requestSubmit();
  });

  await new Promise(r => setTimeout(r, 5000));
  await page.screenshot({ path: 'public/assets/test-verified-confirmation-ui.png' });

  // 2. Open Admin Reply Dispatcher in Footer
  console.log('Opening Admin Reply Dispatcher modal...');
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const adminBtn = btns.find(b => b.innerText.includes('Admin Dispatcher'));
    if (adminBtn) adminBtn.click();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'public/assets/test-verified-admin-reply-modal.png' });

  // Fill in Admin Reply form
  console.log('Sending branded response via Admin Reply modal...');
  const replyEmailInput = await page.$('input[placeholder="client@company.com"]');
  await replyEmailInput.type('alishan.cs01@gmail.com');

  const replyNameInput = await page.$('input[placeholder="Alex Vance"]');
  await replyNameInput.type('Zubair Ahmed');

  await page.evaluate(() => {
    const submitBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Send Branded Response'));
    if (submitBtn) submitBtn.click();
  });

  await new Promise(r => setTimeout(r, 6000));
  await page.screenshot({ path: 'public/assets/test-verified-admin-reply-sent.png' });

  console.log('✅ Two-way cycle verification finished!');
  await browser.close();
}

testFullTwoWayCycle().catch(console.error);
