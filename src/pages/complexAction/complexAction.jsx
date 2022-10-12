import complexActionStyle from './complexAction.module.scss';
import Header from './components/Header/Header';
import circle from '../../style/icons/circle.svg';
import halfCircleRight from '../../style/icons/half_circle.svg';
import circle1 from '../../style/icons/circle_1.svg';
import circle2 from '../../style/icons/circle_2.svg';
import circle3 from '../../style/icons/circle_3.svg';
import halfCircleLeft from '../../style/icons/circle_4.svg';
import leftArrow from '../../style/icons/left_arrow.svg';
import rightArrow from '../../style/icons/right_arrow.svg';

const ComplexAction = () => {
    return(
        <div className={complexActionStyle.action}>
            <Header />
            <div className={complexActionStyle.action__main}>
                <div className={complexActionStyle.action__first}>
                    <div className={complexActionStyle.action__first__title}>
                    Комплексное действие
                    </div>
                    <div className={complexActionStyle.action__first__text}>
                    Венарус показан для терапии <br/>
                    симптомов хронических <br/>
                    заболеваний вен (устранения <br/>
                    и облегчения симптомов).  
                    </div>
                </div>
                <div className={complexActionStyle.action__second}>
                    <div className={complexActionStyle.action__second__element}>
                        <div className={complexActionStyle.action__second__text}>
                            Помогает <br/>предотвратить судороги
                        </div>
                        <div className={complexActionStyle.action__second__more} />
                    </div>
                    <div className={complexActionStyle.action__second__element}>
                        <div className={complexActionStyle.action__second__text}>
                            Способствует <br/>снижению тяжести <br/>в ногах
                        </div>
                        <div className={complexActionStyle.action__second__more} />
                    </div>
                    <div className={complexActionStyle.action__second__element}>
                        <div className={complexActionStyle.action__second__text}>
                            Способствует снижению <br/>болевых ощущений
                        </div>
                        <div className={complexActionStyle.action__second__more} />
                    </div>
                    <div className={complexActionStyle.action__second__element}>
                        <div className={complexActionStyle.action__second__text}>
                            Помогает <br/>уменьшить отеки
                        </div>
                        <div className={complexActionStyle.action__second__more} />
                    </div>
                    <div className={complexActionStyle.action__second__element}>
                        <div className={complexActionStyle.action__second__text}>
                            Оказывает <br/>ангиопротекторное <br/>и венотонизурующее <br/>действие
                        </div>
                        <div className={complexActionStyle.action__second__more} />
                    </div>
                </div>

                <img src={circle1} alt='круг)' className={complexActionStyle.action__circle__1} />
                <img src={circle2} alt='круг)' className={complexActionStyle.action__circle__2} />
                <div className={complexActionStyle.action__circle__3}> 
                    <div style={{'width': '49px', 'height': '49px', 
                    'display': 'flex', 'alignItems': 'center', "justifyContent": 'center',
                    'background': `url(${circle3}) no-repeat`}} > 
                        <img style={{'width': '10px', 'height': '10px'}} src={circle} alt='круг)' /> 
                    </div>
                </div>
                <div style={{
                    'display': 'flex', 'alignItems': 'center', "justifyContent": 'center',
                }} className={complexActionStyle.action__circle__4}>
                    <img src={halfCircleLeft} style={{'marginRight':'15px'}} alt='полукруг)' />
                    <img src={halfCircleRight} style={{'marginLeft':'15px'}} alt='полукруг)' />
                </div>
                <div style={{
                    'display': 'flex', 'alignItems': 'center', "justifyContent": 'center',
                }} className={complexActionStyle.action__circle__5}>
                    <img src={leftArrow} alt='стрелка влево' />
                    <img src={rightArrow} style={{'marginTop':'6px'}} alt='стрелка вправо' />
                </div>
            </div>
        </div>
    );
};

export default ComplexAction;