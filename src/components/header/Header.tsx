import { Link, useLocation } from "react-router-dom";
import auth from "../../services/Auth";
import React, { useEffect, useState } from 'react';
import Auth from "../../services/Auth";
function Header() {
    const location = useLocation();
    const [ativo, setAtivo] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        // subscribe to home component messages
        const subscription = Auth.observable.onUser().subscribe((user: any) => {
            if (user) {
                // add message to local state if not empty
                setUser(user);
            }
            if (user == null) {
                // clear messages when empty message received
                setUser(null);
            }
        });
        // return unsubscribe method to execute when component unmounts
        return subscription.unsubscribe;
    }, []);

    const open = (aba: any) => {
        var removeElemento = document.getElementById(ativo);
        if (removeElemento)
            removeElemento.classList.remove("show");
        setAtivo("")
        if (aba != ativo) {
            var elemento = document.getElementById(aba);
            if (elemento)
                elemento.classList.add('show');
            setAtivo(aba);
        }
    }

    const logout = (aba: any) => {
        Auth.logout();
    }
    return (
        <>
            <nav
                className="navbar mobile-navbar no-shadow is-hidden-desktop is-hidden-tablet"
                aria-label="main navigation"
            >
                <div className="container">
                    {/* Brand */}
                    <div className="navbar-brand">
                        {/* Mobile menu toggler icon */}
                        <div className="brand-start">
                            <div className="navbar-burger">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <a className="navbar-item is-brand" href="index.html">
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
                        <div className="brand-end">
                            <div className="navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop">
                                <a className="navbar-link is-arrowless" href="javascript:void(0);">
                                    <i data-feather="bell" />
                                    <span className="new-indicator pulsate" />
                                </a>
                                <div className="navbar-dropdown is-boxed is-right">
                                    <div className="heading">
                                        <div className="heading-left">
                                            <h6 className="heading-title">Notifications</h6>
                                        </div>
                                        <div className="heading-right">
                                            <a className="notification-link" href="#">
                                                See all
                                            </a>
                                        </div>
                                    </div>
                                    <div className="inner has-slimscroll">
                                        <ul className="notification-list">
                                            <li>
                                                <a className="notification-item">
                                                    <div className="img-left">
                                                        <img
                                                            className="user-photo"
                                                            alt=""
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/7.jpg"
                                                        />
                                                    </div>
                                                    <div className="user-content">
                                                        <p className="user-info">
                                                            <span className="name">Alice C.</span> left a comment.
                                                        </p>
                                                        <p className="time">1 hour ago</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="notification-item">
                                                    <div className="img-left">
                                                        <img
                                                            className="user-photo"
                                                            alt=""
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/12.jpg"
                                                        />
                                                    </div>
                                                    <div className="user-content">
                                                        <p className="user-info">
                                                            <span className="name">Joshua S.</span> uploaded a
                                                            file.
                                                        </p>
                                                        <p className="time">2 hours ago</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="notification-item">
                                                    <div className="img-left">
                                                        <img
                                                            className="user-photo"
                                                            alt=""
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/13.jpg"
                                                        />
                                                    </div>
                                                    <div className="user-content">
                                                        <p className="user-info">
                                                            <span className="name">Tara S.</span> sent you a
                                                            message.
                                                        </p>
                                                        <p className="time">2 hours ago</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="notification-item">
                                                    <div className="img-left">
                                                        <img
                                                            className="user-photo"
                                                            alt=""
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/25.jpg"
                                                        />
                                                    </div>
                                                    <div className="user-content">
                                                        <p className="user-info">
                                                            <span className="name">Melany W.</span> left a
                                                            comment.
                                                        </p>
                                                        <p className="time">3 hours ago</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown is-right is-spaced dropdown-trigger user-dropdown">
                                <div className="is-trigger" aria-haspopup="true">
                                    <div className="profile-avatar">
                                        <img
                                            className="avatar"
                                            src="https://via.placeholder.com/150x150"
                                            data-demo-src="assets/img/avatars/photos/8.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
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
                                        <a href="#" className="dropdown-item is-media">
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
                        </div>
                    </div>
                </div>
            </nav>
            {/*Mobile sidebar*/}
            <div className="mobile-main-sidebar">
                <div className="inner">
                    <ul className="icon-side-menu">
                        <li>
                            <a
                                href="/admin-dashboards-personal-1.html"
                                id="home-sidebar-menu-mobile"
                            >
                                <i data-feather="activity" />
                            </a>
                        </li>
                        <li>
                            <a href="/admin-grid-users-1.html" id="layouts-sidebar-menu-mobile">
                                <i data-feather="grid" />
                            </a>
                        </li>
                        <li>
                            <a href="/elements-hub.html" id="elements-sidebar-menu-mobile">
                                <i data-feather="box" />
                            </a>
                        </li>
                        <li>
                            <a href="/components-hub.html" id="components-sidebar-menu-mobile">
                                <i data-feather="cpu" />
                            </a>
                        </li>
                        <li>
                            <a href="/messaging-chat.html" id="open-messages-mobile">
                                <i data-feather="message-circle" />
                            </a>
                        </li>
                    </ul>
                    <ul className="bottom-icon-side-menu">
                        <li>
                            <a
                                href="javascript:"
                                className="right-panel-trigger"
                                data-panel="search-panel"
                            >
                                <i data-feather="search" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i data-feather="settings" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;