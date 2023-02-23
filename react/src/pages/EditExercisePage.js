import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    // function validate() {
    //     let checkName = document.getElementById('validate').name.value;
    //     let checkReps = document.getElementById('validate').reps.value;
    //     let checkWeight = document.getElementById('validate').weight.value;
    //     let checkUnit = document.getElementById('validate').unit.value;
    //     let checkDate = document.getElementById('validate').date.value;

    //     console.log("working");
    //     if (!checkName || !checkReps || !checkWeight || !checkUnit || !checkDate) {
    //         return true;
    //     } else {
    //         return false
    //     }
    // }
    //wrap input in a label, give class and style with css
    return (
        <div>
            <form id="validate">
                <fieldset>
                    <legend>Edit Exercise</legend>
                    <label for="name">Exercise</label>
                    <input
                        required
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <label for="reps">Repetitions</label>
                    <input
                        id="reps"
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} />
                    <label for="weight">Weight</label>
                    <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} />
                    <label for="unit">Units</label>
                    <select
                        id="unit"
                        type="text"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}>
                        <option value="lb">Lb</option>
                        <option value="kg">Kg</option>
                    </select>
                    <label for="date">Exercise</label>
                    <input
                        id="date"
                        type="text"
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                </fieldset>
            </form>
            <button
                onClick={editExercise}
            >Save</button>
        </div>
    );
}

export default EditExercisePage;