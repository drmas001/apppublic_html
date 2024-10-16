import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserPlus, ArrowLeft } from 'lucide-react';

const PatientAdmission: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    admissionDate: '',
    specialty: user.specialty,
    assignedDoctor: user.name,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement patient admission logic here
    console.log('Admitting patient:', patientData);
    // After admission, navigate back to the doctor's dashboard
    navigate('/doctor');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <UserPlus className="h-12 w-12 text-blue-600 mx-auto" />
              <h1 className="text-2xl font-semibold text-center mt-4">Patient Admission</h1>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">Patient Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Patient Name"
                    value={patientData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="age" className="sr-only">Age</label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Age"
                    value={patientData.age}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="admissionDate" className="sr-only">Admission Date</label>
                  <input
                    id="admissionDate"
                    name="admissionDate"
                    type="date"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    value={patientData.admissionDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="specialty" className="sr-only">Medical Specialty</label>
                  <input
                    id="specialty"
                    name="specialty"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Medical Specialty"
                    value={patientData.specialty}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="assignedDoctor" className="sr-only">Assigned Doctor</label>
                  <input
                    id="assignedDoctor"
                    name="assignedDoctor"
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Assigned Doctor"
                    value={patientData.assignedDoctor}
                    readOnly
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => navigate('/doctor')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <UserPlus className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                  </span>
                  Admit Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAdmission;