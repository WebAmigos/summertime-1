import { Button } from '@ems/common-ui';
import { FormEventHandler, useRef, useState } from 'react';

import './RegistrationForm.module.css';

export const RegistrationForm = () => {
  // const [firstName, setFirstName] = useState('');
  // /const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState(0);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ageNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    // console.log({ firstName, lastName, age });
    console.log({ fistName: firstNameRef.current?.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input id="firstName" ref={firstNameRef} />
      </div>
      <div>
        <label htmlFor="lastName">Last name: </label>
        <input id="lastName" ref={lastNameRef} />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input id="age" type="number" ref={ageNameRef} />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
