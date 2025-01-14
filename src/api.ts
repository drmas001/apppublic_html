import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getPatients = async () => {
  const response = await axios.get(`${API_URL}/patients`);
  return response.data;
};

export const getPatient = async (id: string) => {
  const response = await axios.get(`${API_URL}/patients/${id}`);
  return response.data;
};

export const createPatient = async (patientData: any) => {
  const response = await axios.post(`${API_URL}/patients`, patientData);
  return response.data;
};

export const updatePatient = async (id: string, patientData: any) => {
  const response = await axios.put(`${API_URL}/patients/${id}`, patientData);
  return response.data;
};

export const deletePatient = async (id: string) => {
  const response = await axios.delete(`${API_URL}/patients/${id}`);
  return response.data;
};