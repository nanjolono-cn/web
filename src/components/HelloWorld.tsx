import React, { useState } from 'react';

export default function HelloWorld() {
  const [times, setTimes] = useState(0);
  return (
    <div>
      <p>{times}</p>
      <button onClick={() => setTimes(times + 1)}>add</button>
    </div>
  );
}
