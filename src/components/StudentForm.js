import React, { useState, useEffect } from 'react';

export default function StudentForm({ onSubmit, student, onCancel }) {
  const [id, setId] = useState(student ? student.id : "");
  const [name, setName] = useState(student ? student.name : "");
  const [email, setEmail] = useState(student ? student.email : "");

  useEffect(() => {
    if (student) {
      setId(student.id);
      setName(student.name);
      setEmail(student.email);
    }
  }, [student]);

  const submit = (e) => {
    e.preventDefault();
    if (!id || !name || !email) { alert("All fields required"); return; }
    onSubmit({ id: parseInt(id,10), name, email });
    if(!student){
      setId(""); setName(""); setEmail("");
    }
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>ID</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} disabled={!!student} />
      </div>
      <div>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <button type="submit">{student ? 'Update' : 'Create'}</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      &emsp;
    </form>
  );
}
