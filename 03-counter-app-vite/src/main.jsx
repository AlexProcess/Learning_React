import React from 'react';
import reactDOM from 'react-dom/client';

function App () {
    //Document.createElement...
    return (<h1>Hola mundo!!!</h1>)
}


reactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);