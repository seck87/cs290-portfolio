import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddStadiumPageTable = () => {
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [constructionDate, setConstructionDate] = useState('');

    const redirect = useNavigate();

    const addStadium = async () => {
        const newStadium = { name, capacity, constructionDate };
        const response = await fetch('/stadiums', {
            method: 'post',
            body: JSON.stringify(newStadium),
            headers: {'Content-Type': 'application/json',},
        });
        if(response.status === 201){
            alert(`Stadium added successfully`);
        } else {
            alert(`Failed to add stadium, status: ${response.status}`);
        }
        redirect("/stadiums");
    };


    return (
        <>
            <article>
                <h2>Add a Stadium</h2>
                <p>Fill in the details below to add a new stadium.</p>
                
                <div>
                    <label htmlFor="name">Stadium Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter stadium name"
                    />
                </div>
    
                <div>
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                        type="number"
                        id="capacity"
                        value={capacity}
                        onChange={e => setCapacity(e.target.value)}
                        placeholder="Enter capacity"
                    />
                </div>
    
                <div>
                    <label htmlFor="constructionDate">Construction Date:</label>
                    <input
                        type="date"
                        id="constructionDate"
                        value={constructionDate}
                        onChange={e => setConstructionDate(e.target.value)}
                    />
                </div>
    
                <button onClick={addStadium}>Add Stadium</button>
            </article>
        </>
    );
}

export default AddStadiumPageTable;