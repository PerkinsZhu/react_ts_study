import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/window/WindowCss.css'

import RegisterView from './cache/ZustandAPP'

import Window from './component/window/Window'

function App() {
    const cache = <RegisterView></RegisterView>
    const result = <Window name={'张三'} age={10}/>

    return (result);
}

export default App;
