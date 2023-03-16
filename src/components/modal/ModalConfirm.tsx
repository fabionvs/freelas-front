import { Modal, Button } from 'react-bootstrap';
import Loading from '../../utils/Loading'
import React, { useEffect, useState } from 'react';
function ModalConfirm(props: any) {
    return (
        <Modal
            {...props}
            show={props.show}
            size={props.size || "md"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.keys(props.errors).length == 0 && props.text}
                {Object.keys(props.errors).length > 0 &&
                    <div className="alert alert-danger mt-2" role="alert">
                        <h4 className="alert-heading">Atenção!</h4>
                        <ul>
                            {Object.keys(props.errors).map((val: any) =>
                                <li className='mb-1'>{props.errors[val]}</li>
                            )}
                        </ul>
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-outline-danger' onClick={props.onCancel}>Cancelar</button>
                {props.onConfirm && Object.keys(props.errors).length == 0 && <button className='btn btn-success' onClick={props.onConfirm}>Confirmar</button>}
            </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirm;