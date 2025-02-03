import React, { useRef } from 'react';
import QRCode from 'react-qr-code';
import { saveAs } from 'file-saver';

const QRCodeDisplay = ({ qrData }) => {
  const qrRef = useRef();

  const downloadQRCode = () => {
    const svg = qrRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        saveAs(blob, 'qrcode.png');
      });
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lovosis Technology Pvt . Ltd</h2>
      <div ref={qrRef} className="inline-block p-4 bg-white rounded-lg shadow-md">
        <QRCode value={qrData} />
      </div>
      <button
        onClick={downloadQRCode}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeDisplay;