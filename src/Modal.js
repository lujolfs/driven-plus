import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const Modal = (showModal, setShowModal) => {
    return (
        <>
            {showModal ? <div>MODAL</div> : null}
        </>
    )
}