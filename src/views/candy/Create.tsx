import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // import do hook
import StepWizard from "react-step-wizard";
import Candy from '../../services/Candy';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Category from '../../services/Category';
import Auth from "../../services/Auth";

export default function Create() {

    const [loadingBar, setLoadingBar] = useState(10);
    const [instance, updateInstance] = useState({} as any);
    const [step, setStep] = useState({} as any);
    const [formAlert, setFormAlert] = useState(false);
    const [chainAlert, setChainAlert] = useState(false);
    const [categories, setCategories] = useState([] as any);
    const setInstance = (SW: any) => updateInstance(SW);

    let navigate = useNavigate();
    const location = useLocation();
    const [category, setCategory] = useState(null);
    const [name, setName] = useState("");
    const [externalLink, setExternalLink] = useState("");
    const [description, setDescription] = useState("");
    const [supply, setSupply] = useState("");
    const [amount, setAmount] = useState("");
    const [hashtags, setHashtags] = useState("");
    const [publicChat, setPublicChat] = useState(false);
    const [explicit, setExplicit] = useState(false);
    const [community, setCommunity] = useState(false);
    const [files, setFiles] = useState([] as any);
    const [image, setImage] = useState({} as any);
    const [uploadedFiles, setUploadedFiles] = useState([] as any);
    const [simulationData, setSimulationData] = useState({} as any);
    const [properties, setProperties] = useState([] as any);
    const [stats, setStats] = useState([] as any);
    const [levels, setLevels] = useState([] as any);
    const [user, setUser] = useState({} as any);


    useEffect(() => {
        // subscribe to home component messages
        const subscription = Auth.observable.onUser().subscribe((user: any) => {
            setUser(user);
        });
        // return unsubscribe method to execute when component 
        return subscription.unsubscribe;
    }, []);

    useEffect(() => {
        getCategories()
    }, []);


    const getCategories = () => {
        Category.getCategories().then(async (response: any) => {
            setCategories(response.categories);
        });
    }


    const InstanceDemo = ({ instance }: any) => {
        return (
            <>
                <div className="wizard-buttons is-active">
                    <div className="wizard-buttons-inner">
                        <button className="button h-button is-light is-bold wizard-button-previous" onClick={instance.previousStep}>Previous Step</button>
                        {(step.activeStep != instance?.totalSteps) && <button className="button h-button is-primary is-bold is-elevated wizard-button-next" disabled={(user === null)} onClick={instance.nextStep}>Next Step</button>}
                        {(step.activeStep == instance?.totalSteps) && <button className="button h-button is-primary is-bold is-elevated wizard-button-next" onClick={create}>Finish</button>}
                    </div>
                </div>
            </>
        );
    }

    const Properties = (props: any) => {
        const [propriety, setPropriety] = useState(props.property);
        const [val, setVal] = useState(props.value);
        useEffect(() => {
            props.onChangeValue(props.id, propriety, val);
        }, [val]);
        useEffect(() => {
            props.onChangeValue(props.id, propriety, val);
        }, [propriety]);

        return (
            <>
                <div className="columns is-multiline">
                    <div className="column is-5">
                        <div className="field">
                            <label>Name</label>
                            <div className="control">
                                <input type="text" className="form-control form-control-sm" placeholder="" value={propriety} onChange={(e: any) => { setPropriety(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="field">
                            <label>Value</label>
                            <div className="control">
                                <input type="text" className=" form-control form-control-sm" placeholder="" value={val} onChange={(e: any) => { setVal(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-2 mt-3">
                        <button className="button is-circle is-dark-outlined" onClick={(e: any) => {
                            props.onExcludeValue(props.id);
                        }}>
                            <span className="icon is-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </>
        );
    }

    const Stats = (props: any) => {
        const [propriety1, setPropriety1] = useState(props.property);
        const [val1, setVal1] = useState(props.from);
        const [toVal, setToVal] = useState(props.to);
        useEffect(() => {
            props.onChangeValue(props.id, propriety1, val1, toVal);
        }, [val1]);
        useEffect(() => {
            props.onChangeValue(props.id, propriety1, val1, toVal);
        }, [propriety1]);
        useEffect(() => {
            props.onChangeValue(props.id, propriety1, val1, toVal);
        }, [toVal]);

        return (
            <>
                <div className="columns is-multiline">
                    <div className="column is-4">
                        <div className="field">
                            <label>Name</label>
                            <div className="control">
                                <input type="text" className="form-control form-control-sm" placeholder="" value={propriety1} onChange={(e: any) => { setPropriety1(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className="field">
                            <label>From</label>
                            <div className="control">
                                <input type="text" className="form-control form-control-sm" onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} placeholder="" value={val1} onChange={(e: any) => { setVal1(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className="field">
                            <label>To</label>
                            <div className="control">
                                <input type="text" className="form-control form-control-sm" onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} pattern="[0-9]*" placeholder="" value={toVal} onChange={(e: any) => { setToVal(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-2 mt-3">
                        <button className="button is-circle is-dark-outlined mt-3" onClick={(e: any) => {
                            props.onExcludeValue(props.id);
                        }}>
                            <span className="icon is-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </>
        );
    }

    const Levels = (props: any) => {
        const [propriety2, setPropriety2] = useState(props.property);
        const [val2, setVal2] = useState(props.value);
        useEffect(() => {
            props.onChangeValue(props.id, propriety2, val2);
        }, [val2]);
        useEffect(() => {
            props.onChangeValue(props.id, propriety2, val2);
        }, [propriety2]);

        return (
            <>
                <div className="columns is-multiline">
                    <div className="column is-5">
                        <div className="field">
                            <label>Name</label>
                            <div className="control">
                                <input type="text" className="form-control form-control-sm" placeholder="" value={propriety2} onChange={(e: any) => { setPropriety2(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="field">
                            <label>Value</label>
                            <div className="control">
                                <input type="text" className="form-control form-control-sm" pattern="[0-9]*" placeholder="" value={val2} onChange={(e: any) => { setVal2(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-2 mt-3">
                        <button className="button is-circle is-dark-outlined mt-3" onClick={(e: any) => {
                            props.onExcludeValue(props.id);
                        }}>
                            <span className="icon is-small">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </>
        );
    }

    const onStepChange = (stats: any) => {
        setStep(stats);

        setTimeout(() => {
            window.initAnimatedCheckboxes()
        }, 100);
    };

    const simulateMint = async () => {
        setSimulationData([])
    }

    const handleName = (e: any) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleSupply = (e: any) => {
        console.log(e.target.value);
        setSupply(e.target.value)
    }

    const handleAmount = (e: any) => {
        console.log(e.target.value);
        setAmount(e.target.value)
    }

    const create = async (e: any) => {
        if (name == "" || description == "" || supply == "" || amount == "" || uploadedFiles.length == 0 || category == null) {
            setFormAlert(true)
            return false;
        }
        await Candy.create({
            title: name,
            website: externalLink,
            description: description,
            supply: supply,
            amount: amount,
            properties: properties,
            files: uploadedFiles,
            explicit: explicit,
            public_chat: publicChat,
            community: community,
            hashtags: hashtags,
            stats: stats,
            levels: levels,
            category_id: category
        }).then((response: any) => {
            if (response.success) {
                navigate("/manage/" + response.candy);
            }
        });
        return true;
    }

    const upload = async (e: any) => {
        let f: any = [...files];
        let upFiles: any = e.target.files;
        let upFilesResponse: any = uploadedFiles;
        let error = false;
        for (let i = 0; i < upFiles.length; i++) {
            let fileFinal;
            if (upFiles[i].type.split('/')[0] == 'image') {
                fileFinal = await getBase64(upFiles[i]).then((f: any) => { return f; });
            }
            if (upFiles[i].type.split('/')[0] == 'video') {
                fileFinal = process.env.PUBLIC_URL + '/assets/img/icons/video_play.png';
            }
            if (Math.round((upFiles[i].size / 1048576)) < 100) {
                f[f.length] = { file: upFiles[i], base64: fileFinal, sent: 0 };
            } else {
                error = true;
            }
            await Candy.upload(f.length - 1, upFiles[i]).then((response: any) => {
                if (response.success == true) {
                    f[response.id].sent = 1;
                    upFilesResponse[upFilesResponse.length] = response.token;
                } else {
                    f[response.id].sent = 2;
                }
            });
        }
        setUploadedFiles(upFilesResponse);
        setFiles([...f]);
        if (error == true) {
            window.notyf.error("Some of your files has size higher than 100MB.");
        }
    };

    function getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }



    return (
        <>
            <div className="view-wrapper is-webapp" data-page-title="Dashboard" data-naver-offset="150" data-menu-item="#dashboards-navbar-menu" data-mobile-item="#home-sidebar-menu-mobile">

                <div className="page-content-wrapper pt-2">
                    <div className="page-content is-relative">
                        <progress
                            id="wizard-progress"
                            className="progress is-smaller is-primary wizard-progress"
                            value={loadingBar}
                            max={100}
                        />
                        <StepWizard instance={setInstance} onStepChange={onStepChange}>
                            <div className="form-layout">
                                <div className="form-outer">
                                    <div className="form-header stuck-footer">
                                        <div className="form-header-inner">
                                            <div className="left">
                                                <h3><i className="lnil lnil-candy"></i> Create Candy</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {user === null &&
                                            <div className='alert alert-warning'>You are not signed. Please, sign in to create your candy.</div>
                                        }
                                        {/*Fieldset*/}
                                        <div className="form-fieldset">
                                            <div className="fieldset-heading">
                                                <h4>Create your NFT</h4>
                                                <li className='mt-1'>Creating a NFT on CandySwap is a unique experience. Mint your arts, game itens, assets, private content, music, business, create a community, sell your tickets and much more!</li>
                                                <li className='mt-1'>Our business rules are based on liquidity pool and stake. </li>
                                                <li className='mt-1'>For your project start working you need to mine some amount of liquidity.</li>
                                                <li className='mt-1'>Don't share any kind of copyrighted content unless you are the owner.</li>
                                                <li className='mt-1'>Fees:</li>
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
                                                            <th scope="row">{">1000, <10000"}</th>
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
                            <div className="form-layout">
                                <div className="form-outer">
                                    <div className="form-header stuck-footer">
                                        <div className="form-header-inner">
                                            <div className="left">
                                                <h3><i className="lnil lnil-candy"></i> Create Candy</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="form-fieldset">
                                            <div className="columns is-multiline">
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Select Category</h4>
                                                            <div className="columns is-multiline mt-5">
                                                                {categories.length > 0 && categories.map((cat: any, i: any) =>
                                                                    <div className="column is-12">
                                                                        <div className="media-flex-center">
                                                                            <i style={{ fontSize: '30px' }} className={cat.icon}></i>
                                                                            <div className="flex-meta ml-5">
                                                                                <span>{cat.title}</span>
                                                                                <p>{cat.description}</p>
                                                                            </div>
                                                                            <div className="flex-end">
                                                                                <div className="control">
                                                                                    <label className="form-switch is-primary">
                                                                                        <input type="checkbox" checked={(cat.id == category)} className="is-switch" value={cat.id} onChange={(e: any) => {
                                                                                            if (e.target.checked) {
                                                                                                setCategory(e.target.value)
                                                                                            } else {
                                                                                                setCategory(null);
                                                                                            }
                                                                                        }} />
                                                                                        <i></i>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <hr />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-layout">
                                <div className="form-outer">
                                    <div className="form-header stuck-footer">
                                        <div className="form-header-inner">
                                            <div className="left">
                                                <h3><i className="lnil lnil-candy"></i> Create Candy</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="form-fieldset">
                                            <div className="fieldset-heading">
                                                <h4>teste</h4>
                                                <p>teste</p>
                                            </div>
                                            <div className="columns is-multiline">
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Candy Title</h4>
                                                            <div className="control">
                                                                <input type="text" className="input" onChange={handleName} placeholder={'Provide a title'} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>teste</h4>
                                                            <p>Provide a link of your website with your item details.</p>
                                                            <div className="control">
                                                                <input type="text" className="input" placeholder="http://mysite.com/item/123" onChange={(e: any) => { setExternalLink(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Tags</h4>
                                                            <p>Provide tags separated by space for better search results.</p>
                                                            <div className="control">
                                                                <div className="input-group mb-3">
                                                                    <input type="text" className="input" placeholder="Ex: tecnology programming develop javascript" onChange={(e: any) => { setHashtags(e.target.value) }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Description</h4>
                                                            <p>Describe your candy project in 500 words.</p>
                                                            <div className="control">
                                                                <textarea className="textarea" rows={5} placeholder="Tell us about any details you'd like us to know..." onChange={(e: any) => { setDescription(e.target.value) }}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-layout">
                                <div className="form-outer">
                                    <div className="form-header stuck-footer">
                                        <div className="form-header-inner">
                                            <div className="left">
                                                <h3><i className="lnil lnil-candy" ></i> Configs</h3>
                                            </div>
                                            <div className="right">
                                                <div className="buttons">
                                                    <button
                                                        onClick={instance.previousStep}
                                                        className="button h-button is-light is-dark-outlined"
                                                    >
                                                        <span className="icon">
                                                            <i className="lnir lnir-arrow-left rem-100" />
                                                        </span>
                                                        <span>Back</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        <div className="form-fieldset">
                                            <div className="fieldset-heading">
                                                <h4>Project Config</h4>
                                                <p>Select project configurations.</p>
                                            </div>
                                            <div className="dashboard-card is-side">
                                                <div className="media-flex-center">
                                                    <span className="icon is-small">
                                                        <i className='lnir lnir-font' style={{ fontSize: '20px' }}></i>
                                                    </span>
                                                    <div className="flex-meta">
                                                        <span>Properties</span>
                                                        <p>Set textual properties.</p>
                                                    </div>
                                                    <div className="flex-end">
                                                        <button className="button is-circle is-dark-outlined" onClick={(e: any) => {
                                                            e.preventDefault()
                                                            setProperties([...properties, { property: "", value: "" }])
                                                        }}>
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
                                                                    className="feather feather-plus"
                                                                >
                                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {properties.length > 0 && properties.map((val: any, i: any) =>
                                                    <Properties id={i} property={val.property} value={val.value}
                                                        onChangeValue={(id: any, p: any, v: any) => {
                                                            let pArray = properties;
                                                            pArray[id] = { property: p, value: v };
                                                            console.log(pArray)
                                                            setProperties(pArray);
                                                        }}
                                                        onExcludeValue={(id: any) => {
                                                            var pArray: any = [];
                                                            properties.map((val: any, index: any) => {
                                                                if (index != id) {
                                                                    pArray[pArray.length] = val;
                                                                }
                                                            });
                                                            setProperties(pArray);
                                                        }} />
                                                )}
                                                <div className="media-flex-center">
                                                    <span className="icon is-small">
                                                        <i className='lnir lnir-rook' style={{ fontSize: '20px' }}></i>
                                                    </span>
                                                    <div className="flex-meta">
                                                        <span>Stats</span>
                                                        <p>Set numerical progress stats properties.</p>
                                                    </div>
                                                    <div className="flex-end">
                                                        <button className="button is-circle is-dark-outlined" onClick={(e: any) => {
                                                            e.preventDefault()
                                                            setStats([...stats, { property: "", from: "", to: "" }])
                                                        }}>
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
                                                                    className="feather feather-plus"
                                                                >
                                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {stats.length > 0 && stats.map((val: any, i: any) =>
                                                    <Stats id={i} property={val.property} to={val.to} from={val.from}
                                                        onChangeValue={(id: any, p: any, v: any, t: any) => {
                                                            let pArray = stats;
                                                            pArray[id] = { property: p, from: v, to: t };
                                                            setStats(pArray);
                                                        }}
                                                        onExcludeValue={(id: any) => {
                                                            var pArray: any = [];
                                                            stats.map((val: any, index: any) => {
                                                                if (index != id) {
                                                                    pArray[pArray.length] = val;
                                                                }
                                                            });
                                                            setStats(pArray);
                                                        }} />
                                                )}
                                                <div className="media-flex-center">
                                                    <span className="icon is-small">
                                                        <i className='lnir lnir-game' style={{ fontSize: '20px' }}></i>
                                                    </span>
                                                    <div className="flex-meta">
                                                        <span>Levels</span>
                                                        <p>Set numerical level properties.</p>
                                                    </div>
                                                    <div className="flex-end">
                                                        <button className="button is-circle is-dark-outlined" onClick={(e: any) => {
                                                            e.preventDefault()
                                                            setLevels([...levels, { property: "", value: "" }])
                                                        }}>
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
                                                                    className="feather feather-plus"
                                                                >
                                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                {levels.length > 0 && levels.map((val: any, i: any) =>
                                                    <Levels id={i} property={val.property} value={val.value}
                                                        onChangeValue={(id: any, p: any, v: any) => {
                                                            let pArray = levels;
                                                            pArray[id] = { property: p, value: v };
                                                            setLevels(pArray);
                                                        }}
                                                        onExcludeValue={(id: any) => {
                                                            var pArray: any = [];
                                                            levels.map((val: any, index: any) => {
                                                                if (index != id) {
                                                                    pArray[pArray.length] = val;
                                                                }
                                                            });
                                                            setLevels(pArray);
                                                        }} />
                                                )}
                                            </div>
                                        </div>
                                        {/*Fieldset*/}
                                    </div>
                                </div>
                            </div>
                            <div className="form-layout">
                                <div className="form-outer">
                                    <div className="form-header stuck-footer">
                                        <div className="form-header-inner">
                                            <div className="left">
                                                <h3><i className="lnil lnil-candy"></i> Supply Simulation</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="form-fieldset">
                                            <div className="columns is-multiline">
                                                <div className="column is-5">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>{process.env.REACT_APP_CHAIN_CURRENCY} Reserve</h4>
                                                            <p>Provide {process.env.REACT_APP_CHAIN_CURRENCY} to create liquidity.</p>
                                                            <div className="control">
                                                                <div className="input-group mb-3">
                                                                    <input type="text" className="form-control" onKeyPress={(event) => {
                                                                        if (!/[0-9]/.test(event.key)) {
                                                                            event.preventDefault();
                                                                        }
                                                                    }} onChange={handleAmount} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-5">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Supply</h4>
                                                            <p>Set supply amount.</p>
                                                            <div className="control">
                                                                <div className="input-group mb-3">
                                                                    <input type="text" className="form-control" onKeyPress={(event) => {
                                                                        if (!/[0-9]/.test(event.key)) {
                                                                            event.preventDefault();
                                                                        }
                                                                    }} onChange={handleSupply} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-2 mt-5">
                                                    <button className='button h-button is-primary is-bold mt-3' onClick={simulateMint}>Simulate</button>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="column is-6">
                                                    <div className="fieldset-heading">
                                                        <h4>{process.env.REACT_APP_CHAIN_CURRENCY} Reserve</h4>
                                                        <span>{simulationData?.finalPrice || 0}</span>
                                                    </div>
                                                </div>
                                                <div className="column is-6">
                                                    <div className="fieldset-heading">
                                                        <h4>Approx. Minter Fees</h4>
                                                        <span>{simulationData?.tax || 0}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="column is-12">
                                                <div id="simulation-graphic">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-layout">
                                <div className="form-outer">
                                    <div className="form-header stuck-footer">
                                        <div className="form-header-inner">
                                            <div className="left">
                                                <h3><i className="lnil lnil-candy"></i> Public Files</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="form-fieldset">
                                            <div className="fieldset-heading">
                                                <h4>Provide Public Files</h4>
                                                <p>Upload images and videos for everyone know what your project is about. Maximum size is 100MB.</p>
                                                <div className="control">
                                                    <div className="file is-boxed">
                                                        <label className="file-label">
                                                            <input className="file-input" type="file" name="resume" onChange={upload} multiple accept="image/*,video/*" />
                                                            <span className="file-cta">
                                                                <span className="file-icon">
                                                                    <i className="lnil lnil-32 lnil-cloud-upload"></i>
                                                                </span>
                                                                <span className="file-label">
                                                                    Choose a file…
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="inner-list mt-2">
                                                        {files.length > 0 && files.map((val: any, i: any) =>
                                                            <div className="inner-list-item media-flex-center">
                                                                <div className="h-avatar">
                                                                    <img className="avatar" src={val.base64} alt="" data-user-popover="27" />
                                                                </div>
                                                                <div className="flex-meta is-light">
                                                                    <a href="#">{val.file.name}</a>
                                                                    <span>{val.file.type} - {Math.round((val.file.size / 1048576))} MB</span>
                                                                </div>
                                                                <div className="flex-end">
                                                                    {val.sent == 0 && <span className="tag is-rounded">Pending</span>}
                                                                    {val.sent == 1 && <span className="tag is-success is-rounded">Sent</span>}
                                                                    {val.sent == 2 && <span className="tag is-danger is-rounded">Try again</span>}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StepWizard>
                        {(instance) && <InstanceDemo instance={instance} />}
                        <ToastContainer className="p-3 position-fixed" position={'bottom-end'}>
                            <Toast
                                className="d-inline-block m-1"
                                delay={3000} autohide
                                onClose={() => setFormAlert(false)}
                                show={formAlert}
                            >
                                <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">Attention!</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    Please fill all required inputs.
                                </Toast.Body>
                            </Toast>
                        </ToastContainer>
                    </div>
                </div>
            </div>
        </>

    )
        ;
}