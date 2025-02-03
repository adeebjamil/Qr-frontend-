const EmployeeCard = ({ employee }) => {
  return (
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
      </div>
    </div>
  );
};

export default EmployeeCard;