import * as exercises from './exercises_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());


/**
 * Create a new exercise with the name, reps, weight, unit, and date provided in the body
 */
app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            //console.error(error);
            res.status(500).json({ Error: `Creation of an exercise document failed due to: ${error}` });
        });
});

app.get('/exercises', (req, res) => {
    let filter = {};

    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.status(200).json(exercises)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: `Retrieval of exercise documents failed due to: ${error}` });
        });  
});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * the values provided in the body.
 */
app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: `Updating exercise document failed due to: ${error}` });
        });    
});

/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: `Deleting exercise document failed due to: ${error}` });
        });    
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});