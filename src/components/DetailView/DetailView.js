import React from 'react';
import './DetailView.css';

const DetailView = ({ student, onBack }) => {
    return (
        <div className="detail-view">
            <button onClick={onBack}>Back</button>
            <h2>{student.name}</h2>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>City:</strong> {student.city}</p>
            <p><strong>State:</strong> {student.state}</p>
            <p><strong>Country:</strong> {student.country}</p>
            <p><strong>ZIP:</strong> {student.zip}</p>
        </div>
    );
};

export default DetailView;
