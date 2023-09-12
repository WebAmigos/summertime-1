import { useEffect, useState } from 'react';

import './UserForm.module.css';

export const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const person = { firstName, age };

  useEffect(() => {
    console.log('Person: ', person);
  }, [person]);

  return (
    <div style={{ background: darkMode ? '#000' : '#fff' }}>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ border: '#000 1px solid' }}
        />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          style={{ border: '#000 1px solid' }}
        />
      </div>
      <div>
        <label htmlFor="mode">Dark mode: </label>
        <input
          id="mode"
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
      </div>
    </div>
  );
};
