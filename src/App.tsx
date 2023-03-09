import React from 'react';
import './App.css';
import ModalWindow from './components/ModalWindow/ModalWindow';
import ModalContent from './components/ModalWindow/ModalContent';

function App() {
  return (
    <div className="App">
      <ModalWindow content={<ModalContent />} />
    </div>
  );
}

export default App;
