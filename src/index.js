import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';
import slidesData from "./slidesData"

ReactDOM.render(<App slides={slidesData} />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
    defineCustomElements(window);
})
