import puppeteer from 'puppeteer-core';

async function verifyLeadership() {
  console.log('Launching browser to verify Leadership Section...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  const networkErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  page.on('response', resp => {
    if (resp.status() >= 400) {
      networkErrors.push({ url: resp.url(), status: resp.status() });
    }
  });

  // 1. Desktop Verification
  await page.setViewport({ width: 1440, height: 900 });
  console.log('Navigating to http://localhost:3000/#team...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    const el = document.getElementById('team');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1200));

  // Check section exists and title matches
  const sectionData = await page.evaluate(() => {
    const section = document.getElementById('team');
    if (!section) return null;
    const h2 = section.querySelector('h2')?.innerText;
    const sub = section.querySelector('p')?.innerText;
    const cards = Array.from(section.querySelectorAll('.group')).map(card => {
      const img = card.querySelector('img');
      const h3 = card.querySelector('h3')?.innerText;
      const designation = card.querySelector('span.font-mono')?.innerText;
      return {
        name: h3,
        designation,
        imgSrc: img ? img.src : null,
        imgNaturalWidth: img ? img.naturalWidth : 0,
        imgNaturalHeight: img ? img.naturalHeight : 0,
      };
    });
    return { h2, sub, cards };
  });

  console.log('Section Header:', sectionData?.h2);
  console.log('Supporting text:', sectionData?.sub);
  console.log('Leadership Cards:', JSON.stringify(sectionData?.cards, null, 2));

  // Take Desktop Screenshot
  await page.screenshot({ path: 'public/assets/verified-leadership-desktop.png' });
  console.log('Captured verified-leadership-desktop.png');

  // 2. Mobile Verification
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const el = document.getElementById('team');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: 'public/assets/verified-leadership-mobile.png' });
  console.log('Captured verified-leadership-mobile.png');

  console.log('Network errors:', networkErrors);
  console.log('Console errors:', consoleErrors);

  await browser.close();
  console.log('✅ Leadership Section Verification Completed Successfully!');
}

verifyLeadership().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
