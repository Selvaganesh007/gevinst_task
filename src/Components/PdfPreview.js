import React from 'react';
import './common.css';

const PdfPreview = () => {
  return (
    <div>
      <iframe className='pdf-preview' src="https://www.orimi.com/pdf-test.pdf"></iframe>
    </div>
  );
};

export default PdfPreview;
