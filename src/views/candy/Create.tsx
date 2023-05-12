import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // import do hook
import StepWizard from "react-step-wizard";
import Candy from '../../services/Business';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Category from '../../services/Category';
import Auth from "../../services/Auth";
import classNames from "classnames";

export default function Create() {

    const [loadingBar, setLoadingBar] = useState(10);
    const [instance, updateInstance] = useState({} as any);
    const [step, setStep] = useState({} as any);
    const [formAlert, setFormAlert] = useState(false);
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
    const [uploadedFiles, setUploadedFiles] = useState([] as any);
    const [properties, setProperties] = useState([] as any);
    const [stats, setStats] = useState([] as any);
    const [levels, setLevels] = useState([] as any);
    const [user, setUser] = useState({} as any);
    const [usernameError, setUsernameError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

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
                        <button className="button h-button is-light is-bold wizard-button-previous" onClick={instance.previousStep}>Voltar</button>
                        {(step.activeStep != instance?.totalSteps && step.activeStep != 5) && <button className="button h-button is-primary is-bold is-elevated wizard-button-next" onClick={instance.nextStep}>Próximo Passo</button>}
                        {(step.activeStep == 5) && <button className="button h-button is-primary is-bold is-elevated wizard-button-next" disabled={(password !== repeatPassword || password.length < 6)} onClick={create}>Cadastrar Usuário</button>}
                        {(step.activeStep == instance?.totalSteps) && <button className="button h-button is-primary is-bold is-elevated wizard-button-next" onClick={instance.nextStep}>Finalizar Cadastro</button>}
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

    const onStepChange = (stats: any) => {
        setStep(stats);

        setTimeout(() => {
            window.initAnimatedCheckboxes()
        }, 100);
    };

    const handleName = (e: any) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const create = async (e: any) => {
        if (name == "" || description == "" || category == null) {
            setFormAlert(true)
            return false;
        }
        await Auth.create({
            title: name,
            website: externalLink,
            description: description,
            info_adicionais: properties,
            files: uploadedFiles,
            hashtags: hashtags,
            horarios: stats,
            category_id: category,
            username: username,
            password: password,
            email: email
        }).then((response: any) => {
            if (response.success) {
                instance.goToStep(6)

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
                                                <h3><i className="lnil lnil-restaurant"></i> Cadastre seu negócio</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="form-fieldset">
                                            <div className="fieldset-heading">
                                                <h4>Você sabe como funciona?</h4>
                                                <p className='pb-1'>O Freelas.com é uma plataforma online que permite que os usuários encontrem estabelecimentos de forma fácil e rápida, utilizando um mapa interativo. Com essa ferramenta, os usuários podem encontrar os estabelecimentos que estão próximos a eles e ver as informações importantes sobre cada um deles, como endereço, telefone, horário de funcionamento, avaliações de outros usuários, entre outros.</p>
                                                <p className='pb-1'>Além disso, os estabelecimentos cadastrados na plataforma podem oferecer suporte aos usuários, vendendo produtos e serviços diretamente na plataforma. Dessa forma, eles podem atingir públicos-alvo específicos e aumentar suas vendas.</p>
                                                <p className='pb-1'>Para usar a plataforma, é necessário criar uma conta gratuita e preencher um perfil com informações sobre seus interesses e localização. A partir daí, o usuário pode explorar o mapa interativo e encontrar os estabelecimentos que estão próximos a ele.</p>
                                                <p className='pb-1'>Os estabelecimentos podem se cadastrar na plataforma gratuitamente e oferecer seus produtos e serviços aos usuários. Eles podem criar seus perfis com informações detalhadas sobre seus serviços e produtos, além de adicionar fotos e vídeos para apresentar suas ofertas de forma mais atraente.</p>
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
                                                            <h4>Selecione a Categoria</h4>
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
                                                <h3><i className="lnil lnil-candy"></i> Cadastro de Novo Negócio</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="form-fieldset">
                                            <div className="fieldset-heading">
                                                <h4>Sobre o Negócio</h4>
                                                <p>Preencha o formulário com as informações precisas do seu negócio para ter maior visibilidade para alcançar novos clientes e novos horizontes.</p>
                                            </div>
                                            <div className="columns is-multiline">
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Nome da Empresa</h4>
                                                            <div className="control">
                                                                <input type="text" className="input" onChange={handleName} placeholder={'Provide a title'} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Website</h4>
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
                                                            <p>Digite as tags separadas por vírgula que melhor identificam seu negócio.</p>
                                                            <div className="control">
                                                                <div className="input-group mb-3">
                                                                    <input type="text" className="input" placeholder="Ex: arquitetura design interiores" onChange={(e: any) => { setHashtags(e.target.value) }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Descrição</h4>
                                                            <p>Escreva uma breve descrição sobre o seu negócio.</p>
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
                                                        <span>Informações Adicionais</span>
                                                        <p>Se tiver alguma informação que complemente, digite aqui. </p>
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
                                                        <i className='lnir lnir-alarm-clock-alt' style={{ fontSize: '20px' }}></i>
                                                    </span>
                                                    <div className="flex-meta">
                                                        <span>Horários</span>
                                                        <p>Digite o dia e os horários de funcionamento</p>
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
                                                <h3><i className="lnil lnil-candy"></i> Cadastro</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="form-fieldset p-5">
                                            <div className="fieldset-heading">
                                                <h4>Efetue seu Cadastro</h4>
                                                <p>Preencha suas informações de cadastro que irá ser o usuário dono do estabelecimento na plataforma.</p>
                                            </div>
                                            <div className="columns is-multiline">
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Username</h4>
                                                            <div className={classNames({
                                                                "control": true,
                                                                "has-validation has-error": usernameError,
                                                            })}>
                                                                <input type="text" className="input" placeholder="Type your username" onChange={(e: any) => { setUsername(e.target.value) }} />
                                                                <div className="validation-icon is-error">
                                                                    <i className='inil inil-close'></i>
                                                                </div>
                                                                {usernameError && <p className="help danger-text">Username already exist.</p>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Email</h4>
                                                            <div className="control">
                                                                <input type="text" className="input" onChange={(e: any) => { setEmail(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Senha</h4>
                                                            <div className="control">
                                                                <input type="password" className="input" onChange={(e: any) => { setPassword(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className="field">
                                                        <div className="fieldset-heading">
                                                            <h4>Confirmar Senha</h4>
                                                            <div className="control">
                                                                <input type="password" className="input" onChange={(e: any) => { setRepeatPassword(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-12">
                                                    <div className='alert alert-warning'>As senhas precisam ser iguais e conter tanto letras quanto números, além de ter pelo menos 6 caracteres.</div>
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
                                                <h4>Fotos, Imagens e Videos</h4>
                                                <p>Envie fotos, imagens e videos para mostrar em seu perfil. O tamanho máximo permitido é 100MB.</p>
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
                            <div className="form-layout">
                                <div className="form-outer">
                                    <div className="form-header stuck-footer">
                                        <div className="form-header-inner">
                                            <div className="left">
                                                <h3><i className="lnil lnil-restaurant"></i> Cadastro Realizado</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        {/*Fieldset*/}
                                        <div className="section-placeholder">
                                            <div className="placeholder-content">
                                                <img
                                                    src="https://huro.cssninja.io/assets/img/illustrations/placeholders/search-4.svg"
                                                    alt=""
                                                />
                                                <h3 className="dark-inverted">Parabéns, agora o seu negócio é Freelas.com</h3>
                                                <p>Aguarde para que seu perfil seja aprovado.</p>
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
                                    Selecione todos os campos obrigatórios.
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