import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { MdAddBox, MdModeEditOutline, MdRemoveCircleOutline } from 'react-icons/md';

function Stadium({ stadium, onEdit, onDelete }) {

    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const formatDate = (isoDateString) => {
        return new Date(isoDateString).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
    };

    return (
        <tr>
            <td>{stadium.name}</td>
            <td>{stadium.capacity}</td>
            <td>{formatDate(stadium.constructionDate)}</td>
            <td><MdRemoveCircleOutline onClick={() => onDelete(stadium._id)} style={{cursor: 'pointer'}} /></td>
            <td><MdModeEditOutline onClick={() => onEdit(stadium)} style={{cursor: 'pointer'}} /></td>
        </tr>
    );
}

export default Stadium;