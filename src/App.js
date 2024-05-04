import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { NonprofitForm } from './NonprofitForm';
import { FoundationForm } from './FoundationForm';
import { ViewEmails } from './ViewEmails';
import { EmailForm } from './EmailForm';
import './App.css';
import { Homepage } from './Homepage';

const App = () => {
  const [nonprofits, setNonprofits] = useState([]);
  const [foundations, setFoundations] = useState([]);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('/api/nonprofits')
      .then(res => setNonprofits(res.data))
      .catch(err => console.log(err));

    axios.get('/api/foundations')
      .then(res => setFoundations(res.data))
      .catch(err => console.log(err));

    axios.get('/api/emails')
      .then(res => setEmails(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleAddNonprofit = (nonprofit) => {
    axios.post('/api/nonprofits', nonprofit)
      .then(res => setNonprofits([...nonprofits, res.data]))
      .catch(err => console.log(err));
  }

  const handleAddFoundation = (foundation) => {
    axios.post('/api/foundations', foundation)
      .then(res => setFoundations([...foundations, res.data]))
      .catch(err => console.log(err));
  }

  const handleSendEmail = (email) => {
    axios.post('/api/emails', email)
      .then(res => setEmails([...emails, res.data]))
      .catch(err => console.log(err));
  }

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/">
          <>
          <h1>Nonprofits</h1>
          <NonprofitForm onAddNonprofit={handleAddNonprofit} />
          <ul className="nonprofit-list">
            {nonprofits.map(nonprofit => (
              <li key={nonprofit.email} className="nonprofit-item">
                <p>{nonprofit.name}</p>
                <p>{nonprofit.address}</p>
                <p>{nonprofit.email}</p>
              </li>
            ))}
          </ul>

          <FoundationForm onAddFoundation={handleAddFoundation} />
          <ul className="foundation-list">
            {foundations.map(foundation => (
              <li key={foundation.email} className="foundation-item">
                <p>{foundation.email}</p>
              </li>
            ))}
          </ul>
          </>
        </Route> */}
        <Route exact  path="/" element={<Homepage />}></Route>
        <Route path="/register-foundation" element={<FoundationForm />}></Route>
        <Route path="/register-non-profit" element={<NonprofitForm />}></Route>
        <Route path="/send-email" element={<EmailForm onSendEmail={handleSendEmail} />}>
        </Route>
        <Route path="/view-emails" element={<ViewEmails emails={emails} />}></Route>
      </Routes>
    </Router>
  );
};

export default App;