import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Auth from './services/Auth';
import Loading from './utils/Loading';
import App from './views/app/App';
import Candy from './views/candy/Index';
import Sign from './views/auth/login/Sign';
import Logout from './views/auth/login/Logout';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import SubHeader from './components/header/SubHeader';
import Search from './views/app/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
declare global {
    interface Window {
        $: any;
        app: any;
        ethereum: any;
        initSidebar: any;
        initCollapsibleMenu: any;
        startLayout: any;
        initComboBox: any;
        intializeWizard: any;
        initAnimatedCheckboxes: any;
        notyf: any;
    }
}

function PrivateRoute({ ...rest }) {
    const [user, setUser] = useState(null);
    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
        Auth.getUser();
    }, []);
    useEffect(() => {
        // subscribe to home component messages
        const subscription = Auth.observable.onUser().subscribe((user: any) => {
                // add message to local state if not empty
                setUser(user);
        });
        // return unsubscribe method to execute when component unmounts
        return subscription.unsubscribe;
    }, []);

    return (
        <>
            <Routes>
                <>
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<App user={user} />} />
                    <Route path="/login" element={<Sign />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/business/*" element={<Candy />} />
                </>
            </Routes>
        </>
    );
}

function LoadingBar({ ...rest }) {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // subscribe to home component messages
        const subscription = Loading.onLoading().subscribe((loading: any) => {
            if (loading) {
                // add message to local state if not empty
                setLoading(loading);
            } else {
                // clear messages when empty message received
                setTimeout(() => {
                    setLoading(false);
                }, 500)
            }
        });
        // return unsubscribe method to execute when component unmounts
        return subscription.unsubscribe;
    }, []);

    return (
        <>
            {loading == true &&
                <div id="backdrop">
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

ReactDOM.render(
    <>
        <LoadingBar />
        <BrowserRouter>
            <Header />
            <Navbar />
            <div
                className="view-wrapper"
                data-naver-offset={150}
                data-menu-item="#home-sidebar-menu"
                data-mobile-item="#home-sidebar-menu-mobile"
            >
                <div className="page-content-wrapper pt-2">
                    <div className="page-content is-relative">
                        <SubHeader title="Freelas.com" />
                        <PrivateRoute />
                    </div>
                </div>
            </div>
            
        </BrowserRouter >
    </>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
