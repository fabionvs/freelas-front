import React, { useEffect, useState } from 'react';
import SubHeader from '../../components/header/SubHeader';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/header/Footer';
import Business from '../../services/Business';
import { Link } from 'react-router-dom';

function Search(props: any) {
    const [count, setCount] = useState(0);
    const [pessoas, setPessoas] = useState([] as any);
    const [title, setTitle] = useState([] as any);
    const [latitude, setLatitude] = useState(null as any);
    const [longitude, setLongitude] = useState(null as any);
    const [business, setBusiness] = useState([] as any);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            search()
        }
    }, [latitude, longitude]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        });
    }, []);

    const search = async () => {
        let req: any = {
            latitude: latitude,
            longitude: longitude,
        };
        if (title !== "") {
            req.title = title;
        }
        await Business.search(req).then((response: any) => {
            setBusiness(response)
            if (response.success) {
            }
        });
        return true;
    }

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
                {/*List*/}
                <div className="list-view list-view-v2">
                    {/*List Empty Search Placeholder */}
                    <div className="page-placeholder custom-text-filter-placeholder is-hidden">
                        <div className="placeholder-content">
                            <img
                                className="light-image"
                                src="./Huro __ List Views_files/search-2.svg"
                                alt=""
                            />
                            <img
                                className="dark-image"
                                src="./Huro __ List Views_files/search-2-dark.svg"
                                alt=""
                            />
                            <h3>We couldn't find any matching results.</h3>
                            <p className="is-larger">
                                Too bad. Looks like we couldn't find any matching results for the
                                search terms you've entered. Please try different search terms or
                                criteria.
                            </p>
                        </div>
                    </div>
                    {/*Active Tab*/}
                    <div id="active-items-tab" className="tab-content is-active">


                        <div className="list-view-inner">
                            {/*List Item*/}
                            {business.length > 0 && business.map((val: any, i: any) =>
                                <div className="list-view-item">
                                    <div className="list-view-item-inner">
                                        <img
                                            src={process.env.REACT_APP_API_URL + val.files[0].file}
                                            data-demo-src="assets/img/photo/demo/1.jpg"
                                            alt=""
                                        />
                                        <div className="meta-left">
                                            <h3>
                                                <span data-filter-match="">{val.title}</span>
                                                <span className="rating">
                                                    <i aria-hidden="true" className="fas fa-star active" />
                                                    <i aria-hidden="true" className="fas fa-star active" />
                                                    <i aria-hidden="true" className="fas fa-star active" />
                                                    <i aria-hidden="true" className="fas fa-star active" />
                                                    <i aria-hidden="true" className="fas fa-star" />
                                                </span>
                                            </h3>
                                            <p>
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
                                                    className="feather feather-map-pin"
                                                >
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx={12} cy={10} r={3} />
                                                </svg>
                                                <span data-filter-match="">
                                                {" " +val.km_away} KM de distância
                                                </span>
                                            </p>
                                            <p className='p-2'>{val.description}</p>
                                        </div>
                                        <div className="meta-right">
                                            <div className="buttons">
                                                <a className="button h-button is-light">More Info</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                        {/*Infinite Loader*/}
                        <div className="infinite-scroll-loader" data-filter-hide="">
                            <div className="infinite-scroll-loader-inner">
                                <div className="loader is-loading" />
                                <div className="loader-end is-hidden">
                                    <span>No more items to load</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Inactive Tab*/}
                    <div id="inactive-items-tab" className="tab-content">
                        <div className="list-view-inner">
                            {/*Empty placeholder*/}
                            <div className="page-placeholder custom-text-filter-placeholder">
                                <div className="placeholder-content">
                                    <img
                                        className="light-image"
                                        src="./Huro __ List Views_files/having-coffee.svg"
                                        alt=""
                                    />
                                    <img
                                        className="dark-image"
                                        src="./Huro __ List Views_files/having-coffee-dark.svg"
                                        alt=""
                                    />
                                    <h3>There are no inactive properties.</h3>
                                    <p className="is-larger">
                                        Looks like there are no inactive properties to display. You can
                                        disable and also enable a property from the property settings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Search;
