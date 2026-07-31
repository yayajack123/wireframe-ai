(function () {
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/wireframes/pages/') || path.includes('/wireframes/base/')) {
      return '../../';
    } else if (path.includes('/high-fidelity/')) {
      return '../';
    }
    return './';
  }

  function getRoutes() {
    const path = window.location.pathname;
    const isWireframe = path.includes('/wireframes/');
    const isHiFi = path.includes('/high-fidelity/');

    if (isWireframe) {
      const isPages = path.includes('/wireframes/pages/');
      const pageDir = isPages ? '' : '../pages/';
      const baseDir = isPages ? '../base/' : '';

      return {
        home: baseDir + 'home-wireframe.html',
        companyProfile: pageDir + 'company-profile-wireframe.html',
        historyMilestones: pageDir + 'history-milestones-wireframe.html',
        legalDocuments: pageDir + 'legal-documents-wireframe.html',
        businessUnits: pageDir + 'business-units-wireframe.html',
        investorHighlights: pageDir + 'investor-highlights-wireframe.html',
        marketDisclosure: pageDir + 'market-disclosure-wireframe.html',
        reports: pageDir + 'reports-wireframe.html',
        irContact: pageDir + 'ir-contact-wireframe.html',
        governance: pageDir + 'governance-wireframe.html',
        sustainability: pageDir + 'sustainability-wireframe.html',
        newsroom: pageDir + 'newsroom-wireframe.html',
        insights: pageDir + 'insights-wireframe.html',
        careers: pageDir + 'careers-wireframe.html',
        contact: pageDir + 'contact-wireframe.html'
      };
    } else if (isHiFi) {
      return {
        home: 'index.html',
        companyProfile: '../wireframes/pages/company-profile-wireframe.html',
        historyMilestones: '../wireframes/pages/history-milestones-wireframe.html',
        legalDocuments: '../wireframes/pages/legal-documents-wireframe.html',
        businessUnits: 'index.html#business-unit',
        investorHighlights: '../wireframes/pages/investor-highlights-wireframe.html',
        marketDisclosure: '../wireframes/pages/market-disclosure-wireframe.html',
        reports: '../wireframes/pages/reports-wireframe.html',
        irContact: '../wireframes/pages/ir-contact-wireframe.html',
        governance: '../wireframes/pages/governance-wireframe.html',
        sustainability: 'index.html#sustainability',
        newsroom: 'newsroom.html',
        insights: 'newsroom.html#podcast',
        careers: 'careers.html',
        contact: 'index.html#contact'
      };
    } else {
      return {
        home: 'wireframes/base/home-wireframe.html',
        companyProfile: 'wireframes/pages/company-profile-wireframe.html',
        historyMilestones: 'wireframes/pages/history-milestones-wireframe.html',
        legalDocuments: 'wireframes/pages/legal-documents-wireframe.html',
        businessUnits: 'wireframes/pages/business-units-wireframe.html',
        investorHighlights: 'wireframes/pages/investor-highlights-wireframe.html',
        marketDisclosure: 'wireframes/pages/market-disclosure-wireframe.html',
        reports: 'wireframes/pages/reports-wireframe.html',
        irContact: 'wireframes/pages/ir-contact-wireframe.html',
        governance: 'wireframes/pages/governance-wireframe.html',
        sustainability: 'wireframes/pages/sustainability-wireframe.html',
        newsroom: 'wireframes/pages/newsroom-wireframe.html',
        insights: 'wireframes/pages/insights-wireframe.html',
        careers: 'wireframes/pages/careers-wireframe.html',
        contact: 'wireframes/pages/contact-wireframe.html'
      };
    }
  }

  function renderNavbar() {
    const basePath = getBasePath();
    const routes = getRoutes();
    const logoUrl = basePath + 'assets/logo.svg';

    const navbarHTML = `
  <header id="main-header" class="navbar-relume sticky top-0 left-0 right-0 z-50 bg-white border-b border-black/10 transition-colors duration-200">
    <nav class="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between" aria-label="Main Navigation">

      <!-- Brand Logo -->
      <a href="${routes.home}" class="flex items-center shrink-0" aria-label="Samuel Group Home">
        <img src="${logoUrl}" alt="Samuel Group" class="h-12 w-auto brightness-0" />
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden lg:flex items-center gap-2 font-switzer font-medium text-[15px]">
        <a href="${routes.home}" class="px-3 py-2 text-[#0a0a0a] hover:opacity-75 transition">Home</a>

        <!-- About Us Dropdown -->
        <div class="relative group py-1">
          <button class="flex items-center gap-1.5 px-3 py-2 text-[#0a0a0a] hover:opacity-75 transition">
            <span>About Us</span>
            <svg class="w-4 h-4 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="dropdown-menu absolute top-full left-0 w-56 p-2 mt-1 bg-white border border-black/12 rounded-lg hidden group-hover:block shadow-lg z-50">
            <a href="${routes.companyProfile}" class="block px-3 py-2 text-xs text-[#0a0a0a] hover:bg-neutral-100 rounded">Company Profile</a>
            <a href="${routes.historyMilestones}" class="block px-3 py-2 text-xs text-[#0a0a0a] hover:bg-neutral-100 rounded">History &amp; Milestones</a>
            <a href="${routes.legalDocuments}" class="block px-3 py-2 text-xs text-[#0a0a0a] hover:bg-neutral-100 rounded">Legal Documents</a>
          </div>
        </div>

        <!-- Investors Dropdown -->
        <div class="relative group py-1">
          <button class="flex items-center gap-1.5 px-3 py-2 text-[#0a0a0a] hover:opacity-75 transition">
            <span>Investors</span>
            <svg class="w-4 h-4 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="dropdown-menu absolute top-full left-0 w-60 p-2 mt-1 bg-white border border-black/12 rounded-lg hidden group-hover:block shadow-lg z-50">
            <a href="${routes.investorHighlights}" class="block px-3 py-2 text-xs text-[#0a0a0a] hover:bg-neutral-100 rounded">Investment Highlights</a>
            <a href="${routes.marketDisclosure}" class="block px-3 py-2 text-xs text-[#0a0a0a] hover:bg-neutral-100 rounded">Market &amp; Disclosure</a>
            <a href="${routes.reports}" class="block px-3 py-2 text-xs text-[#0a0a0a] hover:bg-neutral-100 rounded">Reports</a>
            <a href="${routes.irContact}" class="block px-3 py-2 text-xs text-[#0a0a0a] hover:bg-neutral-100 rounded">Investor Relations Contact</a>
          </div>
        </div>

        <a href="${routes.governance}" class="px-3 py-2 text-[#0a0a0a] hover:opacity-75 transition">Corporate Governance</a>
        <a href="${routes.newsroom}" class="px-3 py-2 text-[#0a0a0a] hover:opacity-75 transition">Newsroom</a>
        <a href="${routes.careers}" class="px-3 py-2 text-[#0a0a0a] hover:opacity-75 transition">Career</a>
      </div>

      <!-- Desktop Contact CTA -->
      <div class="hidden lg:flex items-center">
        <a href="${routes.contact}" class="wireframe-btn-pill-dark">Contact Us</a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="lg:hidden p-2 text-[#0a0a0a] focus:outline-none" aria-label="Toggle Navigation Menu">
        <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
  </header>
    `;

    const existingTarget = document.getElementById('navbar-container') || document.getElementById('main-header');
    if (existingTarget) {
      existingTarget.outerHTML = navbarHTML;
    }

    // Attach Mobile Menu Handlers
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileBtn && mobileDrawer && hamburgerIcon && closeIcon) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = !mobileDrawer.classList.contains('hidden');
        if (isOpen) {
          mobileDrawer.classList.add('hidden');
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        } else {
          mobileDrawer.classList.remove('hidden');
          mobileDrawer.classList.add('flex');
          hamburgerIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
          document.body.classList.add('overflow-hidden');
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
  } else {
    renderNavbar();
  }
})();
