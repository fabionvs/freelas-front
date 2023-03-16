import React, { useState, useEffect } from 'react';
import authService from '../../../services/Auth';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // import do hook


function Sign() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    let navigate = useNavigate();
    const location = useLocation();


    const onChangeUsername = (e: any) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        console.log(username, password)
        authService.login(username, password).then(
            (response: any) => {
                console.log(response)
                navigate('/')
            },
            (error: any) => {
                console.log(error)
            }
        );
    };

    return (
        <>
            <div className="auth-wrapper">
                {/*Page body*/}
                <div className="modern-login">
                    <div className="underlay h-hidden-mobile h-hidden-tablet-p" />
                    <div className="columns is-gapless is-vcentered">
                        <div className="column is-relative is-6 h-hidden-mobile h-hidden-tablet-p">
                            <div className="hero is-fullheight is-image">
                                <div className="hero-body">
                                    <div className="container">
                                        <div className="columns">
                                            <div className="column">
                                                <img
                                                    className="hero-image"
                                                    src="assets/img/illustrations/login/station.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6 is-relative mb-3">
                            <div className="is-form">
                                <div className="hero-body">
                                    <div className="form-text">
                                        <h2>Sign In</h2>
                                        <p>Login to access your account</p>
                                    </div>
                                    <div className="form-text is-hidden">
                                        <h2>Recover Account</h2>
                                        <p>Reset your account password.</p>
                                    </div>
                                    <form
                                        id="login-form"
                                        className="login-wrapper"
                                        action="activity-main.html"
                                    >
                                        <div className="control has-validation">
                                            <input type="text" className="input" placeholder="" />
                                            <small className="error-text">This is a required field</small>
                                            <div className="auth-label">Email Address</div>
                                            <div className="auth-icon">
                                                <i className="lnil lnil-envelope" />
                                            </div>
                                            <div className="validation-icon is-success">
                                                <div className="icon-wrapper">
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
                                                        className="feather feather-check"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="validation-icon is-error">
                                                <div className="icon-wrapper">
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
                                                        className="feather feather-x"
                                                    >
                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control has-validation">
                                            <input type="password" className="input" />
                                            <div className="auth-label">Password</div>
                                            <div className="auth-icon">
                                                <i className="lnil lnil-lock-alt" />
                                            </div>
                                        </div>
                                        <div className="control is-flex">
                                            <label className="remember-toggle">
                                                <input type="checkbox" />
                                                <span className="toggler">
                                                    <span className="active">
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
                                                            className="feather feather-check"
                                                        >
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </span>
                                                    <span className="inactive">
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
                                                            className="feather feather-circle"
                                                        >
                                                            <circle cx={12} cy={12} r={10} />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </label>
                                            <div className="remember-me">Remember Me</div>
                                            <a id="forgot-link">Forgot Password?</a>
                                        </div>
                                        <div className="button-wrap has-help">
                                            <button
                                                id="login-submit"
                                                type="button"
                                                className="button h-button is-big is-rounded is-primary is-bold is-raised"
                                            >
                                                Login Now
                                            </button>
                                            <span>
                                                Or <a href="/auth-signup.html">Create</a> an account.
                                            </span>
                                        </div>
                                    </form>
                                    <form id="recover-form" className="login-wrapper is-hidden">
                                        <p className="recover-text">
                                            Enter your email and click on the confirm button to reset your
                                            password. We'll send you an email detailing the steps to
                                            complete the procedure.
                                        </p>
                                        <div className="control has-validation">
                                            <input type="text" className="input" />
                                            <small className="error-text">This is a required field</small>
                                            <div className="auth-label">Email Address</div>
                                            <div className="auth-icon">
                                                <i className="lnil lnil-envelope" />
                                            </div>
                                            <div className="validation-icon is-success">
                                                <div className="icon-wrapper">
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
                                                        className="feather feather-check"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="validation-icon is-error">
                                                <div className="icon-wrapper">
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
                                                        className="feather feather-x"
                                                    >
                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-wrap">
                                            <button
                                                id="cancel-recover"
                                                type="button"
                                                className="button h-button is-white is-big is-rounded is-lower"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="button h-button is-solid is-big is-rounded is-lower is-raised is-colored"
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
        ;
}

export default Sign;