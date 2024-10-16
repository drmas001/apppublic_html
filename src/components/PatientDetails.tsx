import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, Calendar, Clock, Activity, FileText, ArrowLeft } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  admissionDate: string;
  expectedDischargeDate: string;
  daysRemaining: number;
  status: string;
  medicalNotes: string[];
}

const PatientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    // TODO: Fetch patient details from Google Sheets API
    const mockPatient: Patient = {
      id: id || '1',
      name: 'John Doe',
      age: 45,
      admissionDate: '2023-03-15',
      expectedDischargeDate: '2023-03-22',
      daysRemaining: 3,
      status: 'Stable',
      medicalNotes: ['Initial examination completed', 'Prescribed medication A'],
    };
    setPatient(mockPatient);
  }, [id]);

  const handleAddNote = () => {
    if (newNote.trim() && patient) {
      // TODO: Update Google Sheets with new note
      setPatient({
        ...patient,
        medicalNotes: [...patient.medicalNotes, newNote.trim()],
      });
      setNewNote('');
    }
  };

  const handleDischarge = () => {
    if (patient) {
      // TODO: Implement discharge logic with Google Sheets API
      console.log('Discharging patient:', patient.id);
      navigate(-1);
    }
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Patient Details</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
      </div>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <User className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-2xl font-semibold">{patient.name}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span>Age: {patient.age}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span>Admitted: {patient.admissionDate}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span>Expected Discharge: {patient.expectedDischargeDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-500 mr-2" />
            <span>Days Remaining: {patient.daysRemaining}</span>
          </div>
          <div className="flex items-center">
            <Activity className="h-5 w-5 text-gray-500 mr-2" />
            <span>Status: {patient.status}</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Medical Notes</h3>
        <ul className="list-disc pl-5">
          {patient.medicalNotes.map((note, index) => (
            <li key={index} className="mb-2">{note}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Note</h3>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={3}
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter new medical note..."
        ></textarea>
        <button
          onClick={handleAddNote}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add Note
        </button>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleDischarge}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Discharge Patient
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;