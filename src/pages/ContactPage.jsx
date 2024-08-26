import { useState } from 'react';

export default function ContactPage() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFirstName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      default:
        console.error('key not found!')
        break;
    }

    return value;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName}`);
    setFirstName('');
    setEmail('');
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {firstName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
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
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}