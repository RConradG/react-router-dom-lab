import {Link} from 'react-router';
import { useParams, useNavigate } from 'react-router';
import {useEffect, useState} from 'react';

const MailboxDetails = ({ mailboxes }) => {
  const [singleMailbox, setSingleMailbox] = useState({}); 
  const { mailboxId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const oneMailbox = mailboxes.find(oneMailbox => 
      oneMailbox._id === parseInt(mailboxId)
    );

    if(!oneMailbox) {
     return navigate('/mailbox-not-found')
    };

    setSingleMailbox(oneMailbox);
    }, [mailboxId, mailboxes, navigate]); 

  return (
    <>
    <h1>Mailbox {mailboxId}</h1>
    <h2>Details</h2>
    <dl className='mail-box'>
      <dt>Box Number: {singleMailbox._id}</dt>
      <dt>Boxholder: {singleMailbox.boxOwner}</dt>
      <dt>Box Size: {singleMailbox.boxSize}</dt>
    </dl>
    </>
  );
};

export default MailboxDetails;