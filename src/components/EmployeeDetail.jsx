import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/employees/${id}`
        );
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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-8 px-4 flex flex-col items-center">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col items-center">
          {employee.image && (
            <img
              src={`${import.meta.env.VITE_API_URL}/${employee.image}`}
              alt="Employee"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 border-4 border-blue-500"
            />
          )}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            {employee.name}
          </h2>
          <div className="text-left w-full">
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Office ID:</strong> {employee.officeId}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Email:</strong> {employee.email}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Position:</strong> {employee.position}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Department:</strong> {employee.department}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Phone:</strong> {employee.phone}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Address:</strong> {employee.address}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Permanent Address:</strong> {employee.permanentAddress}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Blood Group:</strong> {employee.bloodGroup}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>Date of Birth:</strong>{" "}
              {new Date(employee.dob).toLocaleDateString()}
            </p>
            <p className="text-base sm:text-lg mb-2 text-gray-700">
              <strong>UID:</strong> {employee.employeeId}
            </p>
          </div>
        </div>
        <p className="text-sm italic mt-5 text-right">General Manager:</p>
        <p className="text-sm italic text-right">Rashid Ali</p>
      </div>
    </div>
  );
};

export default EmployeeDetail;