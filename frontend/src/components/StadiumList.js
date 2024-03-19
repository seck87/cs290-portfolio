import React from 'react';
import Stadium from './Stadium';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function StadiumList({ stadiums, onDelete, onEdit }) {
    return (
        <table id="stadiums">
            <caption>Stadiums</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capacity</th>
                    <th>Construction Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {stadiums.map((stadium, i) => 
                    <Stadium 
                        stadium={stadium} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default StadiumList;
