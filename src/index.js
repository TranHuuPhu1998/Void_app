import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from './context/context'
import {SpeechProvider} from '@speechly/react-client'
import App from './App';

ReactDOM.render(
    <SpeechProvider addId='09122852-a001-4b57-b75f-09b369c62b20' language="en-US">
        <Provider>
            <App/> 
        </Provider>
    </SpeechProvider>, 
document.getElementById('root'));


