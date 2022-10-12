import headerStyle from './header.module.scss'
import appStyle from '../../App/App.module.scss'
import V from '../../style/icons/В.svg'
import E from '../../style/icons/Е.svg'
import N from '../../style/icons/Н.svg'
import A from '../../style/icons/А.svg'
import R from '../../style/icons/Р.svg'
import U from '../../style/icons/У.svg'
import S from '../../style/icons/С.svg'
import tradeMark from '../../style/icons/R.svg'
import searchIcon from '../../style/icons/search.svg'
import locationIcon from '../../style/icons/location.svg'
import menuIcon from '../../style/icons/menu.svg'

const Header = () => {
    return (
        <div className={headerStyle.header}>
            <div className={headerStyle.header__title}>
                <img src={V} alt='В' />
                <img src={E} alt='Е' />
                <img src={N} alt='Н' />
                <img src={A} alt='А' />
                <img src={R} alt='Р' />
                <img src={U} alt='У' />
                <img src={S} alt='С' />
                <img className={headerStyle.header__tradeMark} src={tradeMark} alt='Знак правовой охраны товарного знака' />
            </div>
            <div className={headerStyle.header__icon__container}>
                <img className={appStyle.button} src={searchIcon} alt='Поиск' />
                <img className={appStyle.button} src={locationIcon} alt='Адрес' />
                <img className={appStyle.button} src={menuIcon} alt='МЕню' />
            </div>
        </div>
    )
};

export default Header;