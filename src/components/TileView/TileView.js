import React from 'react';
import './TileView.css';

const TileView = ({ students, onTileClick }) => {
    return (
        <div className="tile-view">
            {students.map((student, index) => (
                <div key={index} className="tile" onClick={() => onTileClick(student)}>
                    <h3>{student.name}</h3>
                    <p>Email: {student.email}</p>
                    <p>Phone: {student.phone}</p>
                    <button>Edit</button>
                    <button>Flag</button>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TileView;
