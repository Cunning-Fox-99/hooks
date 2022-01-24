import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App =() => {
    return (
        <div>
            <HookSwitcher />
        </div>
    )
}

const  HookSwitcher = () => {

    // Первое это значение а второе функция что будет передавать значение
    const [ color, setColor ] = useState('white')
    const [fontSize, setFontSize] = useState(14)

    return (
        <div style={{padding: '10px', fontSize: `${fontSize}px`, backgroundColor: color}}>
            Hello world
            <button onClick={() => setColor('grey')}>Dark</button>
            <button onClick={() => setColor('white')}>Light</button>
            <button onClick={() => setFontSize((s) => s + 2)}>Size + 2</button>
        </div>
    )
}


ReactDOM.render(<App />,document.getElementById('root'));
