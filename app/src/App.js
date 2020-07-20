import React from 'react';
import TapeList from './TapeList';
import logo from './logo.svg';
import './App.css';

var data = {
    "tapes": [
    {
        "id": 1,
        "artist": "Grateful Dead",
        "venue": "Berkly Amphatheater",
        "performance": "01/20/1967",
        "url" : "localhost:/song one",
        "songs": [
            {"name": "Blues For Alla" },
            {"name": "I Need A Miracle" }
        ]
      },
      {
          "id": 2,
          "artist": "Grateful Dead",
          "venue": "Frost Amphatheater",
          "performance": "Unknown",
          "url" : ""
      }
  ]

}
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <TapeList tapes={data.tapes} verbose={true}/>
    </div>
  );
}

export default App;