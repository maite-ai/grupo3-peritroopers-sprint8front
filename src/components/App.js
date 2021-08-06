import React from 'react';
import Home from './Home';
import Topbar from './Topbar'
//import Sidebar from './Sidebar';

function App() {
  return (
    <React.Fragment>
      <div>
        <Topbar/>
        {/*<Sidebar/>*/}
        <Home/>
      </div>
    </React.Fragment>
  );
}

export default App;