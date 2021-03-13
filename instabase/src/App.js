import React from 'react';
import Title from './comps/Title';
import Uploadform from './comps/Uploadform';
import ImageGrid from './comps/ImageGrid'

function App() {
  return (
    <div className="App">
      <Title/>
      <Uploadform />
      <ImageGrid />
    </div>
  );
}

export default App;
