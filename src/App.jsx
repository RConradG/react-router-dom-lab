import { useState } from 'react';
import {Route, Routes} from 'react-router';
import NavBar from './NavBar/NavBar';
import MailboxList from './MailboxList/MailboxList';
import MailboxForm from './MailboxForm/MailboxForm';
import MailboxDetails from './MailboxDetails/MailboxDetails'; 

import './App.css'

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    console.log(newMailboxData);
    
    setMailboxes([... mailboxes, newMailboxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ <main><h1>Post Office</h1></main> } />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path='/new-mailboxes' element={<MailboxForm addBox={addBox} />} />
        <Route path='mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path='/mailbox-not-found' element={ <h1>Mailbox Not Found!</h1>} />
        <Route path='*' element={<h1>Whoa, that doesn't exist!</h1>} />
      </Routes>
    </>
  ); 
};

export default App;
