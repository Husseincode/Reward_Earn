import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import 'firebase/auth'
import Navigate from './RewardEarn/PageNavigation/Navigate';
// import HistoryDashboardTrack from './RewardEarn/AdditionalWebPages/History_Dashboard_Track';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Navigate/>);