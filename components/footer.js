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
        sustainability: pageDir + 'sustainability-wireframe.html',
        careers: pageDir + 'careers-wireframe.html'
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
        sustainability: 'index.html#sustainability',
        careers: 'careers.html'
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
        sustainability: 'wireframes/pages/sustainability-wireframe.html',
        careers: 'wireframes/pages/careers-wireframe.html'
      };
    }
  }

  function renderFooter() {
    const basePath = getBasePath();
    const routes = getRoutes();
    const logoUrl = basePath + 'assets/logo.svg';

    const footerHTML = `
  <!-- Footer Component -->
  <footer id="main-footer" class="w-full bg-[#0a0a0a] text-white">
    
    <!-- Top Running Marquee Banner -->
    <div class="footer-ticker overflow-hidden border-b border-white/18 py-6 bg-[#0a0a0a]">
      <div class="footer-ticker-content flex items-center whitespace-nowrap text-[40px] font-switzer font-normal text-white/90 tracking-tight leading-none select-none" style="font-size: 40px; text-transform: none; font-family: 'Switzer', sans-serif !important;">
        <span class="inline-flex items-center shrink-0 pr-12 font-switzer" style="font-family: 'Switzer', sans-serif !important;">
          Together, leveraging our expertise, agility, and prudent risk management, we aspire to propel a multi-billion dollar portfolio primed to embrace the legacy of boundless prosperity and growth.
          <span class="inline-block mx-8 text-white/30 text-[28px] select-none">•</span>
        </span>
        <span class="inline-flex items-center shrink-0 pr-12 font-switzer" style="font-family: 'Switzer', sans-serif !important;">
          Together, leveraging our expertise, agility, and prudent risk management, we aspire to propel a multi-billion dollar portfolio primed to embrace the legacy of boundless prosperity and growth.
          <span class="inline-block mx-8 text-white/30 text-[28px] select-none">•</span>
        </span>
      </div>
    </div>

    <!-- Main Footer Grid (5 Columns) -->
    <div class="max-w-[1350px] mx-auto py-16 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 font-switzer border-b border-white/18">

      <!-- Col 1: Brand & Address (lg:col-span-3) -->
      <div class="lg:col-span-3 flex flex-col gap-4">
        <!-- Real Logo Component -->
        <a href="${routes.home}" class="inline-block shrink-0 mb-1" aria-label="PT Samuel Tumbuh Bersama">
          <img src="${logoUrl}" alt="PT Samuel Tumbuh Bersama Logo" class="h-8 lg:h-9 w-auto brightness-0 invert" />
        </a>
        <p class="text-sm font-semibold text-white tracking-tight">PT Samuel Tumbuh Bersama</p>
        <p class="text-[13px] text-white/70 leading-relaxed">
          Menara Imperium 21st Floor,<br>
          Jl. H.R. Rasuna Said Kav. X-6 No. 8,<br>
          Jakarta 12920, Indonesia
        </p>
        <!-- Social Icons Row -->
        <div class="flex items-center gap-3 pt-2 text-white/80">
          <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition" aria-label="LinkedIn">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition" aria-label="Instagram">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition" aria-label="YouTube">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition" aria-label="WhatsApp">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          </a>
        </div>
      </div>

      <!-- Col 2: Contact Us (lg:col-span-3) -->
      <div class="lg:col-span-3 flex flex-col gap-3">
        <h4 class="font-medium text-lg text-white">Contact Us</h4>
        <div class="space-y-3 text-[14px]">
          <div>
            <span class="block text-[11px] uppercase tracking-wider text-white/50 font-medium">General Support</span>
            <a href="tel:+622128548100" class="text-white/90 hover:text-white transition font-medium">+62 21 2854 8100</a>
          </div>
          <div>
            <span class="block text-[11px] uppercase tracking-wider text-white/50 font-medium">WhatsApp Support</span>
            <a href="https://wa.me/6281282288800" target="_blank" rel="noopener noreferrer" class="text-white/90 hover:text-white transition font-medium">+62 812 8228 8800</a>
          </div>
          <div>
            <span class="block text-[11px] uppercase tracking-wider text-white/50 font-medium">Customer Care</span>
            <a href="mailto:care@samuel.co.id" class="text-white/90 hover:text-white transition font-medium">care@samuel.co.id</a>
          </div>
          <div>
            <span class="block text-[11px] uppercase tracking-wider text-white/50 font-medium">Investor Relations</span>
            <a href="mailto:ir@samuel.co.id" class="text-white/90 hover:text-white transition font-medium">ir@samuel.co.id</a>
          </div>
        </div>
      </div>

      <!-- Col 3: Navigation (lg:col-span-2) -->
      <div class="lg:col-span-2 flex flex-col gap-3">
        <h4 class="font-medium text-lg text-white">Navigation</h4>
        <ul class="space-y-2 text-[14px] text-white/80">
          <li><a href="${routes.home}" class="hover:text-white transition">Home</a></li>
          <li><a href="${routes.businessUnits}" class="hover:text-white transition">Business Units</a></li>
          <li><a href="${routes.sustainability}" class="hover:text-white transition">Sustainability</a></li>
          <li><a href="${routes.careers}" class="hover:text-white transition">Careers</a></li>
        </ul>
      </div>

      <!-- Col 4: About Us (lg:col-span-2) -->
      <div class="lg:col-span-2 flex flex-col gap-3">
        <h4 class="font-medium text-lg text-white">About Us</h4>
        <ul class="space-y-2 text-[14px] text-white/80">
          <li><a href="${routes.companyProfile}" class="hover:text-white transition">Company Profile</a></li>
          <li><a href="${routes.historyMilestones}" class="hover:text-white transition">History &amp; Milestones</a></li>
          <li><a href="${routes.legalDocuments}" class="hover:text-white transition">Legal Documents</a></li>
        </ul>
      </div>

      <!-- Col 5: Investors (lg:col-span-2) -->
      <div class="lg:col-span-2 flex flex-col gap-3">
        <h4 class="font-medium text-lg text-white">Investors</h4>
        <ul class="space-y-2 text-[14px] text-white/80">
          <li><a href="${routes.investorHighlights}" class="hover:text-white transition">Investment Highlights</a></li>
          <li><a href="${routes.marketDisclosure}" class="hover:text-white transition">Market &amp; Disclosure</a></li>
          <li><a href="${routes.reports}" class="hover:text-white transition">Reports</a></li>
          <li><a href="${routes.irContact}" class="hover:text-white transition">IR Contact</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom Regulatory & Copyright Bar -->
    <div class="max-w-[1350px] mx-auto py-6 px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 font-switzer text-[13px] text-white/70">
      <div class="flex flex-col gap-1 text-center md:text-left">
        <p>Copyright &copy; 2026 PT Samuel Tumbuh Bersama. All rights reserved.</p>
      </div>
      <div class="flex items-center gap-4 shrink-0">
        <a href="#" class="hover:text-white transition">Terms &amp; Conditions</a>
        <span>·</span>
        <a href="#" class="hover:text-white transition">Privacy Policy</a>
        <span>·</span>
        <a href="${routes.legalDocuments}" class="hover:text-white transition">Disclosure</a>
      </div>
    </div>

  </footer>
    `;

    const existingTarget = document.getElementById('footer-container') || document.getElementById('main-footer');
    if (existingTarget) {
      existingTarget.outerHTML = footerHTML;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();
