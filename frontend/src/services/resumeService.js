import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000"
});

export const uploadResume = async (formData) => {
    const response = await API.post(
        "/upload",          // ← NOT /api/analyze
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};