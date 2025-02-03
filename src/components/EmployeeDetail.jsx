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
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Profile Header */}
              <div className="relative h-32 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="absolute inset-0 opacity-30"
                     style={{
                      backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E')"
                     }}>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative -mt-16 text-center px-6">
                {employee.image ? (
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${employee.image}`}
                    alt={employee.name}
                    className="w-32 h-32 mx-auto rounded-xl object-cover ring-4 ring-white shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 mx-auto rounded-xl ring-4 ring-white shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{employee.name[0]}</span>
                  </div>
                )}
                <div className="absolute bottom-0 right-1/3 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
              </div>

              {/* Profile Info */}
              <div className="px-6 py-4 text-center">
                <h2 className="text-xl font-bold text-gray-900">{employee.name}</h2>
                <p className="text-blue-600 font-medium">{employee.position}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                    {employee.department}
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="border-t border-gray-100">
                <div className="px-6 py-4">
                  <QuickStat icon="🆔" label="QR ID" value={employee.employeeId} />
                  <QuickStat icon="📧" label="Email" value={employee.email} />
                  <QuickStat icon="📱" label="Phone" value={employee.phone} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DetailCard icon="🩸" label="Blood Group" value={employee.bloodGroup} />
                <DetailCard icon="🎂" label="Date of Birth" value={new Date(employee.dob).toLocaleDateString()} />
                <DetailCard icon="🏢" label="Employee Id" value={employee.officeId} />
                <DetailCard icon="👥" label="Department" value={employee.department} />
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-start">
                  <span className="text-xl mr-3">📍</span>
                  <p className="text-gray-600">{employee.address}</p>
                </div>
              </div>
            </div>

            {/* Manager */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reporting Manager</h3>
              <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Reports to</p>
                  <h4 className="text-lg font-semibold text-gray-900 mt-1">Rashid Ali</h4>
                  <p className="text-gray-600">General Manager</p>
                </div>
                <div className="h-14 w-14 bg-white rounded-xl shadow flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickStat = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 mb-3 last:mb-0">
    <span className="text-xl">{icon}</span>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  </div>
);

const DetailCard = ({ icon, label, value }) => (
  <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
    <div className="flex items-center space-x-3">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
    </div>
  </div>
);

export default EmployeeDetail;