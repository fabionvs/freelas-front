import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import auth from '../../services/Auth';
import classnames from 'classnames';
import Category from '../../services/Category';

const SelectCombo = (props: any) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState({} as any);
    const [categories, setCategories] = useState([] as any);

    useEffect(() => {
        getCategories()
    }, []);

    useEffect(() => {
        if(selected?.id !== undefined){
            props.onSelect(selected);
        }
    }, [selected]);

    const getCategories = () => {
        Category.getCategories().then(async (response: any) => {
            setCategories(response.categories);
        });
    }

    const concernedElement: any = document.querySelector("#category-chains");
    document.addEventListener("mousedown", (event: any) => {
        if (open == true && concernedElement !== null && !concernedElement.contains(event.target)) {
            setOpen(false)
        }
    });

    const selectCombo = (value: any) => {
        setSelected(value);
    }

    return (
        <>
            <div className="control is-combo" id="category-chains" onClick={(e: any) => { setOpen(!open) }}>
                <div className={classnames({
                    "stacked-combo-box has-rounded-images": true,
                    'is-active': open
                })}>
                    <div className="box-inner">
                        {selected?.id === undefined &&
                            <div className="combo-item">
                                <>
                                    <span className="selected-item">
                                        All Categories
                                    </span>
                                </>
                            </div>
                        }
                        {selected?.id !== undefined &&
                            <div className="combo-item">
                                <>
                                    <span className="selected-item">
                                        <span className="item-icon">
                                            <i className={selected.icon} />
                                        </span>
                                    </span>
                                    <span className="selected-item">
                                        {selected.title}
                                    </span>
                                </>
                            </div>
                        }
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
                                        selectCombo({});
                                        props.onSelect({});
                                    }}
                                >
                                    <span className="item-name">All Categories</span>
                                </li>
                                {categories.length > 0 && categories.map((cat: any, i: any) =>
                                    <>
                                        <li className={classnames({
                                            'is-active': true
                                        })}
                                            onClick={(e: any) => {
                                                selectCombo(cat);
                                            }}
                                        >
                                            <span className="item-icon">
                                                <i className={cat.icon}
                                                />
                                            </span>
                                            <span className="item-name">{cat.title}</span>
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

export default SelectCombo;