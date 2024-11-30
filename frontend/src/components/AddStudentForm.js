import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = ({ onStudentAdded }) => {
    const [student, setStudent] = useState({
        studentNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        program: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/students', student);
            onStudentAdded(response.data); // Notify parent about the new student
            setStudent({ studentNumber: '', firstName: '', lastName: '', email: '', program: '' });
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="studentNumber" placeholder="Student Number" value={student.studentNumber} onChange={handleChange} required />
            <input type="text" name="firstName" placeholder="First Name" value={student.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={student.lastName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
            <input type="text" name="program" placeholder="Program" value={student.program} onChange={handleChange} required />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudentForm;
