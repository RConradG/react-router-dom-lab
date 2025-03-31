import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
  _id: 0,
  boxOwner: '',
  boxSize: 'small',

};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes')
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return(
    <>
    <h1>New Mailbox</h1>
    <form onSubmit={handleSubmit}> 
      <label htmlFor='boxOwner'>Enter a Boxowner:</label>
      <input
        type='text'
        name='boxOwner'
        placeholder='Boxholder name'
        value={formData.boxOwner}
        onChange={handleChange}
        required ={true}
        />

      <label htmlFor='boxSize'>Select a Box Size:</label>
      <select 
        type='text'
        name='boxSize'
        value= {formData.boxSize}
        onChange={handleChange}
        >
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
      </select>
      <button type='submit'>Submit</button>
    </form>
    </>
  );
};

export default MailboxForm;