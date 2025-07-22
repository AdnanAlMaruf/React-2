import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
<main className="main_container">
      <ContactHeader/>
      <ContactForm/>
</main>
    </div>
  );
}

export default App;

