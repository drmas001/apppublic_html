import React, { useState, useEffect } from 'react';
import { Download, Share2 } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  admissionDate: string;
  dischargeDate?: string;
  status: string;
  specialty: string;
}

const specialties = [
  'Hematology',
  'Rheumatology',
  'Pulmonology',
  'Infectious Diseases',
  'General Internal Medicine',
  'Neurology',
  'Endocrinology'
];

const DailyReports: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  useEffect(() => {
    // TODO: Fetch all patients from Google Sheets API
    const mockPatients: Patient[] = [
      { id: '1', name: 'John Doe', age: 45, admissionDate: '2023-03-15', status: 'Active', specialty: 'Hematology' },
      { id: '2', name: 'Jane Smith', age: 32, admissionDate: '2023-03-17', status: 'Active', specialty: 'Rheumatology' },
      { id: '3', name: 'Bob Johnson', age: 58, admissionDate: '2023-03-10', dischargeDate: '2023-03-20', status: 'Discharged', specialty: 'Pulmonology' },
    ];
    setPatients(mockPatients);
  }, []);

  const filteredPatients = selectedSpecialty === 'All'
    ? patients
    : patients.filter(patient => patient.specialty === selectedSpecialty);

  const handleDownloadReport = () => {
    // TODO: Implement report download logic
    console.log('Downloading report...');
  };

  const handleShareReport = () => {
    // TODO: Implement report sharing logic
    console.log('Sharing report...');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Daily Patient Report</h1>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Specialty
          </label>
          <select
            id="specialty"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="All">All Specialties</option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="space-x-4">
          <button
            onClick={handleDownloadReport}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Report
          </button>
          <button
            onClick={handleShareReport}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Share2 className="h-5 w-5 mr-2" />
            Share Report
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admission Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discharge Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Specialty
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.age}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.admissionDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.dischargeDate || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.specialty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyReports;