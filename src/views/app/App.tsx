import React, { useEffect, useState } from 'react';
import SubHeader from '../../components/header/SubHeader';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/header/Footer';
import { Link } from 'react-router-dom';
function App(props: any) {
    const [count, setCount] = useState(0);
    const [pessoas, setPessoas] = useState([] as any);
    useEffect(() => {
        window.startLayout()
    }, []);

    useEffect(() => {
        setPessoas([{ id: 1, nome: "Leo", idade: 25 }, { id: 2, nome: "Leo 2", idade: 26 }])
    }, []);

    function ListItem(props: any) {
        return <li>{props.pessoa.id}/{props.pessoa.nome}/{props.pessoa.idade}</li>;
    }

    const handleClick = () => {
        setCount(count + 1);
    }

    const listItems = pessoas.map((pessoa: any) =>
        <ListItem pessoa={pessoa} />
    );


    return (
        <>
            <div className="page-content-inner">

                {/*Data Widgets*/}
                <div className="columns is-multiline">
                    {/*Widget Column*/}
                    <div className="column is-3">
                        <div className="widget search-widget">
                            <div className="widget-toolbar">
                                <h3>What are you searching?</h3>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Search..."
                                    />
                                    <button className="search-button">
                                        <i data-feather="search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*Widget*/}
                        <div className="widget stats-widget">
                            <div className="widget-content">
                                <div className="has-text-centered">
                                    <div className="stat-number mb-5">
                                        <span>
                                            $1638,42 <i data-feather="trending-up" />
                                        </span>
                                        <span>CandySwap Token</span>
                                    </div>
                                    <button className="button h-button is-success is-elevated">
                                        <span className="icon">
                                            <i aria-hidden="true" className="fas fa-angle-down"></i>
                                        </span>
                                        <span>Buy</span>
                                    </button>
                                    <button className="button h-button is-danger is-elevated ml-5" disabled>
                                        <span className="icon">
                                            <i aria-hidden="true" className="fas fa-angle-up"></i>
                                        </span>
                                        <span>Sell</span>
                                    </button>
                                </div>
                                <div className="stat-chart" id="trend-chart" />
                            </div>
                        </div>
                        <div className="widget inbox-widget">
                            <div className="widget-toolbar">
                                <div className="left">
                                    <h3>Candy News</h3>
                                </div>
                                <div className="right">
                                    <div className="dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile">
                                        <div className="is-trigger" aria-haspopup="true">
                                            <i data-feather="more-vertical" />
                                        </div>
                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-reload" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Reload</span>
                                                        <span>Reload Widget</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-cogs" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Configure</span>
                                                        <span>Configure widget</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-cog" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Settings</span>
                                                        <span>Widget Settings</span>
                                                    </div>
                                                </a>
                                                <hr className="dropdown-divider" />
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-trash-can-alt" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Remove</span>
                                                        <span>Remove from view</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content">
                                <div className="sender-block">
                                    <div className="sender-block-inner">
                                        <div className="h-avatar">
                                            <img
                                                className="avatar"
                                                src="https://via.placeholder.com/150x150"
                                                data-demo-src="assets/img/avatars/photos/7.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="meta">
                                            <span>Alice C. just sent you an inbox message.</span>
                                        </div>
                                    </div>
                                    <div className="exerpt">
                                        <h5>
                                            <i aria-hidden="true" className="fas fa-circle" />
                                            <span>Design Project</span>
                                        </h5>
                                        <p>
                                            Where are we in terms of design? We need to review the new
                                            screens.
                                        </p>
                                        <small>28 minutes ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Widget*/}
                        <div className="widget video-widget">
                            <div className="widget-content">
                                <img
                                    src="https://via.placeholder.com/400x300"
                                    data-demo-src="assets/img/photo/demo/widgets/1.jpg"
                                    alt=""
                                />
                                <div className="widget-meta">
                                    <i data-feather="play-circle" />
                                    <h4>A nice and short little movie</h4>
                                    <span className="views">
                                        <i data-feather="eye" />
                                        <span>38,274</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*Widget*/}
                        <div className="widget tags-widget">
                            <div className="widget-content">
                                <div className="tags">
                                    <span className="tag is-primary is-outlined is-curved">
                                        Politics
                                    </span>
                                    <span className="tag is-primary is-curved">Economy</span>
                                    <span className="tag is-primary is-outlined is-curved">
                                        Finance
                                    </span>
                                    <span className="tag is-primary is-outlined is-curved">
                                        Environment
                                    </span>
                                    <span className="tag is-primary is-outlined is-curved">
                                        Food
                                    </span>
                                    <span className="tag is-primary is-curved">Technology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Widget Column*/}
                    <div className="column is-6">
                        {/*Widget*/}
                        <div className="column is-6">
                            <div className="widget calendar-widget">
                                <div className="calendar-widget-inner">
                                    <div className="calendar-square">
                                        <div className="date">
                                            <span>22</span>
                                            <span>Monday</span>
                                        </div>
                                    </div>
                                    <div className="calendar-square">
                                        <div className="date">
                                            <span>23</span>
                                            <span>Tuesday</span>
                                        </div>
                                    </div>
                                    <div className="calendar-square">
                                        <div className="date">
                                            <span>24</span>
                                            <span>Wednesday</span>
                                        </div>
                                    </div>
                                    <div className="calendar-square">
                                        <div className="date">
                                            <span>25</span>
                                            <span>Thursday</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget icon-list-widget">
                            <div className="icon-list">
                                <div className="icon-list-item">
                                    <div className="icon-wrap">
                                        <i data-feather="circle" />
                                    </div>
                                    <div className="item-meta">
                                        <span>Global</span>
                                    </div>
                                </div>
                                <div className="icon-list-item">
                                    <div className="icon-wrap">
                                        <i data-feather="briefcase" />
                                    </div>
                                    <div className="item-meta">
                                        <span>Business</span>
                                    </div>
                                </div>
                                <div className="icon-list-item">
                                    <div className="icon-wrap">
                                        <i data-feather="play" />
                                    </div>
                                    <div className="item-meta">
                                        <span>Entertainment</span>
                                    </div>
                                </div>
                                <div className="icon-list-item">
                                    <div className="icon-wrap">
                                        <i data-feather="feather" />
                                    </div>
                                    <div className="item-meta">
                                        <span>Design</span>
                                    </div>
                                </div>
                                <div className="icon-list-item">
                                    <div className="icon-wrap">
                                        <i data-feather="file" />
                                    </div>
                                    <div className="item-meta">
                                        <span>Documents</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Widget Column*/}
                    <div className="column is-3">
                        {/*Widget*/}
                        <div className="widget text-widget">
                            <div className="widget-toolbar">
                                <div className="left">
                                    <h3>Payment</h3>
                                </div>
                                <div className="right">
                                    <a className="right-icon has-indicator">
                                        <i data-feather="bell" />
                                    </a>
                                </div>
                            </div>
                            <div className="widget-content">
                                <p>
                                    You have an upcoming payment for your recurring subscription
                                    fee due on <span>Sept 20, 2020</span>.
                                </p>
                            </div>
                        </div>
                        {/*Widget*/}
                        <div className="widget image-widget">
                            <img
                                src="https://via.placeholder.com/400x300"
                                data-demo-src="assets/img/photo/demo/widgets/2.jpg"
                                alt=""
                            />
                            <div className="progress-wrap">
                                <progress className="progress is-primary is-tiny" max={100}>
                                    55%
                                </progress>
                            </div>
                        </div>
                    </div>
                    {/*Widget Column*/}
                    <div className="column is-3">
                        {/*Widget*/}
                        <div className="widget tags-widget">
                            <div className="widget-toolbar">
                                <div className="left">
                                    <h3>Labels</h3>
                                </div>
                                <div className="right">
                                    <div className="dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile">
                                        <div className="is-trigger" aria-haspopup="true">
                                            <i data-feather="more-vertical" />
                                        </div>
                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-reload" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Reload</span>
                                                        <span>Reload Widget</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-cogs" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Configure</span>
                                                        <span>Configure widget</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-cog" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Settings</span>
                                                        <span>Widget Settings</span>
                                                    </div>
                                                </a>
                                                <hr className="dropdown-divider" />
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-trash-can-alt" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Remove</span>
                                                        <span>Remove from view</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content">
                                <div className="tags">
                                    <span className="tag is-primary is-outlined is-curved">
                                        Family
                                    </span>
                                    <span className="tag is-primary is-curved">Home</span>
                                    <span className="tag is-primary is-outlined is-curved">
                                        Health
                                    </span>
                                    <span className="tag is-primary is-outlined is-curved">
                                        Business
                                    </span>
                                    <span className="tag is-primary is-outlined is-curved">
                                        Personal
                                    </span>
                                    <span className="tag is-primary is-curved">Utility</span>
                                </div>
                            </div>
                        </div>
                        {/*Widget*/}
                        <div className="widget list-widget">
                            <div className="widget-toolbar">
                                <div className="left">
                                    <h3>Notifications</h3>
                                </div>
                                <div className="right">
                                    <div className="dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile">
                                        <div className="is-trigger" aria-haspopup="true">
                                            <i data-feather="more-vertical" />
                                        </div>
                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-reload" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Reload</span>
                                                        <span>Reload Widget</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-cogs" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Configure</span>
                                                        <span>Configure widget</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-cog" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Settings</span>
                                                        <span>Widget Settings</span>
                                                    </div>
                                                </a>
                                                <hr className="dropdown-divider" />
                                                <a href="#" className="dropdown-item is-media">
                                                    <div className="icon">
                                                        <i className="lnil lnil-trash-can-alt" />
                                                    </div>
                                                    <div className="meta">
                                                        <span>Remove</span>
                                                        <span>Remove from view</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content">
                                <ul>
                                    <li>
                                        <a>
                                            <span>Personal</span>
                                            <span className="tag is-rounded">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span>Business</span>
                                            <span className="tag is-rounded">9</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span>Family</span>
                                            <span className="tag is-rounded">2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*Widget*/}
                        {/*Widget*/}
                        <div className="widget text-widget">
                            <div className="widget-toolbar">
                                <div className="left">
                                    <h3>Messages</h3>
                                </div>
                                <div className="right">
                                    <a className="right-icon has-indicator">
                                        <i data-feather="message-square" />
                                    </a>
                                </div>
                            </div>
                            <div className="widget-content">
                                <p>
                                    You currently have more than <span>10 unread messages</span>{" "}
                                    in your inbox. It could be a good time to check them out.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
