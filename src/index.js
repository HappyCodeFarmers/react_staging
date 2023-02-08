import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 全局化配置，主题颜色为绿色
        <React.StrictMode>
            <App />
        </React.StrictMode>
);
