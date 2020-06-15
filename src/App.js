import React from 'react';
import { useSelector } from 'react-redux';
import { defaults }  from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Neucha'


function App() {
    const state = useSelector(state => state)
    console.log(state);
    return (
        <div>
        	{"Paresh"}
        </div>
    );
}

export default App;
