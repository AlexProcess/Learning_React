import React from 'react';
import reactDOM from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp'


reactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp/>
    </React.StrictMode>
);