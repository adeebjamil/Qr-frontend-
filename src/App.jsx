import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import QRCodeDisplay from './components/QRCodeDisplay';
import EmployeeCard from './components/EmployeeCard';
import EmployeeDetail from './components/EmployeeDetail';
import Footer from './components/Footer';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employeeData, setEmployeeData] = useState(null);
  const [qrData, setQrData] = useState('');

  const handleEmployeeSubmit = (data) => {
    setEmployeeData(data);
    setQrData(`${window.location.origin}/employee/${data._id}`); // Correct URL format
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Lovosis Technology Pvt. Ltd.</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EmployeeForm onSubmit={handleEmployeeSubmit} />
                {qrData && (
                  <div className="mt-8">
                    <QRCodeDisplay qrData={qrData} />
                  </div>
                )}
                {employeeData && (
                  <div className="mt-8">
                    <EmployeeCard employee={employeeData} />
                  </div>
                )}
              </>
            }
          />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;