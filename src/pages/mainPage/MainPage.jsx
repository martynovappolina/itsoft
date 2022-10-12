import mainPageStyle from './mainPage.module.scss'
import appStyle from '../../App/App.module.scss'
import playIcon from '../../style/icons/play.svg'
import locationIcon from '../../style/icons/thin_location.svg'
import downloadIcon from '../../style/icons/download.svg'
import leftButton from '../../style/icons/left_button.svg'
import rightButton from '../../style/icons/right_button.svg'

const MainPage = () => {
    return(
        <div className={mainPageStyle.main}>
            <div className={mainPageStyle.main__first__container}>
                <div className={mainPageStyle.main__first__title}>
                    НАДЕЖНЫЙ ПОМОЩНИК В ЛЕЧЕНИИ ВАРИКОЗА
                </div>
                <div className={mainPageStyle.main__first__icons__container}>
                    <div className={mainPageStyle.main__first__icons__block}>
                        <img className={appStyle.button} src={playIcon} alt='воспроизведение' />
                        <div className={mainPageStyle.main__first__icons__text}>
                            Схема приема
                        </div>
                    </div>
                    <div className={mainPageStyle.main__first__icons__block}>
                        <img className={appStyle.button} src={downloadIcon} alt='иконка загрузки' />
                        <div className={mainPageStyle.main__first__icons__text}>
                            Инструкция
                        </div>
                    </div>
                    <div className={mainPageStyle.main__first__icons__block}>
                        <img className={appStyle.button} src={locationIcon} alt='адрес' />
                        <div className={mainPageStyle.main__first__icons__text}>
                            Где купить
                        </div>
                    </div>
                </div>
            </div>

            <div className={mainPageStyle.main__second__img1} />
            <div className={mainPageStyle.main__second__img2} />
            <div className={mainPageStyle.main__second__img3} />
            
            <div className={mainPageStyle.main__second__container}>

                <div className={mainPageStyle.main__second__button__container}>
                    <img className={appStyle.button} src={leftButton} alt='Перелистывание влево' />
                    <img className={appStyle.button} src={rightButton} alt='Перелистывание вправо' />
                </div>
                <div className={mainPageStyle.main__second__button}>
                    <div className={mainPageStyle.main__second__button__text}>Где купить ></div>
                </div>
            </div>
        </div>
    )
};

export default MainPage;