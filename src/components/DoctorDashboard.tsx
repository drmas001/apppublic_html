import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Users, PlusCircle, LogOut } from 'lucide-react';
import { getPatients, deletePatient } from '../api';

interface Patient {
  _id: string;
  name: string;
  age: number;
  admissionDate: string;
  daysRemaining: number;
  status: string;
}

const DoctorDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const fetchedPatients = await getPatients();
      setPatients(fetchedPatients);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handleDischarge = async (patientId: string) => {
    try {
      await deletePatient(patientId);
      setPatients(patients.filter(patient => patient._id !== patientId));
    } catch (error) {
      console.error('Error discharging patient:', error);
    }
  };

  // ... rest of the component remains the same

  return (
    // ... existing JSX
  );
};

export default DoctorDashboard;