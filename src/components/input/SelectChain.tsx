import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import auth from '../../services/Auth';
import classnames from 'classnames';
import Chain from '../../services/Chain';

const SelectCategory = (props: any) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([] as any);
    const [chains, setChains] = useState([] as any);

    useEffect(() => {
        getChains()
    }, []);

    useEffect(() => {
        if(selected.length > 0){
            props.onSelect(selected);
        }
    }, [selected]);

    const getChains = () => {
        Chain.list().then(async (response: any) => {
            setChains(response.chains);
        });
    }

    const concernedElement: any = document.querySelector("#combo-chains");
    document.addEventListener("mousedown", (event: any) => {
        if (open == true && concernedElement !== null && !concernedElement.contains(event.target)) {
            setOpen(false)
        }
    });

    const selectCombo = (value: any) => {
        if (checkSelected(value.id) === true) {
            setSelected((sel : any) =>
                sel.filter((employee : any) => {
                  return employee.id !== value.id;
                }),
              );
        } else {
            setSelected([...selected, value]);
        }
    }

    const checkSelected = (id: any) => {
        let val = false;
        selected.filter((element: any) => {
            if (element.id === id) {
                val = true;
            }
        });
        return val;
    }


    return (
        <>
            <div className="control is-combo" id="combo-chains" onClick={(e: any) => { setOpen(!open) }}>
                <div className={classnames({
                    "stacked-combo-box has-rounded-images": true,
                    'is-active': open
                })}>
                    <div className="box-inner">
                        <div className="combo-item">
                            {selected.length == 0 &&
                                <div className="combo-item">
                                    <>
                                        <span className="selected-item">
                                            All Chains
                                        </span>
                                    </>
                                </div>
                            }
                            {selected.length > 0 && selected.map((sel: any, i: any) =>
                                <span className="selected-item">
                                    <span className="item-icon">
                                        <img
                                            src={sel?.image}
                                            data-demo-src={sel?.image}
                                            alt=""
                                        />
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="box-chevron">
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
                            className="feather feather-chevron-down"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                    <div className="box-dropdown">
                        <div className="dropdown-inner has-slimscroll">
                            <ul>
                                <li className={classnames({
                                    'is-active': true
                                })}
                                    onClick={(e: any) => {
                                        setSelected([]);
                                        props.onSelect([]);
                                    }}
                                >
                                    <span className="item-name">All Chains</span>
                                </li>
                                {chains.length > 0 && chains.map((chain: any, i: any) =>
                                    <>
                                        <li className={classnames({
                                            'is-active': true
                                        })}
                                            onClick={(e: any) => {
                                                selectCombo(chain);
                                            }}
                                        >
                                            <span className="item-icon">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/' + chain.image}
                                                    alt=""
                                                />
                                            </span>
                                            <span className="item-name">{chain.name}</span>
                                            {checkSelected(chain.id) == true &&
                                                <span className="checkmark">
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
                                            }
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectCategory;