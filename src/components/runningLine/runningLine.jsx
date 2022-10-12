import runningLineStyle from './runningLine.module.scss'

const RunningLine = () => {
    let text = '';

    const fillText = () => {
        for(var i=0; i<100; i++) {
            text += 'получить скидку 10% >>>';
        }
    }
    fillText();

    return (
        <div className={runningLineStyle.line}>
            <div className={runningLineStyle.line__text}>{text}</div>
        </div>
    )
};

export default RunningLine;