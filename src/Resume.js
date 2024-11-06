import React from 'react';
import rPDF from './resumeSite.pdf';
import './Resume.css';

const checkDevice = (devicePx) => {};

function Resume() {
  return (
    <div className='pdfContainer'>
      <embed className='pdfFrame' src={rPDF} type='application/pdf'></embed>
    </div>
  );
}
export default Resume;
