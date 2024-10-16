import React, { useState } from 'react';
import { UserPlus, UserMinus } from 'lucide-react';

const specialties = [
  'Hematology',
  'Rheumatology',
  'Pulmonology',
  'Infectious Diseases',
  'General Internal Medicine',
  'Neurology',
  'Endocrinology'
];

const GeneralAdmission: React.FC = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    admissionDate: '',
    specialty: '',
    assignedDoctor: '',
    medicalFileNumber: '',
  });

  const [isDischarging, setIsDischarging] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDischarging) {
      // TODO: Implement discharge logic with Google Sheets API
      console.log('Discharging patient with medical file number:', patientData.medicalFileNumber);
    } else {
      // TODO: Implement admission logic with Google Sheets API
      console.log('Admitting patient:', patientData);
    }
    // Reset form after submission
    setPatientData({
      name: '',
      age: '',
      admissionDate: '',
      specialty: '',
      assignedDoctor: '',
      medicalFileNumber: '',
    });
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          General Patient Management
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Admit new patients or discharge existing patients
        </p>
      </div>
      <div className="border-t border-gray-200">
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="medicalFileNumber" className="block text-sm font-medium text-gray-700">
                Medical File Number
              </label>
              <input
                type="text"
                name="medicalFileNumber"
                id="medicalFileNumber"
                value={patientData.medicalFileNumber}
                onChange={handleChange}
                required
                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            {!isDischarging && (
              <>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={patientData.name}
                    onChange={handleChange}
                    required={!isDischarging}
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={patientData.age}
                    onChange={handleChange}
                    required={!isDischarging}
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="admissionDate" className="block text-sm font-medium text-gray-700">
                    Admission Date
                  </label>
                  <input
                    type="date"
                    name="admissionDate"
                    id="admissionDate"
                    value={patientData.admissionDate}
                    onChange={handleChange}
                    required={!isDischarging}
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                    Medical Specialty
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={patientData.specialty}
                    onChange={handleChange}
                    required={!isDischarging}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  >
                    <option value="">Select a specialty</option>
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-6">
                  <label htmlFor="assignedDoctor" className="block text-sm font-medium text-gray-700">
                    Assigned Doctor (Optional)
                  </label>
                  <input
                    type="text"
                    name="assignedDoctor"
                    id="assignedDoctor"
                    value={patientData.assignedDoctor}
                    onChange={handleChange}
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button
              type="submit"
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                isDischarging ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-600 hover:bg-primary-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
            >
              {isDischarging ? (
                <>
                  <UserMinus className="h-5 w-5 mr-2" />
                  Discharge Patient
                </>
              ) : (
                <>
                  <UserPlus className="h-5 w-5 mr-2" />
                  Admit Patient
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsDischarging(!isDischarging)}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {isDischarging ? 'Switch to Admission' : 'Switch to Discharge'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralAdmission;