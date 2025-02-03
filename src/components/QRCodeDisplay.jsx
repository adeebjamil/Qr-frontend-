import QRCode from 'react-qr-code';

const QRCodeDisplay = ({ qrData }) => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lovosis Technology Pvt . Ltd</h2>
      <div className="inline-block p-4 bg-white rounded-lg shadow-md">
        <QRCode value={qrData} />
      </div>
    </div>
  );
};

export default QRCodeDisplay;