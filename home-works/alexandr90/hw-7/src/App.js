import React, { useState } from 'react';
import ShowHidePassword from './components/PasswordInput';

function App() {
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <ShowHidePassword value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
  );
}

export default App;
