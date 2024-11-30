import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses';

export const getCourses = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addCourse = async (courseData) => {
    const response = await axios.post(API_URL, courseData);
    return response.data;
};
