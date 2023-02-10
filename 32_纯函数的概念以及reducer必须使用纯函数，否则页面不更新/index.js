import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';

//Provider 会自动将收到的store精准的分配给所有需要的容器组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
