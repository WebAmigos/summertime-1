import { Button, Header, Input } from '@ems/common-ui';
import { useState, useId } from 'react';

export default {
  title: 'Rendering/IndexKeys',
};

export const ReactKeysIndex = () => {
  const [items, setItems] = useState([
    { id: useId(), name: 'A', value: '0️⃣ zero' },
    { id: useId(), name: 'B', value: '1️⃣ one' },
  ]);
  const newId = useId();

  const addItem = () => {
    setItems([{ id: newId, name: 'C', value: '2️⃣ two' }, ...items]);
  };

  return (
    <>
      <Header>Index keys</Header>
      {items.map((elem, index) => (
        <div key={index}>
          <div>
            <Input
              type="text"
              label={`index ${index}`}
              defaultValue={elem.value}
              style={{ border: '#c0c0c0 1px solid ' }}
            />
          </div>
        </div>
      ))}
      <div className="my-6"></div>
      <Header>id keys</Header>
      {items.map((elem, _index) => (
        <div key={elem.id}>
          <div>
            <Input
              type="text"
              label={`id ${elem.id}`}
              defaultValue={elem.value}
              style={{ border: '#c0c0c0 1px solid ' }}
            />
          </div>
        </div>
      ))}
      <div>
        <Button label="add" onClick={addItem} />
      </div>
    </>
  );
};
