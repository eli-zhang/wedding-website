import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  Routes, Route, HashRouter,
  // BrowserRouter - Replace HashRouter
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RSVPPage from './pages/RSVPPage/RSVPPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import TravelPage from './pages/TravelPage/TravelPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';
import FAQPage from './pages/FAQPage/FAQPage';
import InvitationPage from './pages/InvitationPage/InvitationPage';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <HashRouter >
    <ScrollToTop />
    <Routes>
      <Route path="/">
        <Route index={true} element={<HomePage />} />
      </Route>
      <Route path="/rsvp" >
        <Route index={true} element={<RSVPPage />} />
      </Route>
      <Route path="/about-us" >
        <Route index={true} element={<AboutUsPage />} />
      </Route>
      <Route path="/schedule" >
        <Route index={true} element={<SchedulePage />} />
      </Route>
      <Route path="/travel" >
        <Route index={true} element={<TravelPage />} />
      </Route>
      <Route path="/activities" >
        <Route index={true} element={<ActivitiesPage />} />
      </Route>
      <Route path="/faq" >
        <Route index={true} element={<FAQPage />} />
      </Route>
      <Route path="/invitation" >
        <Route index={true} element={<InvitationPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  </HashRouter >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
