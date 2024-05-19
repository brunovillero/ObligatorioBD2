import React from 'react';
import { createRoot } from 'react-dom/client'

export default function App(){
    return(
        <div>Obligatorio bd2</div>
    );
}

if(document.getElementById('react-app')){
    createRoot(document.getElementById('react-app')).render(<App/>)
}