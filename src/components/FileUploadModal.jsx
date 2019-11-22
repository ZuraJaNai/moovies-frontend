import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const FileUploadModal = ({ show, handleClose, handleUpload, error, errorText }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="file"
                    id="targetFile"
                    onChange={handleUpload}
                />
                {error ?
                    <div style={{ color: "red" }}>{errorText}</div> : null}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FileUploadModal;