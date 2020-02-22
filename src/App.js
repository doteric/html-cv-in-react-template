import React from 'react';
import A4page from './components/A4page';

function App() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <A4page>
        <div class="content">Test</div>
      </A4page>
      <A4page>
        <div class="content">Test2</div>
      </A4page>
      {/* You can add more <A4page> if you want more pages. */}
    </div>
  );
}

export default App;
