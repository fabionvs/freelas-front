import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Auth from "../../../services/Auth";
import Candy from "../../../services/Business";
import ModalSign from "../../../components/modal/ModalSign";
import { DateTime } from "luxon";
import classnames from "classnames";

function Menu(props: any) {
    const location = useLocation();
    let navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        // subscribe to home component messages
        const subscription = Auth.observable.onUser().subscribe((user: any) => {
            console.log(user)
            setUser(user);
        });
        // return unsubscribe method to execute when component 
        return subscription.unsubscribe;
    }, []);
    


    return (
        <>
            <div
                id="sidebar-block"
                className="sidebar-block is-curved is-colored is-active is-bordered"
                style={{marginTop: 80}}
            >
                <div className="sidebar-block-header mt-3">
                    <a className="sidebar-block-logo" href="/">
                        <img
                            className="light-image"
                            src={(props?.candy?.files?.length > 0) ? (process.env.REACT_APP_API_URL + props?.candy?.files[0]?.file) : ('')}
                            alt=""
                        />
                        <img
                            className="dark-image"
                            src={(props?.candy?.files?.length > 0) ? (process.env.REACT_APP_API_URL + props?.candy?.files[0]?.file) : ('')}
                            alt=""
                        />
                    </a>
                    <h3>{props.candy.title}</h3>
                </div>
                <div className="sidebar-block-inner" data-simplebar="init">
                    <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                            <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                <div
                                    className="simplebar-content-wrapper"
                                    style={{ height: "100%", overflow: "hidden" }}
                                >
                                    <div className="simplebar-content" style={{ padding: 0 }}>
                                        <ul>
                                            <li>
                                                <a
                                                    className="single-link"
                                                    href="/admin-dashboards-personal-1.html"
                                                >
                                                    <span className="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-grid"
                                                        >
                                                            <rect x={3} y={3} width={7} height={7} />
                                                            <rect x={14} y={3} width={7} height={7} />
                                                            <rect x={14} y={14} width={7} height={7} />
                                                            <rect x={3} y={14} width={7} height={7} />
                                                        </svg>
                                                    </span>
                                                    Dashboard'
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="single-link"
                                                    href="/admin-dashboards-personal-1.html"
                                                >
                                                    <span className="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-briefcase"
                                                        >
                                                            <rect
                                                                x={2}
                                                                y={7}
                                                                width={20}
                                                                height={14}
                                                                rx={2}
                                                                ry={2}
                                                            />
                                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                        </svg>
                                                    </span>
                                                    Projects
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="single-link"
                                                    href="/admin-dashboards-personal-1.html"
                                                >
                                                    <span className="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-message-circle"
                                                        >
                                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                                        </svg>
                                                    </span>
                                                    Messages
                                                    <span className="badge">3</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="single-link"
                                                    href="/admin-dashboards-personal-1.html"
                                                >
                                                    <span className="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-book"
                                                        >
                                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                                        </svg>
                                                    </span>
                                                    Collections
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="single-link"
                                                    href="/admin-dashboards-personal-1.html"
                                                >
                                                    <span className="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-users"
                                                        >
                                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                            <circle cx={9} cy={7} r={4} />
                                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                        </svg>
                                                    </span>
                                                    Users
                                                </a>
                                            </li>
                                            <li className="has-children">
                                                <div className="collapse-wrap">
                                                    <a href="javascript:void(0);" className="parent-link">
                                                        <div className="icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-briefcase"
                                                            >
                                                                <rect
                                                                    x={2}
                                                                    y={7}
                                                                    width={20}
                                                                    height={14}
                                                                    rx={2}
                                                                    ry={2}
                                                                />
                                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                            </svg>
                                                        </div>
                                                        Reports
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-chevron-right"
                                                        >
                                                            <polyline points="9 18 15 12 9 6" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="is-submenu"
                                                            href="/admin-dashboards-personal-1.html"
                                                        >
                                                            <i className="lnil lnil-analytics-alt-1" />
                                                            <span>Financial report</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="is-submenu"
                                                            href="/admin-dashboards-personal-2.html"
                                                        >
                                                            <i className="lnil lnil-pie-chart" />
                                                            <span>Social report</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="is-submenu"
                                                            href="/admin-dashboards-personal-3.html"
                                                        >
                                                            <i className="lnil lnil-stats-up" />
                                                            <span>Growth report</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="single-link" href="/wizard-v1.html">
                                                    <span className="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-mail"
                                                        >
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                            <polyline points="22,6 12,13 2,6" />
                                                        </svg>
                                                    </span>
                                                    Inbox
                                                </a>
                                            </li>
                                            <li className="divider" />
                                            <li className="has-children">
                                                <div className="collapse-wrap">
                                                    <a href="javascript:void(0);" className="parent-link">
                                                        <div className="icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-settings"
                                                            >
                                                                <circle cx={12} cy={12} r={3} />
                                                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                                            </svg>
                                                        </div>
                                                        Settings
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-chevron-right"
                                                        >
                                                            <polyline points="9 18 15 12 9 6" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <a
                                                            className="is-submenu"
                                                            href="/admin-dashboards-personal-1.html"
                                                        >
                                                            <i className="lnil lnil-home" />
                                                            <span>General</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="is-submenu"
                                                            href="/admin-dashboards-personal-2.html"
                                                        >
                                                            <i className="lnil lnil-lock-alt" />
                                                            <span>Security</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="is-submenu"
                                                            href="/admin-dashboards-personal-3.html"
                                                        >
                                                            <i className="lnil lnil-coin" />
                                                            <span>Transactions</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: 432 }}
                        />
                    </div>
                    <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{ width: 0, display: "none" }}
                        />
                    </div>
                    <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "hidden" }}
                    >
                        <div
                            className="simplebar-scrollbar"
                            style={{ height: 0, display: "none" }}
                        />
                    </div>
                </div>
                <div className="sidebar-block-footer">
                    <div
                        id="profile-menu"
                        className="dropdown profile-dropdown dropdown-trigger is-spaced is-up"
                    >
                        <img
                            src="assets/img/avatars/photos/8.jpg"
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
                                            src="assets/img/avatars/photos/8.jpg"
                                            data-demo-src="assets/img/avatars/photos/8.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="meta">
                                        <span>Erik Kovalsky</span>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                                <a href="/admin-profile-view.html" className="dropdown-item is-media">
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
                                    <button
                                        className="
                button
                h-button
                is-primary is-raised is-fullwidth
                logout-button
              "
                                    >
                                        <span className="icon is-small">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-log-out"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                <polyline points="16 17 21 12 16 7" />
                                                <line x1={21} y1={12} x2={9} y2={12} />
                                            </svg>
                                        </span>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="search-link right-panel-trigger" data-panel="search-panel">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                        >
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Menu;