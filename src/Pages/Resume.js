import React from 'react';
import rPDF from './resumeSite.pdf';
import './Resume.css';

const checkDevice = (devicePx) => {};

function Resume() {
  return (
    <div className='pdfContainer'>
      <object className='pdfFrame' data={rPDF} type='application/pdf'>
        <p>Oops! Your browser doesn't support PDFs!</p>
        <p>
          <a href={rPDF}>Download Instead</a>
        </p>
      </object>
    </div>
  );
}
export default Resume;
