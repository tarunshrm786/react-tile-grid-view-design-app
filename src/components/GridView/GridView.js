// import React from 'react';
// import './GridView.css';

// const GridView = ({ students }) => {
//     return (
//         <div className="grid-view">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Grade</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Address</th>
//                         <th>City</th>
//                         <th>State</th>
//                         <th>Country</th>
//                         <th>ZIP</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map((student, index) => (
//                         <tr key={index}>
//                             <td>{student.name}</td>
//                             <td>{student.age}</td>
//                             <td>{student.grade}</td>
//                             <td>{student.email}</td>
//                             <td>{student.phone}</td>
//                             <td>{student.address}</td>
//                             <td>{student.city}</td>
//                             <td>{student.state}</td>
//                             <td>{student.country}</td>
//                             <td>{student.zip}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default GridView;


import React from 'react';
import './GridView.css';

const GridView = ({ students }) => {
    return (
        // <div className="grid-view">
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Age</th>
        //                 <th>Grade</th>
        //                 <th>Email</th>
        //                 <th>Phone</th>
        //                 <th>Address</th>
        //                 <th>City</th>
        //                 <th>State</th>
        //                 <th>Country</th>
        //                 <th>ZIP</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {students.map((student, index) => (
        //                 <tr key={index}>
        //                     <td>{student.name}</td>
        //                     <td>{student.age}</td>
        //                     <td>{student.grade}</td>
        //                     <td>{student.email}</td>
        //                     <td>{student.phone}</td>
        //                     <td>{student.address}</td>
        //                     <td>{student.city}</td>
        //                     <td>{student.state}</td>
        //                     <td>{student.country}</td>
        //                     <td>{student.zip}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
        <div className="grid-view">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>ZIP</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student, index) => (
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.grade}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.address}</td>
                    <td>{student.city}</td>
                    <td>{student.state}</td>
                    <td>{student.country}</td>
                    <td>{student.zip}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
};

export default GridView;
