import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      style={{
        margin: '1rem',
        textAlign: 'justify',
        background: 'pink',
        color: 'black',
        padding: '0.8rem',
        borderRadius: '8px',
      }}
    >
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          commodi provident reprehenderit enim voluptatibus excepturi eveniet
          id, sint ullam porro! Provident consectetur dolores architecto optio
          quod sapiente qui enim laudantium.
        </p>
      )}

      <div style={{ textAlign: 'center', margin: '0.5rem' }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
