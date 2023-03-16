import { Modal, Button } from 'react-bootstrap';
import Loading from '../../utils/Loading'
import React, { useEffect, useState } from 'react';
import Auth from "../../services/Auth";
import classNames from "classnames";
function ModalSign(props: any) {
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("https://www.ucae.es/wp-content/uploads/2021/03/avatar-placeholder.png");
    const [disableButton, setDisableButton] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const save = async (aba: any) => {
        setDisableButton(true);
        Auth.firstLogin({
            username,
            image
        }).then((response: any) => {
            if(response?.errors?.username){
                setUsernameError(true);
            }
            if(response?.success == true){
                props.onClose(true);
            }
        })
    }

    const handleFileRead = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result == "string") {
                setImage(reader.result)
            }
            //  console.log(reader.result);
        };
    }

    return (
        <Modal
            size={"sm"}
            show={true}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign Up
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 className='title is-thin is-5 mb-1'>Welcome friend, &#128525;</h3>
                <p className='mt-0'>We've detected you are not in our database. Please complete your profile.</p>
                <div className="modal-form mt-2">
                    <div className='d-flex justify-content-center mb-3'>
                        <div className="h-avatar is-large">
                            <img className="avatar" src={image} data-demo-src={image} alt="" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="file justify-content-center">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" onChange={handleFileRead} />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i aria-hidden="true" className="fas fa-cloud-upload-alt" />
                                    </span>
                                    <span className="file-label">Choose a file…</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <label>Username</label>
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
            </Modal.Body>
            <Modal.Footer className="is-centered">
                <button className={classNames({
                    "button h-button is-primary is-raised is-rounded": true,
                    "disabled": disableButton,
                })} onClick={save}>Confirm</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalSign;