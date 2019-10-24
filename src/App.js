import React from 'react';
import A4page from './page/a4page.jsx'

function App() {
  return (
    <div className="App" style={{backgroundColor: '#555', overflow: 'hidden'}}>
      <A4page>
        <div class="content">Test</div>
      </A4page>
      {/* You can add more <A4page> if you want more pages. */}
    </div>
  );
}

export default App;
