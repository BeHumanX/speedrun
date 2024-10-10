import './bootstrap';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

if(document.getElementById('admin-main')){
    ReactDOM.createRoot(document.getElementById('admin-main')).render(
        <React.StrictMode>
            <AdminDashboard />
        </React.StrictMode>
    )
}else if(document.getElementById('staff-main')){
    ReactDOM.createRoot(document.getElementById('staff-main')).render(
        <React.StrictMode>
            <StaffDashboard  />
        </React.StrictMode>
    )
}else if(document.getElementById('main')){
    ReactDOM.createRoot(document.getElementById('main')).render(
        <React.StrictMode>
            <Dashboard  />
        </React.StrictMode>
    )
}