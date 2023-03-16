import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // import do hook
import StepWizard from "react-step-wizard";

function Create() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [loadingBar, setLoadingBar] = useState(10);
    let navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        window.startLayout()
        window.intializeWizard();
    }, []);

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
    };

    return (
        <>
            {/*Wizard Progress Bar*/}
            {/*Main Wrapper*/}
            <progress
                id="wizard-progress"
                className="progress is-smaller is-primary wizard-progress"
                value={loadingBar}
                max={100}
            />
            <div className="wizard-v1-wrapper">
                <div
                    id="wizard-step-0"
                    className="inner-wrapper is-active"
                    data-step-title="Project Type"
                >
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">Select a project type</h2>
                        </div>
                        <div className="wizard-types">
                            <div className="columns">
                                <div className="column is-4">
                                    <div className="wizard-card">
                                        <img src="assets/img/illustrations/wizard/type-1.svg" alt="" />
                                        <h3 className="dark-inverted">UI/UX Design</h3>
                                        <p>Some short explanation about the type goes here.</p>
                                        <div className="button-wrap">
                                            <a
                                                href="#"
                                                className="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                                            >
                                                Continue
                                            </a>
                                        </div>
                                        <div className="learn-more-link">
                                            <a href="#" className="dark-inverted-hover">
                                                Or Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="wizard-card">
                                        <img src="assets/img/illustrations/wizard/type-2.svg" alt="" />
                                        <h3 className="dark-inverted">Web Development</h3>
                                        <p>Some short explanation about the type goes here.</p>
                                        <div className="button-wrap">
                                            <a
                                                href="#"
                                                className="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                                            >
                                                Continue
                                            </a>
                                        </div>
                                        <div className="learn-more-link">
                                            <a href="#" className="dark-inverted-hover">
                                                Or Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="wizard-card">
                                        <img src="assets/img/illustrations/wizard/type-3.svg" alt="" />
                                        <h3 className="dark-inverted">Marketing</h3>
                                        <p>Some short explanation about the type goes here.</p>
                                        <div className="button-wrap">
                                            <a
                                                href="#"
                                                className="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                                            >
                                                Continue
                                            </a>
                                        </div>
                                        <div className="learn-more-link">
                                            <a href="#" className="dark-inverted-hover">
                                                Or Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="wizard-step-1"
                    className="inner-wrapper"
                    data-step-title="Project Info"
                >
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">What is this project about?</h2>
                            <p>Manage better by adding all relevant project information</p>
                        </div>
                        <div className="project-info">
                            <div className="project-info-head">
                                <div className="project-avatar-upload">
                                    <div className="filepond-profile-wrap is-small">
                                        <input
                                            type="file"
                                            className="profile-filepond"
                                            name="profile_filepond"
                                            accept="image/png, image/jpeg, image/gif"
                                        />
                                    </div>
                                    <p>
                                        <span>Upload a project logo</span>
                                        <span>File size cannot exceed 2MB</span>
                                    </p>
                                </div>
                                <div className="project-info">
                                    <div className="project-name">
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    id="project-name"
                                                    className="input"
                                                    placeholder="Project Name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-description p-t-10">
                                        <div className="field">
                                            <div className="control">
                                                <textarea
                                                    id="project-description"
                                                    className="textarea"
                                                    rows={4}
                                                    placeholder="Describe your project..."
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <p className="help">Minimum of 50 characters</p>
                                        </div>
                                        <div className="field">
                                            <label>Related Industries</label>
                                            <div className="control">
                                                <input
                                                    id="choices-text-remove-button"
                                                    className="input"
                                                    defaultValue="UI/UX Design"
                                                    placeholder="Enter something"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="wizard-step-2"
                    className="inner-wrapper"
                    data-step-title="Project Details"
                >
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">Add more details</h2>
                            <p>Add useful details to your project. You can edit this later.</p>
                        </div>
                        <div className="project-customer">
                            <h4>Customer</h4>
                            <div className="field is-autocomplete">
                                <div className="control has-icon">
                                    <input
                                        id="customers-search"
                                        className="input"
                                        placeholder="search..."
                                    />
                                    <div className="form-icon">
                                        <i data-feather="search" />
                                    </div>
                                </div>
                            </div>
                            <div className="media-flex-center is-hidden">
                                <div className="h-avatar is-medium">
                                    <img
                                        id="customer-logo"
                                        className="avatar"
                                        src="https://via.placeholder.com/150x150"
                                        data-demo-src="assets/img/photo/demo/brands/airbnb.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-meta">
                                    <span id="customer-name">Airbnb</span>
                                    <span id="customer-location">Los Angeles, CA</span>
                                </div>
                                <div className="flex-end">
                                    <button id="remove-customer" className="button is-circle">
                                        <span className="icon is-small">
                                            <i data-feather="x" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="project-dates">
                            <h4>Project Time Frame</h4>
                            <div className="project-dates-inner">
                                <div className="project-date">
                                    <div className="date-icon">
                                        <i data-feather="map-pin" />
                                    </div>
                                    <div className="control">
                                        <input
                                            id="project-start-date"
                                            className="input form-datepicker"
                                            placeholder="Start Date"
                                        />
                                    </div>
                                </div>
                                <div className="separator" />
                                <div className="project-date">
                                    <div className="date-icon">
                                        <i data-feather="flag" />
                                    </div>
                                    <div className="control">
                                        <input
                                            id="project-end-date"
                                            className="input form-datepicker"
                                            placeholder="End Date"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-budget">
                            <h4>Project Budget</h4>
                            <div className="project-budget-inner">
                                <div className="budget-item">
                                    <a className="budget-item-inner is-active">
                                        <span>&lt; 5K</span>
                                    </a>
                                    <a className="budget-item-inner">
                                        <span>&lt; 30K</span>
                                    </a>
                                    <a className="budget-item-inner">
                                        <span>&lt; 100K</span>
                                    </a>
                                    <a className="budget-item-inner">
                                        <span>100K+</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="wizard-step-3"
                    className="inner-wrapper"
                    data-step-title="Project Files"
                >
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">Add files to this project</h2>
                            <p>Or you can skip this step. You can always add more files later.</p>
                        </div>
                        {/*List Empty Search Placeholder */}
                        <div className="page-placeholder is-files">
                            <div className="placeholder-content">
                                <img
                                    className="light-image is-rounded"
                                    src="assets/img/illustrations/wizard/upload-placeholder.svg"
                                    alt=""
                                />
                                <img
                                    className="dark-image is-rounded"
                                    src="assets/img/illustrations/wizard/upload-placeholder.svg"
                                    alt=""
                                />
                                <h3>Upload project files</h3>
                                <p className="is-larger">
                                    You can already start adding files to your project if you have
                                    them handy. But don't worry, you'll be able to add and manage
                                    files later.
                                </p>
                                <a className="action-link toggle-uploader-link">Add Files</a>
                            </div>
                        </div>
                        <div className="uploader is-hidden">
                            <div id="actions" className="uploader-toolbar">
                                <div className="left">
                                    <div className="uploader-actions">
                                        <div className="uploader-action">
                                            <span
                                                className="inner-action fileinput-button hint--bubble hint--primary hint--top"
                                                data-hint="Add Files"
                                            >
                                                <i data-feather="plus" />
                                            </span>
                                        </div>
                                        <div className="uploader-action">
                                            <button
                                                type="submit"
                                                className="inner-action start hint--bubble hint--primary hint--top"
                                                data-hint="Upload All"
                                            >
                                                <i data-feather="upload" />
                                            </button>
                                        </div>
                                        <div className="uploader-action">
                                            <button
                                                type="reset"
                                                className="inner-action cancel hint--bubble hint--primary hint--top"
                                                data-hint="Remove All"
                                            >
                                                <i data-feather="x" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    {/* The global file processing state */}
                                    <div className="fileupload-process">
                                        <div
                                            id="total-progress"
                                            className="progress progress-striped active"
                                            role="progressbar"
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-valuenow={0}
                                        >
                                            <div
                                                className="progress-bar progress-bar-success"
                                                data-dz-uploadprogress=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uploader-container">
                                <div className="upload-wrapper">
                                    <div className="upload-box fileinput-button">
                                        <div className="uploader-label">
                                            <i className="lnil lnil-cloud-upload" />
                                            <h3>Upload photos/videos</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="template-list" id="previews">
                                <div id="template" className="template-list-item">
                                    <div className="preview-box">
                                        {/* This is used as the file preview template */}
                                        <div className="preview">
                                            <img
                                                data-dz-thumbnail=""
                                                src="https://via.placeholder.com/150x150"
                                                alt=""
                                            />
                                        </div>
                                        <div className="list-item-meta">
                                            <p className="name" data-dz-name="" />
                                            <p className="error text-danger" data-dz-errormessage="" />
                                        </div>
                                        <div className="list-item-progress">
                                            <p className="size" data-dz-size="" />
                                            <div
                                                className="progress active"
                                                role="progressbar"
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                aria-valuenow={0}
                                            >
                                                <div
                                                    className="progress-bar progress-bar-success"
                                                    data-dz-uploadprogress=""
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="list-item-actions">
                                            <button
                                                className="list-item-action start hint--bubble hint--primary hint--top"
                                                data-hint="Upload File"
                                            >
                                                <i data-feather="play" />
                                            </button>
                                            <button
                                                data-dz-remove=""
                                                className="list-item-action cancel hint--bubble hint--primary hint--top"
                                                data-hint="Cancel"
                                            >
                                                <i data-feather="arrow-left" />
                                            </button>
                                            <button data-dz-remove="" className="list-item-action delete">
                                                <i data-feather="trash-2" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="wizard-step-4"
                    className="inner-wrapper"
                    data-step-title="Team Members"
                >
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">
                                Who will be working on this project?
                            </h2>
                            <p>Start by adding members to your team</p>
                        </div>
                        {/*List Empty Search Placeholder */}
                        <div className="page-placeholder is-people">
                            <div className="placeholder-content">
                                <img
                                    className="light-image is-rounded"
                                    src="assets/img/illustrations/wizard/team-placeholder.svg"
                                    alt=""
                                />
                                <img
                                    className="dark-image is-rounded"
                                    src="assets/img/illustrations/wizard/team-placeholder.svg"
                                    alt=""
                                />
                                <h3>Invite People</h3>
                                <p className="is-larger">
                                    You can already start adding files to your project if you have
                                    them handy. But don't worry, you'll be able to add and manage
                                    files later.
                                </p>
                                <a className="action-link toggle-members-link">Add Members</a>
                            </div>
                        </div>
                        <div className="project-team-wrapper is-hidden">
                            <div className="project-team-header">
                                <div className="field is-autocomplete">
                                    <div className="control has-icon">
                                        <input
                                            id="add-member"
                                            className="input"
                                            placeholder="Search teammates..."
                                        />
                                        <div className="form-icon">
                                            <i data-feather="search" />
                                        </div>
                                    </div>
                                </div>
                                <div className="h-avatar is-big">
                                    <img
                                        className="avatar"
                                        src="https://via.placeholder.com/150x150"
                                        data-demo-src="assets/img/avatars/photos/8.jpg"
                                        alt=""
                                        data-user-popover={3}
                                    />
                                    <img
                                        className="badge"
                                        src="https://via.placeholder.com/150x150"
                                        data-demo-src="assets/img/icons/flags/united-states-of-america.svg"
                                        alt=""
                                    />
                                </div>
                                <h3 className="title is-4 is-narrow is-thin">Erik Kovalsky</h3>
                                <p className="light-text">You are the project owner</p>
                            </div>
                            <div className="project-team-body">
                                <div className="members-list">
                                    <div className="empty-wrap has-text-centered">
                                        <span>No team members yet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="wizard-step-5"
                    className="inner-wrapper"
                    data-step-title="Project Tools"
                >
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">What tools will you be using?</h2>
                            <p>Choose a set of tools that you'll be using in this project.</p>
                        </div>
                        <div className="tools-wrapper">
                            <div className="columns is-multiline">
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/illustrator.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Illustrator</span>
                                                    <span>Design Software</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/photoshop.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Photoshop</span>
                                                    <span>Design Software</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/xd.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Adobe XD</span>
                                                    <span>Design Software</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/figma.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Figma</span>
                                                    <span>Design Software</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/invision.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Invision</span>
                                                    <span>Design Software</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/jira.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Jira</span>
                                                    <span>Issue Tracker</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/taiga.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Taiga</span>
                                                    <span>Scrumboard</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/slack.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Slack</span>
                                                    <span>Messaging App</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/asana.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Asana</span>
                                                    <span>Task Manager</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/teamwork.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Teamwork</span>
                                                    <span>Collaborative App</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/github.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>GitHub</span>
                                                    <span>Code Repository</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Tool*/}
                                <div className="column is-4">
                                    <div className="tool-card">
                                        <input type="checkbox" />
                                        <div className="tool-card-inner">
                                            <div className="media-flex-center">
                                                <div className="h-avatar">
                                                    <img
                                                        className="avatar is-squared"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/tools/gitlab.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>Gitlab</span>
                                                    <span>Code Repository</span>
                                                </div>
                                                <div className="flex-end">
                                                    <div className="checkmark">
                                                        <i data-feather="check" />
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
                <div id="wizard-step-6" className="inner-wrapper" data-step-title="Preview">
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">Make sure everything is good</h2>
                            <p>You can go back to previous steps if you need to edit anything.</p>
                        </div>
                        <div className="project-preview-wrapper">
                            <div className="project-preview-loader is-active">
                                <div className="loader is-loading" />
                            </div>
                            <div className="project-preview-header">
                                <div className="h-avatar is-big">
                                    <div
                                        id="project-preview-fake-logo"
                                        className="avatar is-fake is-h-green"
                                    >
                                        <span>P</span>
                                    </div>
                                    <img
                                        id="project-preview-logo"
                                        className="avatar is-hidden"
                                        src="https://via.placeholder.com/150x150"
                                        alt=""
                                    />
                                    <a className="edit-icon" data-step-edit={1}>
                                        <i className="lnil lnil-pencil" />
                                    </a>
                                </div>
                                <h3
                                    id="project-preview-title"
                                    className="title is-4 is-narrow is-thin"
                                >
                                    <span>Project Title Goes Here</span>
                                    <a className="edit-icon">
                                        <i className="lnil lnil-pencil" data-step-edit={1} />
                                    </a>
                                </h3>
                            </div>
                            <div className="project-preview-body">
                                <div className="columns is-multiline">
                                    <div className="column is-12 is-tablet-100">
                                        <div className="edit-box">
                                            <h4>Description</h4>
                                            <div className="edit-icon" data-step-edit={1}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <p id="project-preview-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Quis negat? Tamen a proposito, inquam, aberramus. Deinde
                                                dolorem quem maximum? Quae duo sunt, unum facit. Quod vestri
                                                non item.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="column is-6 is-tablet-50">
                                        <div id="project-preview-type" className="edit-box">
                                            <div className="edit-icon" data-step-edit={0}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <div className="media-flex-center">
                                                <div className="h-icon is-medium is-warning is-rounded">
                                                    <i className="lnil lnil-vector-pen" />
                                                </div>
                                                <div className="flex-meta">
                                                    <span>UI/UX Design</span>
                                                    <span>Project Type</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6 is-tablet-50">
                                        <div className="edit-box">
                                            <div className="edit-icon" data-step-edit={2}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <div
                                                id="project-preview-customer-block"
                                                className="media-flex-center"
                                            >
                                                <div className="h-avatar is-medium">
                                                    <img
                                                        id="project-preview-customer-logo"
                                                        className="avatar"
                                                        src="https://via.placeholder.com/150x150"
                                                        data-demo-src="assets/img/photo/demo/brands/airbnb.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-meta">
                                                    <span id="project-preview-customer-name">Airbnb</span>
                                                    <span>Project Customer</span>
                                                </div>
                                            </div>
                                            <div
                                                id="project-preview-customer-placeholder"
                                                className="edit-box-placeholder is-media is-hidden"
                                            >
                                                <span>No selected customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-4 is-tablet-33">
                                        <div className="edit-box">
                                            <div className="edit-icon" data-step-edit={2}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <div className="estimated-budget">
                                                <div className="inner-block">
                                                    <div id="project-preview-budget" className="budget">
                                                        <span>&lt; 30K</span>
                                                    </div>
                                                    <p>Estimated Budget</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-4 is-tablet-33">
                                        <div className="edit-box">
                                            <div className="edit-icon" data-step-edit={2}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <div className="estimated-due-date">
                                                <div className="inner-block">
                                                    <div id="project-preview-date" className="date">
                                                        <span>Oct 20, 2020</span>
                                                    </div>
                                                    <p>Estimated Due Date</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-4 is-tablet-33">
                                        <div className="edit-box">
                                            <div className="edit-icon" data-step-edit={3}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <div className="attachments-count">
                                                <div className="inner-block">
                                                    <div
                                                        id="project-preview-attachments"
                                                        className="attachments"
                                                    >
                                                        <span>3</span>
                                                    </div>
                                                    <p>Attachments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6 is-tablet-50">
                                        <div className="edit-box">
                                            <h4>Team</h4>
                                            <div className="edit-icon" data-step-edit={4}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <div id="project-preview-team" className="media-list">
                                                <div className="media-list-item is-owner">
                                                    <div className="media-flex-center">
                                                        <div className="h-avatar">
                                                            <img
                                                                className="avatar"
                                                                src="https://via.placeholder.com/150x150"
                                                                data-demo-src="assets/img/avatars/photos/8.jpg"
                                                                alt=""
                                                                data-user-popover={3}
                                                            />
                                                        </div>
                                                        <div className="flex-meta">
                                                            <span>Erik K.</span>
                                                            <span>Owner</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-list-item">
                                                    <div className="media-flex-center">
                                                        <div className="h-avatar">
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
                                                            <span>Member</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-list-item">
                                                    <div className="media-flex-center">
                                                        <div className="h-avatar">
                                                            <img
                                                                className="avatar"
                                                                src="https://via.placeholder.com/150x150"
                                                                data-demo-src="assets/img/avatars/photos/25.jpg"
                                                                alt=""
                                                                data-user-popover={4}
                                                            />
                                                        </div>
                                                        <div className="flex-meta">
                                                            <span>Melany W.</span>
                                                            <span>Member</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6 is-tablet-50">
                                        <div className="edit-box">
                                            <h4>Tools</h4>
                                            <div className="edit-icon" data-step-edit={5}>
                                                <i className="lnil lnil-pencil" />
                                            </div>
                                            <div
                                                id="project-preview-tools-placeholder"
                                                className="edit-box-placeholder is-list is-hidden"
                                            >
                                                <span>No selected tools</span>
                                            </div>
                                            <div id="project-preview-tools" className="media-list">
                                                <div className="media-list-item">
                                                    <div className="media-flex-center">
                                                        <div className="h-avatar is-small">
                                                            <img
                                                                className="avatar"
                                                                src="https://via.placeholder.com/150x150"
                                                                data-demo-src="assets/img/photo/demo/tools/illustrator.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-meta">
                                                            <span>Illustrator</span>
                                                            <span>Design Software</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-list-item">
                                                    <div className="media-flex-center">
                                                        <div className="h-avatar is-small">
                                                            <img
                                                                className="avatar"
                                                                src="https://via.placeholder.com/150x150"
                                                                data-demo-src="assets/img/photo/demo/tools/figma.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-meta">
                                                            <span>Figma</span>
                                                            <span>Design Software</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media-list-item">
                                                    <div className="media-flex-center">
                                                        <div className="h-avatar is-small">
                                                            <img
                                                                className="avatar"
                                                                src="https://via.placeholder.com/150x150"
                                                                data-demo-src="assets/img/photo/demo/tools/taiga.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-meta">
                                                            <span>Taiga</span>
                                                            <span>Scrumboard</span>
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
                <div id="wizard-step-7" className="inner-wrapper" data-step-title="Finish">
                    {/*src/partials/pages/wizard/wizard-v1/*/}
                    <div className="step-content">
                        <div className="step-title">
                            <h2 className="dark-inverted">Congrats! You're all set.</h2>
                            <p>Awesome, you just finished creating this project.</p>
                        </div>
                        <div className="page-placeholder end-placeholder">
                            <div className="placeholder-content">
                                <img
                                    className="light-image"
                                    src="assets/img/illustrations/wizard/finish.svg"
                                    alt=""
                                />
                                <img
                                    className="dark-image"
                                    src="assets/img/illustrations/wizard/finish-dark.svg"
                                    alt=""
                                />
                                <h3>Get ready for next steps.</h3>
                                <p>
                                    You, and the team members you've added can already start working
                                    and creating tasks.
                                </p>
                                <div className="button-wrap">
                                    <a className="button h-button is-rounded is-bold is-elevated is-primary">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Wizard Navigation Buttons*/}
                <div className="wizard-buttons">
                    <div className="wizard-buttons-inner">
                        <button className="button h-button is-light is-bold wizard-button-previous">
                            Previous
                        </button>
                        <button className="button h-button is-primary is-bold is-elevated wizard-button-next">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
        ;
}

export default Create;