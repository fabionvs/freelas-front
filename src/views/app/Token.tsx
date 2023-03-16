import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // import do hook
import StepWizard from "react-step-wizard";
import Candy from '../../services/Candy';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Category from '../../services/Category';

function Create() {
    const [loadingBar, setLoadingBar] = useState(10);
    const [instance, updateInstance] = useState({} as any);
    const [step, setStep] = useState({} as any);
    const [categories, setCategories] = useState([] as any);
    useEffect(() => {
        getCategories()
    }, []);


    const getCategories = () => {
        Category.getCategories().then(async (response: any) => {
            setCategories(response.categories);
        });
    }

    const onStepChange = (stats: any) => {
        setStep(stats);

        setTimeout(() => {
        }, 100);
    };


    return (
        <div
            className="view-wrapper is-webapp"
            data-page-title="Dashboard"
            data-naver-offset={150}
            data-menu-item="#dashboards-navbar-menu"
            data-mobile-item="#home-sidebar-menu-mobile"
        >
            <div className="page-content-wrapper">
                <div className="page-content is-relative">
                    <div className="page-content-inner">
                        {/*Business Dashboard V3*/}
                        <div className="business-dashboard hr-dashboard">
                            <div className="columns">
                                <div className="column is-8">
                                    <div className="columns is-multiline">
                                        {/*Header*/}
                                        <div className="column is-12">
                                            <div className="block-header">
                                                {/*left*/}
                                                <div className="left">
                                                    <div className="current-user">
                                                        <div className="h-avatar is-medium">
                                                            <img
                                                                className="avatar is-squared"
                                                                src={process.env.PUBLIC_URL + '/logo.png'}
                                                                data-demo-src={process.env.PUBLIC_URL + '/logo.png'}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h3>About Candyswap</h3>
                                                    </div>
                                                </div>
                                                {/*Center*/}
                                                <div className="center">
                                                    <h4 className="block-heading">What ís candyswap?</h4>
                                                    <p className="block-text">
                                                        Candyswap is a descentralized NFT liquidity pool. We bring a new era of NFT's that give you access of web metaverses.
                                                    </p>
                                                </div>
                                                {/*Right*/}
                                                <div className="right">
                                                    <h4 className="block-heading">How it works?</h4>
                                                    <p className="block-text">
                                                        Everyone is able to create a new candy and there are many new features we are bringing to crypto investors. Mint your art, photo, music, assets, create a community, fan club, sell tickets. We are the first web metaverse in the world and we bring real utility to NFT's!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Selector*/}
                                        <div className="column is-12">
                                            <div className="feed-settings">
                                                <h3 className="dark-inverted">Candy Solutions</h3>
                                            </div>
                                        </div>
                                        {/*Side Text*/}
                                        <div className="column is-4">
                                            <div className="side-text">
                                                <h3 className="dark-inverted">New Solutions to Web3</h3>
                                                <p>
                                                    Our main purpose is to bring <b>web3</b> to the moon. We are true beleivers that descentralized solutions are the future behind information and investments. We are here to create new solutions behind web3 and we invite you to be a part of this new web world.
                                                </p>
                                            </div>
                                        </div>
                                        {/*Incoming*/}
                                        <div className="column is-7 is-offset-1">
                                            <div className="side-text">
                                                <h3 className="dark-inverted">CandySwap Token</h3>
                                                <p>
                                                    Every transaction fee of Candyswap are automatically transfered to our token liquidity, what makes it very secure and trustable cryptocurrency to invest. Although, you would be able to be a part of main candyswap community and have VIP access! Be a part of a huge community arround the world.
                                                </p>
                                            </div>
                                        </div>
                                        {/*Rookies*/}
                                        <div className="column is-12">
                                            <hr className='mb-4' />
                                            <div className="recent-rookies">
                                                <div className="recent-rookies-header">
                                                    <h3 className="dark-inverted">Smart Contracts</h3>
                                                </div>
                                                <div className="columns user-grid user-grid-v4">
                                                    {/*Rookie*/}
                                                    <div className="column is-4">
                                                        <div className="grid-item">
                                                            <div className="h-avatar is-large">
                                                                <img
                                                                    className="avatar"
                                                                    src={process.env.PUBLIC_URL + '/assets/img/sepolia.png'}
                                                                    data-demo-src={process.env.PUBLIC_URL + '/assets/img/sepolia.png'}
                                                                    alt=""
                                                                    data-user-popover={6}
                                                                />
                                                            </div>
                                                            <h3 className="dark-inverted" data-filter-match="">
                                                                Sepolia
                                                            </h3>
                                                            <div className="button-wrap has-text-centered">
                                                                <button className="button h-button is-primary is-raised">
                                                                    Etherescan
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className='mb-4 mt-5' />
                                            <div className="recent-rookies">
                                                <div className="recent-rookies-header">
                                                    <h3 className="dark-inverted">About Fees</h3>
                                                </div>
                                                <div className="columns user-grid user-grid-v4">
                                                    {/*Rookie*/}
                                                    <div className="column is-12">
                                                        <table className="table table-bordered mt-5">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Reserve ETH</th>
                                                                    <th scope="col">Creator Fee</th>
                                                                    <th scope="col">Project Fee</th>
                                                                    <th scope="col">CandySwap Token Fee</th>
                                                                    <th scope="col">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">{"<1000"}</th>
                                                                    <td>6.0%</td>
                                                                    <td>1.0%</td>
                                                                    <td>1.0%</td>
                                                                    <td>8.0%</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">{">5000, <10000"}</th>
                                                                    <td>3,0%</td>
                                                                    <td>1.0%</td>
                                                                    <td>1.0%</td>
                                                                    <td>5.0%</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">{">10000, <100000"}</th>
                                                                    <td >2,0%</td>
                                                                    <td>1.0%</td>
                                                                    <td>1.0%</td>
                                                                    <td>4.0%</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">{">100000"}</th>
                                                                    <td >1%</td>
                                                                    <td>0.5%</td>
                                                                    <td>0.5%</td>
                                                                    <td>2.0%</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    {/*Widget*/}
                                    {/*Widget*/}
                                    <div className="list-widget list-widget-v2 tabbed-widget">
                                        <div className="inner-list-wrapper is-active">
                                            <div className="inner-list">
                                                {/*List Item*/}
                                                <div className="widget-head">
                                                    <h3 className="dark-inverted">NFT Categories</h3>
                                                </div>
                                                {categories.length > 0 && categories.map((cat: any, i: any) =>
                                                    <div className="column is-12">
                                                        <div className="media-flex-center">
                                                            <i style={{ fontSize: '30px' }} className={cat.icon}></i>
                                                            <div className="flex-meta ml-5">
                                                                <span>{cat.title}</span>
                                                                <p>{cat.description}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-widget list-widget-v2 tabbed-widget">
                                        <div className="inner-list-wrapper is-active">
                                            <div className="inner-list">
                                                {/*List Item*/}
                                                <div className="widget-head">
                                                    <h3 className="dark-inverted">Backlog</h3>
                                                </div>
                                                <div className="inner-list-item media-flex-center">
                                                    <div className="flex-meta is-light">
                                                        <a href="#">Deploy application</a>
                                                        <span>02/12/2022</span>
                                                    </div>
                                                    <div className="flex-end">
                                                        <span className="tag is-rounded is-success">Success</span>
                                                    </div>
                                                </div>
                                                <div className="inner-list-item media-flex-center">
                                                    <div className="flex-meta is-light">
                                                        <a href="#">Start Sepolia Testnet</a>
                                                        <span>02/12/2022</span>
                                                    </div>
                                                    <div className="flex-end">
                                                        <span className="tag is-rounded is-success">Success</span>
                                                    </div>
                                                </div>
                                                <div className="inner-list-item media-flex-center">
                                                    <div className="flex-meta is-light">
                                                        <a href="#">Start Polygon</a>
                                                        <span>02/12/2022</span>
                                                    </div>
                                                    <div className="flex-end">
                                                        <span className="tag is-rounded">Waiting</span>
                                                    </div>
                                                </div>
                                                <div className="inner-list-item media-flex-center">
                                                    <div className="flex-meta is-light">
                                                        <a href="#">Start BSC</a>
                                                        <span>02/12/2022</span>
                                                    </div>
                                                    <div className="flex-end">
                                                        <span className="tag is-rounded">Waiting</span>
                                                    </div>
                                                </div>
                                                <div className="inner-list-item media-flex-center">
                                                    <div className="flex-meta is-light">
                                                        <a href="#">Start Ethereum Mainnet</a>
                                                        <span>02/12/2022</span>
                                                    </div>
                                                    <div className="flex-end">
                                                        <span className="tag is-rounded">Waiting</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
}

export default Create;