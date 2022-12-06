import React, {useState} from 'react';
import Clock from './components/Clock';

/*function Wellcome(props) {
    return <>
        <p>
            Привет,  {props.name}
        </p>
    </>;
}

function App() {
    const [value, setValue] = useState();
//value ? value.target.value : 
    return <>
        <Wellcome name={value ? value.target.value : ''}/>
        <input type={'text'} onChange={setValue}/>
    </>;

    //toLocateTimeString
}*/

function App() {
    // const timer = function() {
    //     // {new Date().toDateString()}
    //     // {new Date().toLocaleDateString()}
    //     return;
    // };

    return <>
        <Clock date={new Date()}/>
    </>;
}

export default App;