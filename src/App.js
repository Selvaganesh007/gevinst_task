import React from 'react';
import './App.css';
import WysiwygEditor from './Components/Editor';
import FieldsLinker from './Components/FiledLinker';
import PdfPreview from './Components/PdfPreview';

function App() {

  return (
    <div className="App">
      gevinst
      <FieldsLinker />
      <WysiwygEditor />
      <PdfPreview />
    </div>
  );
}

export default App;
