import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

//creates a table row for an exercise document
function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td id="edit"><MdEdit onClick={ () => onEdit(exercise)} /></td>
            <td id="delete">< MdDeleteForever onClick={ () => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;