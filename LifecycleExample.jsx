import React, { useState, useEffect } from 'react';

const LifecycleExample = () => {
  // Mounting
  useEffect(() => {
    console.log('Inside mount');
    
    // Cleanup function (will be called on unmount)
    return () => {
      console.log('Inside unmount');
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log('Inside update');

    // Cleanup function (will be called on update and unmount)
    return () => {
      console.log('Inside unmount (from update)');
    };
  });

  // State for updating
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Slip 7</h1>
      <h2>Lifecycle Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default LifecycleExample;
