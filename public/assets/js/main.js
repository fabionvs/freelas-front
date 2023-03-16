/*! main.js | Huro | Css Ninja. 2020-2021 */
"use strict";
function startLayout() {
    switchLayouts(),
        "development" === env && changeDemoImages(),
        initBgImages(),
        feather.replace(),
        updateSidebarNaver(),
        initMobileNavbar(),
        initMobileNavbarHamburger(),
        $(".main-sidebar, .sidebar-block").length &&
        ($("[data-sidebar-open]").length && openSidebar(),
            window.matchMedia("(min-width: 768px)").matches &&
            window.matchMedia("(max-width: 1024px)").matches &&
            window.matchMedia("(orientation: landscape)").matches &&
            (closeSidebarPanel(), $(".main-sidebar, .sidebar-brand").removeClass("is-bordered")),
            $(window).on("resize", function () {
                window.matchMedia("(min-width: 768px)").matches &&
                    window.matchMedia("(max-width: 1024px)").matches &&
                    window.matchMedia("(orientation: landscape)").matches &&
                    (closeSidebarPanel(), $(".main-sidebar, .sidebar-brand").removeClass("is-bordered"));
            })),
        $(".view-wrapper").hasClass("is-webapp") && initWebapp(),
        initCollapsibleMenu(),
        initStuckHeader(),
        initNavbarDropdowns(),
        initDropdowns(),
        initMobileDropdowns(),
        adjustDropdowns(),
        initChosenSelects(),
        initTabs(),
        initTabbedWidgets(),
        initHSelect(),
        initComboBox(),
        initImageComboBox(),
        initUserComboBox(),
        initStackedComboBox(),
        initBigComboBox(),
        initAccordion(),
        initAnimatedModals(),
        initHModals(),
        initPanels(),
        initSmallTextTip(),
        initTextTip(),
        initMediumTextTip(),
        initAnimatedCheckboxes(),
        initCustomTextFilter(),
        initTextFilter(),
        initAdvancedFlexTable(),
        initSingleAccordion(),
        initCollapse(),
        initPlayers(),
        initSearch(),
        initDarkMode();
}
