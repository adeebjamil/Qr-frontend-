import { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    address: '',
    permanentAddress: '',
    bloodGroup: '',
    dob: '',
    officeId: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Log form data

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/employees`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onSubmit(response.data);
    } catch (error) {
      console.error("Error creating employee:", error);
      // If there's an error, log it for more context
      console.error("Error response:", error.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Employee Registration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Personal Information</h3>
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Work Information Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-700 border-b pb-2">Work Information</h3>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Office ID</label>
            <input
              type="text"
              name="officeId"
              value={formData.officeId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Address Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-700 border-b pb-2">Address Information</h3>
          </div>

          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-gray-700">Current Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-gray-700">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Image Upload Section */}
          <div className="md:col-span-2 space-y-1">
            <label className="block text-sm font-medium text-gray-700">Profile Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 font-medium"
            >
              Register Employee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;