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
        <Route path='mailboxes/:mailboxId' element={<MailboxDetails />} />
      </Routes>
    </>
  ); 
};

export default App;

// As a user, when viewing the ‘Mailboxes’ page, I should be able to see a list of all the existing mailboxes. Each mailbox in the list should be a square container with a box number _id.
// As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, and be directed to a mailbox details page.
// As a user, when viewing the details page, I should see details about a specific mailbox. The details should include the box number (_id), the name of the box owner, and the box size.
// As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist.