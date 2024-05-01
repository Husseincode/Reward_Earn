import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'firebase/auth'
import App from './RewardApp/Navigation/App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
// root.render(<SignupPage brand={'Earn Reward'}/>)