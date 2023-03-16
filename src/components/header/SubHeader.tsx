import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Auth from "../../services/Auth";
import classnames from 'classnames';
import ModalSign from "../../components/modal/ModalSign";

function SubHeader(props: any) {
    const location = useLocation();
    const [ativo, setAtivo] = useState("");
    const [user, setUser] = useState<any>(null);
    const [userMenu, setUserMenu] = useState(false);
    const [chain, setChain] = useState<any>({});
    const [modalSign, setModalSign] = useState(false);

    useEffect(() => {
        // subscribe to home component messages
        const subscription = Auth.observable.onUser().subscribe((user: any) => {
            setUser(user);
            if (user !== null && user?.username === null) {
                console.log('modal foi')
                setModalSign(true);
            }
        });
        // return unsubscribe method to execute when component 
        return subscription.unsubscribe;
    }, []);


    const login = async (aba: any) => {
    }

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
    return (
        <>
            <>
                <div className="page-title has-text-centered">
                    {/* Sidebar Trigger */}
                    <div
                        className="huro-hamburger nav-trigger push-resize"
                        data-sidebar="home-sidebar"
                    >
                        <span className="menu-toggle has-chevron">
                            <span className="icon-box-toggle">
                                <span className="rotate">
                                    <i className="icon-line-top" />
                                    <i className="icon-line-center" />
                                    <i className="icon-line-bottom" />
                                </span>
                            </span>
                        </span>
                    </div>
                    <div className="title-wrap">
                        <h1 className="title is-4">{props.title}</h1>
                    </div>
                    <div className="toolbar ml-auto">
                        {user !== null &&
                            <Link to='/candy/create' className="parent-link">
                                <button className="button h-button is-primary is-outlined is-rounded is-bold d-none d-md-block mr-3">
                                    <i className="lnil lnil-candy mr-3"></i> Create Candy
                                </button>
                            </Link>
                        }
                        <div className="toolbar-link">
                            <label className="dark-mode ml-auto">
                                <input type="checkbox" />
                                <span />
                            </label>
                        </div>
                        {user !== null ?
                            (
                                <>
                                    <a
                                        className="toolbar-link right-panel-trigger"
                                        data-panel="languages-panel"
                                    >
                                        <img
                                            src="https://assets-cdn.trustwallet.com/blockchains/polygon/info/logo.png"
                                            style={{ width: 25, height: 25 }}
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        className="toolbar-link right-panel-trigger"
                                        onClick={(e: any) => { setUserMenu(true) }}
                                    >
                                        <i className="lnil lnil-wallet-alt-1" style={{ fontSize: 18, color: '#a2a5b9', transition: 'stroke .3s' }} />
                                    </a>
                                </>
                            ) : (
                                <button onClick={login} className="button h-button is-primary is-rounded is-elevated"> Connect Wallet</button>
                            )
                        }
                    </div>
                </div>
                <div id="activity-panel" className={classnames({
                    'right-panel-wrapper': true,
                    'is-activity': true,
                    'is-active': userMenu
                })}>
                    <div className="panel-overlay" onClick={(e: any) => { setUserMenu(false) }} />
                    <div className="right-panel">
                        <div className="right-panel-head">
                            <h3><img
                                src="https://assets-cdn.trustwallet.com/blockchains/polygon/info/logo.png"
                                style={{ width: 25, height: 25 }}
                                alt=""
                                className="avatar"
                            /> {user?.eth_address != null && user?.eth_address.slice(0, 10)} ... {user?.eth_address != null && user?.eth_address.slice(-3)}</h3>
                            <a className="close-panel" onClick={(e: any) => { setUserMenu(false) }}>
                                <i className="lnil lnil-chevron-right" />
                            </a>
                        </div>
                        <div className="tabs-wrapper is-triple-slider is-squared">
                            <div className="tabs-inner">
                                <div className="tabs">
                                    <ul>
                                        <li data-tab="team-side-tab" className="is-active">
                                            <a>
                                                <span>Wallet</span>
                                            </a>
                                        </li>
                                        <li data-tab="projects-side-tab">
                                            <a>
                                                <span>Projects</span>
                                            </a>
                                        </li>
                                        <li data-tab="schedule-side-tab">
                                            <a>
                                                <span>Menu</span>
                                            </a>
                                        </li>
                                        <li className="tab-naver" />
                                    </ul>
                                </div>
                            </div>
                            <div className="right-panel-body">
                                <div id="team-side-tab" className="tab-content is-active">
                                    {/*Team Member*/}
                                    <div className="team-card">
                                        <div className="h-avatar">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/12.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="badge"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="meta">
                                            <span>Joshua S.</span>
                                            <span>
                                                <i data-feather="map-pin" />
                                                Las Vegas, NV
                                            </span>
                                        </div>
                                        <a className="link">
                                            <i data-feather="arrow-right" />
                                        </a>
                                    </div>
                                    {/*Team Member*/}
                                    <div className="team-card">
                                        <div className="h-avatar">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/25.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="badge"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="meta">
                                            <span>Melany W.</span>
                                            <span>
                                                <i data-feather="map-pin" />
                                                San Jose, CA
                                            </span>
                                        </div>
                                        <a className="link">
                                            <i data-feather="arrow-right" />
                                        </a>
                                    </div>
                                    {/*Team Member*/}
                                    <div className="team-card">
                                        <div className="h-avatar">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/18.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="badge"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="meta">
                                            <span>Esteban C.</span>
                                            <span>
                                                <i data-feather="map-pin" />
                                                Miami, FL
                                            </span>
                                        </div>
                                        <a className="link">
                                            <i data-feather="arrow-right" />
                                        </a>
                                    </div>
                                    {/*Team Member*/}
                                    <div className="team-card">
                                        <div className="h-avatar">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/13.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="badge"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="meta">
                                            <span>Tara S.</span>
                                            <span>
                                                <i data-feather="map-pin" />
                                                New York, NY
                                            </span>
                                        </div>
                                        <a className="link">
                                            <i data-feather="arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div id="projects-side-tab" className="tab-content">
                                    {/*Project*/}
                                    <div className="project-card">
                                        <div className="project-inner">
                                            <img
                                                className="project-avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/icons/logos/slicer.svg"
                                                alt=""
                                            />
                                            <div className="meta">
                                                <span>The slicer project</span>
                                                <span>getslicer.io</span>
                                            </div>
                                            <a className="link">
                                                <i data-feather="arrow-right" />
                                            </a>
                                        </div>
                                        <div className="project-foot">
                                            <progress
                                                className="progress is-primary is-tiny"
                                                value={31}
                                                max={100}
                                            >
                                                31%
                                            </progress>
                                            <div className="foot-stats">
                                                <span>5 / 24</span>
                                                <div className="avatar-stack">
                                                    <div className="h-avatar is-small">
                                                        <img
                                                            className="avatar"
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/7.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="h-avatar is-small">
                                                        <img
                                                            className="avatar"
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/5.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="h-avatar is-small">
                                                        <img
                                                            className="avatar"
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/8.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Project*/}
                                    <div className="project-card">
                                        <div className="project-inner">
                                            <img
                                                className="project-avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/icons/logos/metamovies.svg"
                                                alt=""
                                            />
                                            <div className="meta">
                                                <span>Metamovies reworked</span>
                                                <span>metamovies.co</span>
                                            </div>
                                            <a className="link">
                                                <i data-feather="arrow-right" />
                                            </a>
                                        </div>
                                        <div className="project-foot">
                                            <progress
                                                className="progress is-primary is-tiny"
                                                value={84}
                                                max={100}
                                            >
                                                84%
                                            </progress>
                                            <div className="foot-stats">
                                                <span>28 / 31</span>
                                                <div className="avatar-stack">
                                                    <div className="h-avatar is-small">
                                                        <img
                                                            className="avatar"
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/13.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="h-avatar is-small">
                                                        <img
                                                            className="avatar"
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/18.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Project*/}
                                    <div className="project-card">
                                        <div className="project-inner">
                                            <img
                                                className="project-avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/icons/logos/fastpizza.svg"
                                                alt=""
                                            />
                                            <div className="meta">
                                                <span>Fast Pizza redesign</span>
                                                <span>fastpizza.com</span>
                                            </div>
                                            <a className="link">
                                                <i data-feather="arrow-right" />
                                            </a>
                                        </div>
                                        <div className="project-foot">
                                            <progress
                                                className="progress is-primary is-tiny"
                                                value={60}
                                                max={100}
                                            >
                                                60%
                                            </progress>
                                            <div className="foot-stats">
                                                <span>25 / 39</span>
                                                <div className="avatar-stack">
                                                    <div className="h-avatar is-small">
                                                        <img
                                                            className="avatar"
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/7.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="h-avatar is-small">
                                                        <img
                                                            className="avatar"
                                                            src="https://via.placeholder.com/150x150"
                                                            data-demo-src="assets/img/avatars/photos/25.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="schedule-side-tab" className="tab-content">
                                    {/*Timeline*/}
                                    <div className="icon-timeline">
                                        {/*Timeline item*/}
                                        <div className="timeline-item">
                                            <div className="timeline-icon">
                                                <i data-feather="phone-call" />
                                            </div>
                                            <div className="timeline-content">
                                                <p>Call Danny at Colby's</p>
                                                <span>Today - 11:30am</span>
                                            </div>
                                        </div>
                                        {/*Timeline item*/}
                                        <div className="timeline-item">
                                            <div className="timeline-icon">
                                                <img
                                                    className="avatar"
                                                    src="https://via.placeholder.com/150x150"
                                                    data-demo-src="assets/img/avatars/photos/7.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="timeline-content">
                                                <p>Meeting with Alice</p>
                                                <span>Today - 01:00pm</span>
                                            </div>
                                        </div>
                                        {/*Timeline item*/}
                                        <div className="timeline-item">
                                            <div className="timeline-icon">
                                                <i data-feather="message-circle" />
                                            </div>
                                            <div className="timeline-content">
                                                <p>Answer Annie's message</p>
                                                <span>Today - 01:45pm</span>
                                            </div>
                                        </div>
                                        {/*Timeline item*/}
                                        <div className="timeline-item">
                                            <div className="timeline-icon">
                                                <i data-feather="mail" />
                                            </div>
                                            <div className="timeline-content">
                                                <p>Send new campaign</p>
                                                <span>Today - 02:30pm</span>
                                            </div>
                                        </div>
                                        {/*Timeline item*/}
                                        <div className="timeline-item">
                                            <div className="timeline-icon">
                                                <i data-feather="smile" />
                                            </div>
                                            <div className="timeline-content">
                                                <p>Project review</p>
                                                <span>Today - 03:30pm</span>
                                            </div>
                                        </div>
                                        {/*Timeline item*/}
                                        <div className="timeline-item">
                                            <div className="timeline-icon">
                                                <i data-feather="phone-call" />
                                            </div>
                                            <div className="timeline-content">
                                                <p>Call Trisha Jackson</p>
                                                <span>Today - 05:00pm</span>
                                            </div>
                                        </div>
                                        {/*Timeline item*/}
                                        <div className="timeline-item">
                                            <div className="timeline-icon">
                                                <i data-feather="feather" />
                                            </div>
                                            <div className="timeline-content">
                                                <p>Write proposal for Don</p>
                                                <span>Today - 06:00pm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {modalSign == true && 
                    <ModalSign onClose={() => {setModalSign(false)}}/>
                }
            </>
        </>
    )
}

export default SubHeader;