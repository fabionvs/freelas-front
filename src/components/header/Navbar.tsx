import React, { useState, useEffect } from 'react';
import Auth from "../../services/Auth";
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Mousewheel } from 'swiper';
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { wordlists } from 'ethers';

function Navbar(props: any) {
    const location = useLocation();
    const [user, setUser] = useState({} as any);
    const [messages, setMessages] = useState([]);
    const [show, setShow] = useState(true);
    const [menu, setMenu] = useState([
        {
            name: "Swap",
            icon: 'shuffle',
            child: [
                {
                    name: "Home",
                    link: '/',
                    icon: 'lnil lnil-home',
                    child: [],
                },
                {
                    name: "Find",
                    link: '/search',
                    icon: 'lnil lnil-search',
                    child: [],
                },
                {
                    name: "Projects",
                    icon: 'lnil lnil-ruler-pencil',
                    link: '/projects',
                    child: []
                },
                {
                    name: "Communities",
                    icon: 'lnil lnil-users-alt',
                    link: '/communities',
                    child: []
                },
            ]
        },
        {
            name: "Swap Candies",
            icon: 'edit-3',
            child: [
                {
                    name: "Create Candy",
                    button: true,
                    link: '/create',
                    icon: 'lnil lnil-candy',
                    child: [],
                },
                {
                    divider: true,
                    link: '/support',
                    icon: 'lnil lnil-link',
                    child: [],
                },
                {
                    name: "My Candies",
                    link: '/user/candies',
                    icon: 'lnil lnil-candy-cane',
                    child: [],
                },
                {
                    name: "My Wallet",
                    link: '/user/candies',
                    icon: 'lnil lnil-wallet-alt-1',
                    child: [],
                },
            ]
        },
        {
            name: "Support",
            icon: 'help-circle',
            child: [
                {
                    name: "About Us",
                    link: '/about',
                    icon: 'lnil lnil-users-alt',
                    child: [],
                },
                {
                    name: "Support",
                    link: '/support',
                    icon: 'lnil lnil-popup',
                    child: [],
                },
                {
                    name: "FAQ",
                    icon: 'lnil lnil-question-circle',
                    link: '/faq',
                    child: []
                },
                {
                    divider: true,
                    link: '/support',
                    icon: 'lnil lnil-link',
                    child: [],
                },
                {
                    name: "API",
                    icon: 'lnil lnil-code',
                    link: '/api',
                    child: []
                },
            ]
        },
    ]);

    const [activeMenu, setactiveMenu] = useState({ child: [] } as any);
    useEffect(() => {
        setactiveMenu(menu[0])
        window.initSidebar()
    }, []);

    const openMenu = (e: any, id: any) => {
        setactiveMenu(id)
        if (id.name != activeMenu.name) {
            window.initCollapsibleMenu()
        }
    }

    const changeNetwork = (network: string) => {
    }

    const logout = (aba: any) => {
        Auth.logout();
    }
    return (
        <>
            <>
                <div id="home-sidebar" className="sidebar-panel is-generic">
                    <div className="subpanel-header">
                        <h3 className="no-mb">{activeMenu?.name}</h3>
                        <div className="panel-close">
                            <i data-feather="x" />
                        </div>
                    </div>
                    <div className="inner" data-simplebar="">
                        <ul>
                            {activeMenu?.child.length > 0 && activeMenu?.child.map((m1: any, i: any) =>
                                <li key={i} className={classnames({
                                    'is-active': (m1.link == location.pathname),
                                    'divider': (m1?.divider == true),
                                })}>
                                    {!m1?.divider == true &&
                                        <div className="collapse-wrap">
                                            <Link to={m1.link} className="parent-link">
                                                <i className={m1?.icon} /> {m1?.name}
                                            </Link>
                                        </div>
                                    }
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="mobile-subsidebar">
                    <div className="inner">
                        <div className="sidebar-title">
                            <h3>{activeMenu?.name}</h3>
                        </div>
                        <ul className="submenu">
                            {activeMenu?.child.length > 0 && activeMenu?.child.map((m1: any, i: any) =>
                                <li key={i}>
                                    <div className="collapse-wrap">
                                        <Link to={m1.link} className="parent-link">
                                            {m1?.name}
                                        </Link>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="main-sidebar is-curved">
                    <div className="sidebar-brand">
                        <a href="/">
                            <img
                                className="light-image"
                                src="assets/img/logos/logo/logo.svg"
                                alt=""
                            />
                            <img
                                className="dark-image"
                                src="assets/img/logos/logo/logo-light.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="sidebar-inner" >
                        <div className="naver" />
                        <ul className="icon-menu">
                            {menu.length > 0 && menu.map((m1: any, i: any) =>
                                <li key={i} className="main-menu-button" onMouseEnter={(e: any) => { openMenu(e, m1) }}>
                                    <a
                                        href="#"
                                        id={m1.id}
                                        data-content={m1.name}
                                        className={classnames({
                                            'is-active': (activeMenu.name == m1.name)
                                        })}
                                    >
                                        <i className="sidebar-svg" data-feather={m1.icon}></i>
                                    </a>
                                </li>
                            )}
                        </ul>
                        {/* User account */}
                        <ul className="bottom-menu">
                            {/* Notifications */}
                            <li className="right-panel-trigger" data-panel="search-panel">
                                <a href="javascript:void(0);" id="open-search" data-content="Search">
                                    <i className="sidebar-svg" data-feather="search" />
                                </a>
                                <a
                                    href="javascript:void(0);"
                                    id="close-search"
                                    className="is-hidden is-inactive"
                                >
                                    <i className="sidebar-svg" data-feather="x" />
                                </a>
                            </li>{" "}
                            {/* Wallet */}
                            <li>
                                <a
                                    href="/admin-profile-settings.html"
                                    id="open-settings"
                                    data-content="Settings"
                                >
                                    <i className="sidebar-svg" data-feather="settings" />
                                </a>
                            </li>{" "}
                            {/* Profile */}
                            <li id="user-menu">
                                <div
                                    id="profile-menu"
                                    className="dropdown profile-dropdown dropdown-trigger is-spaced is-up"
                                >
                                    <img
                                        src="https://via.placeholder.com/150x150"
                                        data-demo-src="assets/img/avatars/photos/8.jpg"
                                        alt=""
                                    />
                                    <span className="status-indicator" />
                                    <div className="dropdown-menu" role="menu">
                                        <div className="dropdown-content">
                                            <div className="dropdown-head">
                                                <div className="h-avatar is-large">
                                                    <img
                                                        className="avatar"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/avatars/photos/8.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="meta">
                                                    <span>Erik Kovalsky</span>
                                                    <span>Product Manager</span>
                                                </div>
                                            </div>
                                            <a
                                                href="/admin-profile-view.html"
                                                className="dropdown-item is-media"
                                            >
                                                <div className="icon">
                                                    <i className="lnil lnil-user-alt" />
                                                </div>
                                                <div className="meta">
                                                    <span>Profile</span>
                                                    <span>View your profile</span>
                                                </div>
                                            </a>
                                            <a className="dropdown-item is-media layout-switcher">
                                                <div className="icon">
                                                    <i className="lnil lnil-layout" />
                                                </div>
                                                <div className="meta">
                                                    <span>Layout</span>
                                                    <span>Switch to admin/webapp</span>
                                                </div>
                                            </a>
                                            <hr className="dropdown-divider" />
                                            <a href="#" className="dropdown-item is-media">
                                                <div className="icon">
                                                    <i className="lnil lnil-briefcase" />
                                                </div>
                                                <div className="meta">
                                                    <span>Projects</span>
                                                    <span>All my projects</span>
                                                </div>
                                            </a>
                                            <a href="#" className="dropdown-item is-media">
                                                <div className="icon">
                                                    <i className="lnil lnil-users-alt" />
                                                </div>
                                                <div className="meta">
                                                    <span>Team</span>
                                                    <span>Manage your team</span>
                                                </div>
                                            </a>
                                            <hr className="dropdown-divider" />
                                            <a href="#" className="dropdown-item is-media">
                                                <div className="icon">
                                                    <i className="lnil lnil-cog" />
                                                </div>
                                                <div className="meta">
                                                    <span>Settings</span>
                                                    <span>Account settings</span>
                                                </div>
                                            </a>
                                            <hr className="dropdown-divider" />
                                            <div className="dropdown-item is-button">
                                                <button onClick={logout} className="button h-button is-primary is-raised is-fullwidth logout-button">
                                                    <span className="icon is-small">
                                                        <i data-feather="log-out" />
                                                    </span>
                                                    <span>Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*Languages panel*/}
                <div id="languages-panel" className="right-panel-wrapper is-languages">
                    <div className="panel-overlay" />
                    <div className="right-panel">
                        <div className="right-panel-head">
                            <h3>Change Network</h3>
                            <a className="close-panel">
                                <i data-feather="chevron-right" />
                            </a>
                        </div>
                        <div className="right-panel-body has-slimscroll">
                            <div className="languages-boxes">
                                <div className="language-box">
                                    <div className="language-option">
                                        <input type="radio" name="language_selection" onClick={(e) => { changeNetwork('polygon') }} />
                                        <div className="language-option-inner">
                                            <img
                                                src="https://assets-cdn.trustwallet.com/blockchains/polygon/info/logo.png"
                                                alt=""
                                            />
                                            <div className="indicator">
                                                <i data-feather="check" />
                                            </div>
                                        </div>
                                        <h2 className="text-center mt-3">Polygon</h2>
                                    </div>
                                </div>
                                <div className="language-box">
                                    <div className="language-option">
                                        <input type="radio" name="language_selection" onClick={(e) => { changeNetwork('ethereum') }} />
                                        <div className="language-option-inner">
                                            <img src="https://www.coinlore.com/img/ethereum.png" alt="" />
                                            <div className="indicator">
                                                <i data-feather="check" />
                                            </div>
                                        </div>
                                        <h2 className="text-center mt-3">Ethereum</h2>
                                    </div>
                                </div>
                                <div className="language-box">
                                    <div className="language-option">
                                        <input type="radio" name="language_selection" onClick={(e) => { changeNetwork('bsc') }} />
                                        <div className="language-option-inner">
                                            <img src="https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png" alt="" />
                                            <div className="indicator">
                                                <i data-feather="check" />
                                            </div>
                                        </div>
                                        <h2 className="text-center mt-3">BSC</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Activity panel*/}
                {/*Search panel*/}
                <div id="search-panel" className="right-panel-wrapper is-search is-left">
                    <div className="panel-overlay" />
                    <div className="right-panel">
                        <div className="right-panel-head">
                            <img
                                className="light-image"
                                src="assets/img/logos/logo/logo.svg"
                                alt=""
                            />
                            <img
                                className="dark-image"
                                src="assets/img/logos/logo/logo-light.svg"
                                alt=""
                            />
                            <a className="close-panel">
                                <i data-feather="chevron-left" />
                            </a>
                        </div>
                        <div className="right-panel-body has-slimscroll">
                            <div className="field">
                                <div className="control has-icon">
                                    <input
                                        type="text"
                                        className="input is-rounded search-input"
                                        placeholder="Search..."
                                    />
                                    <div className="form-icon">
                                        <i data-feather="search" />
                                    </div>
                                    <div className="search-results has-slimscroll" />
                                </div>
                            </div>
                            <div className="recent">
                                <h4>Recently viewed</h4>
                                <div className="recent-block">
                                    <a className="media-flex-center">
                                        <div className="h-icon is-info is-rounded is-small">
                                            <i data-feather="chrome" />
                                        </div>
                                        <div className="flex-meta">
                                            <span>Browser Support</span>
                                            <span>Blog post</span>
                                        </div>
                                    </a>
                                    <a className="media-flex-center">
                                        <div className="h-icon is-orange is-rounded is-small">
                                            <i data-feather="tv" />
                                        </div>
                                        <div className="flex-meta">
                                            <span>Twitch API</span>
                                            <span>Blog post</span>
                                        </div>
                                    </a>
                                    <a className="media-flex-center">
                                        <div className="h-icon is-green is-rounded is-small">
                                            <i data-feather="twitter" />
                                        </div>
                                        <div className="flex-meta">
                                            <span>Twitter Auth</span>
                                            <span>Blog post</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="recent">
                                <h4>Recent Members</h4>
                                <div className="recent-block">
                                    <a className="media-flex-center">
                                        <div className="h-avatar is-small">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/7.jpg"
                                                alt=""
                                                data-user-popover={0}
                                            />
                                        </div>
                                        <div className="flex-meta">
                                            <span>Alice C.</span>
                                            <span>Software Engineer</span>
                                        </div>
                                    </a>
                                    <a className="media-flex-center">
                                        <div className="h-avatar is-small">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/13.jpg"
                                                alt=""
                                                data-user-popover={6}
                                            />
                                        </div>
                                        <div className="flex-meta">
                                            <span>Tara S.</span>
                                            <span>UI/UX Designer</span>
                                        </div>
                                    </a>
                                    <a className="media-flex-center">
                                        <div className="h-avatar is-small">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/22.jpg"
                                                alt=""
                                                data-user-popover={5}
                                            />
                                        </div>
                                        <div className="flex-meta">
                                            <span>Jimmy H.</span>
                                            <span>Project Manager</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Navbar;