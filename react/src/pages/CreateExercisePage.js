import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lb');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const createExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers:{
                'Content-type': 'application/json',  
            },
        });
        if (response.status === 201){
            alert("Successfully added the exercise");
        } else{
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Add Exercise</legend>
                        <label for="name">Exercise</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name of exercise"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                        <label for="reps">Repetitions</label>
                        <input
                            id="reps"
                            type="number"
                            value={reps}
                            placeholder="Number of reps"
                            onChange={e => setReps(e.target.value)} />
                        <label for="weight">Weight</label>
                        <input
                            id="weight"
                            type="number"
                            placeholder="Enter weight here"
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
                            placeholder="MM-DD-YY"
                            value={date}
                            onChange={e => setDate(e.target.value)} />
                </fieldset>
            </form>
            <button
                onClick={createExercise}
            >Add</button>
        </div>
    );
}

export default CreateExercisePage;