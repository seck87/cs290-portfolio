import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import StadiumList from '../components/StadiumList';
import { Link } from 'react-router-dom';

function StadiumsPage({ setStadium }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [stadiums, setStadiums] = useState([]);

    // RETRIEVE the entire list of stadiums
    const loadStadiums = async () => {
        const response = await fetch('/stadiums');
        const stadiums = await response.json();
        setStadiums(stadiums);
    } 
    

    // UPDATE a single stadium
    const onEditStadium = async stadium => {
        setStadium(stadium);
        redirect("/update");
    }


    // DELETE a single stadium 
    const onDeleteStadium = async _id => {
        const response = await fetch(`/stadiums/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            loadStadiums();
        } else {
            console.error(`Failed to delete stadium with ID = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the stadiums
    useEffect(() => {
        loadStadiums();
    }, []);

    // DISPLAY the stadiums
    return (
        <>
            <h2>List of Stadiums</h2>
            <p>Information about stadiums can be found here.</p>
            <Link to="/create">Add Stadium</Link>
            <StadiumList 
                stadiums={stadiums} 
                onEdit={onEditStadium} 
                onDelete={onDeleteStadium} 
            />
        </>
    );
}

export default StadiumsPage;