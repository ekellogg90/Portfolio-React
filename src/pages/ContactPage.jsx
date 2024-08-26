import { useState } from 'react';
import '../components/form.css';
import { validateEmail } from '../utils/helpers';

export default function ContactPage() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case 'name':
        setName(inputValue)
        break;
      case 'email':
        setEmail(inputValue)
        break;
      case 'message':
        setMessage(inputValue)
        break;
      default:
        console.error('key not found!')
        break;
    }
    // return value;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    // Alert the user their name, clear the inputs
    alert(`Hello ${name}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {name}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}