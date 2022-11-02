import * as React from "react";
import { useState } from "react";
// import "./Modal.css";

interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    applied: (name: string) => void
}

const Modal = (props: ModalProps) => {
    const { setModalOpen, applied } = props;
    const [appName, setAppName] = useState<string>('');

    const handleOnChange = (event: any) => {
        const name: string = event.target;
        setAppName(name);
    }

    const handleOnSubmit = () => {
        applied(appName);
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setModalOpen(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <form onSubmit={handleOnSubmit} className="form">
                    <label>
                        Application Name:
                        <input type="text" name="appName" value={appName} onChange={handleOnChange} />
                    </label>
                </form>
                <div className="footer">
                    <button
                        onClick={() => {
                            setModalOpen(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
