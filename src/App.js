import React from 'react';
import Router from './routes/Router';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
