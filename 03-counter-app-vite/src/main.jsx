import React from 'react';
import reactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp'


reactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp/>
    </React.StrictMode>
);