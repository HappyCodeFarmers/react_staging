import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 全局化配置，主题颜色为绿色
    <ConfigProvider theme={{
        token: {
            colorPrimary: '#00b96b',
        },
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ConfigProvider>
);
