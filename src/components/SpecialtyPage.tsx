import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Calendar, Clock, Activity } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  admissionDate: string;
  daysRemaining: number;
  status: string;
}

const SpecialtyPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    // TODO: Fetch patients from Google Sheets API
    const mockPatients: Patient[] = [
      { id: '1', name: 'John Doe', age: 45, admissionDate: '2023-03-15', daysRemaining: 3, status: 'Stable' },
      { id: '2', name: 'Jane Smith', age: 32, admissionDate: '2023-03-17', daysRemaining: 5, status: 'Improving' },
    ];
    setPatients(mockPatients);
  }, [name]);

  const handleDischarge = (patientId: string) => {
    // TODO: Implement discharge logic with Google Sheets API
    console.log('Discharging patient:', patientId);
    setPatients(patients.filter(patient => patient.id !== patientId));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">{name} Patients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold">{patient.name}</h2>
            </div>
            <div className="mb-2 flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <span>Age: {patient.age}</span>
            </div>
            <div className="mb-2 flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <span>Admitted: {patient.admissionDate}</span>
            </div>
            <div className="mb-2 flex items-center">
              <Clock className="h-5 w-5 text-gray-500 mr-2" />
              <span>Days Remaining: {patient.daysRemaining}</span>
            </div>
            <div className="mb-4 flex items-center">
              <Activity className="h-5 w-5 text-gray-500 mr-2" />
              <span>Status: {patient.status}</span>
            </div>
            <div className="flex justify-between">
              <Link
                to={`/patient/${patient.id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Details
              </Link>
              <button
                onClick={() => handleDischarge(patient.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Discharge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyPage;