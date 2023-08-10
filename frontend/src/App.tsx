import React from 'react'; // Don't forget to import React
import './App.css';
import Posts from './features/posts/Posts';

function App() {
  return (
    <div className="App">
      <Posts /> {/* Corrected the component name to uppercase "Posts" */}
    </div>
  );
}

export default App;
