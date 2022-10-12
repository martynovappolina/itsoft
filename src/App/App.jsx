import Header from '../components/header/Header';
import MainPage from '../pages/mainPage/MainPage';
import appStyle from './App.module.scss';
import wave_1 from '../style/icons/wave_1.svg';
import wave_2 from '../style/icons/wave_2.svg';
import wave_3 from '../style/icons/wave_3.svg';
import RunningLine from '../components/runningLine/runningLine';
import ComplexAction from '../pages/complexAction/complexAction';
import AboutProduction from '../pages/aboutProduction/AboutProduction';

function App() {
  return (
    <div className={appStyle.App}>
      <Header />
      <img className={appStyle.App__wave1} src={wave_1} alt='волна' />
      <MainPage />
      <RunningLine />
      <ComplexAction />
      {/* <img className={appStyle.App__wave2} src={wave_2} alt='еще волна' /> */}
      <AboutProduction />
      <img className={appStyle.App__wave3} src={wave_3} alt='еще волна' />
    </div>
  );
}

export default App;
