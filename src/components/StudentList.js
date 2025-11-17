import React, { useEffect, useState } from 'react';
import { getAll, createStudent, deleteStudent, updateStudent } from '../api/studentService';
import StudentForm from './StudentForm';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetch = () => {
    getAll().then(setStudents).catch(err => console.error(err));
  };

  useEffect(() => { fetch(); }, []);

  const handleCreate = (student) => {
    createStudent(student).then(() => fetch());
  };

  const handleDelete = (id) => {
    if(window.confirm('Delete student?')) {
      deleteStudent(id).then(() => fetch());
    }
  };

  const handleUpdate = (id, student) => {
    updateStudent(id, student).then(() => {
      setEditing(null);
      fetch();
    });
  };

  return (
    <div>
      <StudentForm onSubmit={handleCreate} />
      <hr />
      &emsp;
      <h2>All Students</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>
              <button onClick={() => setEditing(s)}>Edit</button>
              <button onClick={() => handleDelete(s.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

      {editing && (
        <div>
          <h3>Edit Student {editing.id}</h3>
          <StudentForm student={editing} onSubmit={(stu) => handleUpdate(editing.id, stu)} onCancel={() => setEditing(null)} />
        </div>
      )}
    </div>
  );
}

export default StudentList;