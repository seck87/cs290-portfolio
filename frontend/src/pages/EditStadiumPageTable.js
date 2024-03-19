import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const EditStadiumPageTable = ({ stadiumToEdit }) => {
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [constructionDate, setConstructionDate] = useState('');

    const redirect = useNavigate();

    const editStadium = async () => {
        const updatedStadium = { name, capacity, constructionDate };
        const response = await fetch(`/stadiums/${stadiumToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedStadium),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.status === 200) {
            alert(`Stadium updated successfully`);
            redirect("/stadiums"); // Make sure to redirect to the correct path
        } else {
            const errMessage = await response.json();
            alert(`Failed to update stadium ${response.status}. ${errMessage.Error}`);
        }
    }

    return (
        <>
            <article>
                <h2>Edit Stadium</h2>
                <p>Update the details below to edit the stadium information.</p>
                <table id="stadiums">
                    <caption>Details of the stadium to edit:</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Capacity</th>
                            <th>Construction Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Stadium Name</label>
                                <input
                                    type="text"
                                    placeholder="Name of the stadium"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    id="name" />
                            </td>

                            <td>
                                <label htmlFor="capacity">Capacity</label>
                                <input
                                    type="number"
                                    placeholder="Capacity"
                                    value={capacity}
                                    onChange={e => setCapacity(e.target.value)}
                                    id="capacity" />
                            </td>

                            <td>
                                <label htmlFor="constructionDate">Construction Date</label>
                                <input
                                    type="date"
                                    value={constructionDate}
                                    onChange={e => setConstructionDate(e.target.value)}
                                    id="constructionDate" />
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={editStadium}
                                    id="submit"
                                >Save Changes</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default EditStadiumPageTable;