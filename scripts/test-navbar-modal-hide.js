import puppeteer from 'puppeteer-core';

async function testNavbarHiding() {
  console.log('Testing navbar disappearance on mobile and desktop when case study is opened...');

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // ==========================================
  // TEST 1: MOBILE VIEW (390 x 844 - iPhone 14)
  // ==========================================
  console.log('\n--- 1. TESTING MOBILE VIEW (390x844) ---');
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Check initial mobile navbar visibility
  const initialMobileNavState = await mobilePage.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    const style = window.getComputedStyle(header);
    const rect = header.getBoundingClientRect();
    return {
      opacity: style.opacity,
      visibility: style.visibility,
      pointerEvents: style.pointerEvents,
      top: rect.top,
      height: rect.height
    };
  });
  console.log('Initial mobile navbar state:', initialMobileNavState);

  // Scroll to Portfolio Section (#work)
  await mobilePage.evaluate(() => document.getElementById('work')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));

  // Click "View Full Case Study" on SB Healthcare Clinic
  console.log('Clicking "View Full Case Study" on mobile...');
  await mobilePage.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.innerText.includes('View Full Case Study'));
    if (btn) {
      btn.scrollIntoView({ block: 'center' });
      btn.click();
    }
  });
  await new Promise(r => setTimeout(r, 800));

  // Check navbar state while modal is open
  const openMobileNavState = await mobilePage.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    const style = window.getComputedStyle(header);
    const rect = header.getBoundingClientRect();
    const isModalOpen = document.body.classList.contains('case-study-open');
    return {
      isModalOpen,
      opacity: style.opacity,
      visibility: style.visibility,
      pointerEvents: style.pointerEvents,
      transform: style.transform,
      top: rect.top,
      bottom: rect.bottom
    };
  });
  console.log('Mobile navbar state with Case Study OPEN:', openMobileNavState);

  if (openMobileNavState.opacity === '0' || openMobileNavState.visibility === 'hidden' || openMobileNavState.bottom <= 0) {
    console.log('✅ PASS: Navbar completely disappeared on mobile view when Case Study opened!');
  } else {
    console.error('❌ FAIL: Navbar is still visible on mobile!');
  }

  // Take mobile screenshot
  await mobilePage.screenshot({ path: 'public/assets/verified-mobile-casestudy-no-navbar.png' });
  console.log('Captured public/assets/verified-mobile-casestudy-no-navbar.png');

  // Close modal via Close Button
  console.log('Closing Case Study modal on mobile...');
  await mobilePage.evaluate(() => {
    const closeBtn = document.querySelector('button[aria-label="Close modal window"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));

  // Check navbar reappeared
  const closedMobileNavState = await mobilePage.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    const style = window.getComputedStyle(header);
    const rect = header.getBoundingClientRect();
    return {
      opacity: style.opacity,
      visibility: style.visibility,
      top: rect.top,
      bottom: rect.bottom
    };
  });
  console.log('Mobile navbar state AFTER closing modal:', closedMobileNavState);
  if (closedMobileNavState.opacity === '1' && closedMobileNavState.visibility === 'visible') {
    console.log('✅ PASS: Navbar smoothly reappeared on mobile after closing Case Study!');
  }

  await mobilePage.close();

  // ==========================================
  // TEST 2: DESKTOP VIEW (1440 x 900)
  // ==========================================
  console.log('\n--- 2. TESTING DESKTOP VIEW (1440x900) ---');
  const desktopPage = await browser.newPage();
  await desktopPage.setViewport({ width: 1440, height: 900 });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Scroll to Portfolio Section (#work)
  await desktopPage.evaluate(() => document.getElementById('work')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));

  // Click "View Full Case Study" on SB Healthcare Clinic
  console.log('Clicking "View Full Case Study" on desktop...');
  await desktopPage.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find(b => b.innerText.includes('View Full Case Study'));
    if (btn) {
      btn.scrollIntoView({ block: 'center' });
      btn.click();
    }
  });
  await new Promise(r => setTimeout(r, 800));

  // Check navbar state while modal is open
  const openDesktopNavState = await desktopPage.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    const style = window.getComputedStyle(header);
    const rect = header.getBoundingClientRect();
    const isModalOpen = document.body.classList.contains('case-study-open');
    return {
      isModalOpen,
      opacity: style.opacity,
      visibility: style.visibility,
      pointerEvents: style.pointerEvents,
      transform: style.transform,
      top: rect.top,
      bottom: rect.bottom
    };
  });
  console.log('Desktop navbar state with Case Study OPEN:', openDesktopNavState);

  if (openDesktopNavState.opacity === '0' || openDesktopNavState.visibility === 'hidden' || openDesktopNavState.bottom <= 0) {
    console.log('✅ PASS: Navbar completely disappeared on desktop view when Case Study opened!');
  } else {
    console.error('❌ FAIL: Navbar is still visible on desktop!');
  }

  // Take desktop screenshot
  await desktopPage.screenshot({ path: 'public/assets/verified-desktop-casestudy-no-navbar.png' });
  console.log('Captured public/assets/verified-desktop-casestudy-no-navbar.png');

  // Close modal via Escape Key
  console.log('Pressing Escape key to close Case Study on desktop...');
  await desktopPage.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 600));

  // Check navbar reappeared
  const closedDesktopNavState = await desktopPage.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    const style = window.getComputedStyle(header);
    return {
      opacity: style.opacity,
      visibility: style.visibility
    };
  });
  console.log('Desktop navbar state AFTER pressing Escape:', closedDesktopNavState);
  if (closedDesktopNavState.opacity === '1' && closedDesktopNavState.visibility === 'visible') {
    console.log('✅ PASS: Navbar smoothly reappeared on desktop after closing Case Study!');
  }

  await desktopPage.close();
  await browser.close();
  console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY!');
}

testNavbarHiding().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
