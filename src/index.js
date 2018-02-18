import React from 'react';
import ReactDOM from 'react-dom';
import p from 'periodic-table';
import registerServiceWorker from './registerServiceWorker';

console.log(p.numbers[1]);

ReactDOM.render(
    <h1 />, 
    document.getElementById('root')
);
registerServiceWorker();
