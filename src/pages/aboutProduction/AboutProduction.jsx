import aboutProductionStyle from './aboutProduction.module.scss';
import Swiper from './components/swiper/swiper';

const AboutProduction = () => {
    return(
        <div className={aboutProductionStyle.about}>
            {/* <div className={aboutProductionStyle.about__title}>
                О производстве Венарус
            </div> */}
            <Swiper />
        </div>
    );
};

export default AboutProduction;