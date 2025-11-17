import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080/api/students';

export const getAll = () => axios.get(API_BASE).then(res => res.data);
export const createStudent = (student) => axios.post(API_BASE, student).then(res => res.data);
export const updateStudent = (id, student) => axios.put(`${API_BASE}/${id}`, student).then(res => res.data);
export const deleteStudent = (id) => axios.delete(`${API_BASE}/${id}`).then(res => res.data);
