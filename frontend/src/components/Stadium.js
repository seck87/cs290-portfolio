import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Stadium({ stadium, onEdit, onDelete }) {
    return (
        <tr>
            <td>{stadium.name}</td>
            <td>{stadium.capacity}</td>
            <td>{stadium.constructionDate}</td>
            <td><MdDeleteForever onClick={() => onDelete(stadium._id)} /></td>
            <td><MdEdit onClick={() => onEdit(stadium)} /></td>
        </tr>
    );
}

export default Stadium;