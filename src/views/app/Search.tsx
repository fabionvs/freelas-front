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
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    useEffect(() => {
        search
    }, [latitude]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          });
    }, []);

    const search = async (e: any) => {
        let req : any = {
            latitude: latitude,
            longitude: longitude,
        };
        if(title !== ""){
            req.title = title;
        }
        await Business.search(req).then((response: any) => {
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
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/1.jpg"
                                        data-demo-src="assets/img/photo/demo/1.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">1396 Redmond Street</span>
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
                                                1396 Redmond Street, Apartment 12, Suite H 102, Los Angeles,
                                                CA
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">5 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">3 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>3 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/2.jpg"
                                        data-demo-src="assets/img/photo/demo/2.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">24 Mulberry Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                24 Mulberry Street, Suite 43, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/3.jpg"
                                        data-demo-src="assets/img/photo/demo/3.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">62 John Walberg Ave</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                62 John Walberg Avenue, Apartment 10, Suite 24, Los Angeles,
                                                CA
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">4 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>3 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/4.jpg"
                                        data-demo-src="assets/img/photo/demo/4.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">48 Manhattan Ave</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                48 Manhattan Avenue, Suite G12, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">5 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">4 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>3 bathrooms</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>3 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/5(1).jpg"
                                        data-demo-src="assets/img/photo/demo/5.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">12 Charity Street</span>
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
                                                12 Charity Street, Apartment 49, Brooklynn, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/6.jpg"
                                        data-demo-src="assets/img/photo/demo/6.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">23 Bakery Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                23 Bakery Street, Suite 121, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>4 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/7(1).jpg"
                                        data-demo-src="assets/img/photo/demo/7.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">1028 Pasadena Ave</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                1028 Pasadena Avenue, Suite F 24, Los Angeles, CA
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">7 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">5 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>3 bathrooms</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>6 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/8(1).jpg"
                                        data-demo-src="assets/img/photo/demo/8.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">54 Church Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                54 Church Street, Apartment 2, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">2 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">1 bed</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/9.jpg"
                                        data-demo-src="assets/img/photo/demo/9.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">112 Old City District</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                112 Old City District, Apartment 5 Suite 42, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/10.jpg"
                                        data-demo-src="assets/img/photo/demo/10.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">51 St Leonard Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                51 St Leonard Street, Suite 23, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">4 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>2 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/1.jpg"
                                        data-demo-src="assets/img/photo/demo/1.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">1396 Redmond Street</span>
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
                                                1396 Redmond Street, Apartment 12, Suite H 102, Los Angeles,
                                                CA
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">5 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">3 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>3 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/2.jpg"
                                        data-demo-src="assets/img/photo/demo/2.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">24 Mulberry Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                24 Mulberry Street, Suite 43, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/3.jpg"
                                        data-demo-src="assets/img/photo/demo/3.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">62 John Walberg Ave</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                62 John Walberg Avenue, Apartment 10, Suite 24, Los Angeles,
                                                CA
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">4 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>3 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/4.jpg"
                                        data-demo-src="assets/img/photo/demo/4.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">48 Manhattan Ave</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                48 Manhattan Avenue, Suite G12, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">5 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">4 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>3 bathrooms</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>3 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/5(1).jpg"
                                        data-demo-src="assets/img/photo/demo/5.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">12 Charity Street</span>
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
                                                12 Charity Street, Apartment 49, Brooklynn, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/6.jpg"
                                        data-demo-src="assets/img/photo/demo/6.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">23 Bakery Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                23 Bakery Street, Suite 121, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>4 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/7(1).jpg"
                                        data-demo-src="assets/img/photo/demo/7.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">1028 Pasadena Ave</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                1028 Pasadena Avenue, Suite F 24, Los Angeles, CA
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">7 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">5 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>3 bathrooms</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>6 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/8(1).jpg"
                                        data-demo-src="assets/img/photo/demo/8.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">54 Church Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                54 Church Street, Apartment 2, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">2 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">1 bed</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/9.jpg"
                                        data-demo-src="assets/img/photo/demo/9.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">112 Old City District</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                112 Old City District, Apartment 5 Suite 42, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">3 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*List Item*/}
                            <div className="list-view-item">
                                <div className="list-view-item-inner">
                                    <img
                                        src="./Huro __ List Views_files/10.jpg"
                                        data-demo-src="assets/img/photo/demo/10.jpg"
                                        alt=""
                                    />
                                    <div className="meta-left">
                                        <h3>
                                            <span data-filter-match="">51 St Leonard Street</span>
                                            <span className="rating">
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
                                                <i aria-hidden="true" className="fas fa-star active" />
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
                                                51 St Leonard Street, Suite 23, New York, NY
                                            </span>
                                        </p>
                                        <span>
                                            <span data-filter-match="">4 rooms</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span data-filter-match="">2 beds</span>
                                            <i
                                                aria-hidden="true"
                                                className="fas fa-circle icon-separator"
                                            />
                                            <span>1 bathroom</span>
                                        </span>
                                        <div className="icon-list">
                                            <span>
                                                <i className="lnil lnil-car" />
                                                <span data-filter-match="">Parking</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-signal" />
                                                <span data-filter-match="">Wifi</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-air-flow" />
                                                <span data-filter-match="">Heater</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-sun" />
                                                <span data-filter-match="">Cleaning</span>
                                            </span>
                                            <span>
                                                <i className="lnil lnil-more" />
                                                <span>2 more</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-right">
                                        <div className="buttons">
                                            <a className="button h-button is-light">More Info</a>
                                            <a className="button h-button is-primary is-raised">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
