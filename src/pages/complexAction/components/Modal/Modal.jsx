import modalStyle from './modal.module.scss';
import closeIcon from '../../../../style/icons/close.svg';
import { useCallback } from 'react';

const Modal = ({active, setActive}) => {
    const handleClick = useCallback (() => {
        setActive(false)
    }, [])

    if (active)
        return(
            <div className={modalStyle.modal}>
                <div className={modalStyle.modal__content}>
                    Чтобы закрыть окно, <br /> нажмите на кнопку)
                    <img onClick={handleClick} src={closeIcon} alt='закрыть' className={modalStyle.modal__button} />
                </div>
            </div>
        )
    return null;
};

export default Modal;