import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddStudentForm from '../components/AddStudentForm';

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleStudentAdded = (newStudent) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <AddStudentForm onStudentAdded={handleStudentAdded} />
            <h2>List of Students</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>
                        {student.firstName} {student.lastName} ({student.studentNumber})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
