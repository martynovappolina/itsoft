import headerStyle from './header.module.scss';
import targetIcon from '../../../../style/icons/target.svg'
import sheetsIcon from '../../../../style/icons/sheets.svg'
import pillIcon from '../../../../style/icons/pill.svg'
import infoIcon from '../../../../style/icons/info.svg'
import Modal from '../Modal/Modal';
import { useCallback, useEffect, useState } from 'react';

const Header = () => {
    const [modalActive, setModalActive] = useState(false);

    const handleClick = useCallback(() => {
        setModalActive(true);
    }, [modalActive])

    return(
        <div className={headerStyle.header}>
            <div className={headerStyle.header__element}>
                <img src={targetIcon} alt='иконка' />
                <div className={headerStyle.header__text}>
                    Доказанная эффективность
                </div>
            </div>
            <div className={headerStyle.header__element}>
                <img src={sheetsIcon} alt='иконка' />
                <div className={headerStyle.header__text}>
                    Новая дозировка <br /> 100 мг + 900 мг
                </div>
            </div>
            <div className={headerStyle.header__element}>
                <img src={pillIcon} alt='иконка' />
                <div style={{'width':'263px'}} className={headerStyle.header__text}>
                    Удобный прием. <br /> Одна таблетка в сутки*
                    <img onClick={handleClick} id='info' className={headerStyle.header__info} src={infoIcon} alt='Информация'/>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
};

export default Header;