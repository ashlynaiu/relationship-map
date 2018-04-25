import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
