import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs mx-auto hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col items-center">
          {employee.image && (
            <img
              src={`${import.meta.env.VITE_API_URL}/${employee.image}`}
              alt="Employee"
              className="w-32 h-32 rounded-full mb-4"
            />
          )}
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{employee.name}</h2>
          <p className="text-sm mb-2 text-gray-600">
            <strong>ID:</strong> {employee.employeeId}
          </p>
          <p className="text-sm mb-2 text-gray-600">
            <strong>Email:</strong> {employee.email}
          </p>
          <p className="text-sm mb-2 text-gray-600">
            <strong>Position:</strong> {employee.position}
          </p>
          <p className="text-sm mb-2 text-gray-600">
            <strong>Department:</strong> {employee.department}
          </p>
          <p className="text-sm mb-2 text-gray-600">
            <strong>Phone:</strong> {employee.phone}
          </p>
          <p className="text-sm mb-2 text-gray-600">
            <strong>Address:</strong> {employee.address}
          </p>
          {employee.qrCode && (
            <img
              src={employee.qrCode}
              alt="QR Code"
              className="w-32 h-32 mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;