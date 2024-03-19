// Controllers for the Stadium Collection

import 'dotenv/config';
import express from 'express';
import * as stadiums from './stadiums-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/stadiums', (req, res) => {
    stadiums.createStadium(
        req.body.name, 
        req.body.capacity, 
        req.body.constructionDate
    )
    .then(stadium => {
        console.log(`"${stadium.name}" added to collection.`);
        res.status(201).json(stadium);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to add the stadium. Please try again.' });
    });
});


// RETRIEVE controller ****************************************************
app.get('/stadiums', (req, res) => {
    stadiums.retrieveStadiums()
        .then(stadiums => { 
            if (stadiums !== null) {
                console.log(`All stadiums were retrieved from the collection.`);
                res.json(stadiums);
            } else {
                res.status(404).json({ Error: 'Unique and specific error message.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve stadiums. Please try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/stadiums/:_id', (req, res) => {
    stadiums.retrieveStadiumByID(req.params._id)
    .then(stadium => { 
        if (stadium !== null) {
            console.log(`"${stadium.name}" was retrieved, based on its ID.`);
            res.json(stadium);
        } else {
            res.status(404).json({ Error: 'Stadium not found with the provided ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve the stadium. Please check the ID and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/stadiums/:_id', (req, res) => {
    stadiums.updateStadium(
        req.params._id, 
        req.body.name, 
        req.body.capacity, 
        req.body.constructionDate
    )
    .then(stadium => {
        console.log(`"${stadium.name}" was updated.`);
        res.json(stadium);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update the stadium. Please check your input and try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/stadiums/:_id', (req, res) => {
    stadiums.deleteStadiumById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} stadium was deleted.`);
                res.status(200).send({ Success: 'Stadium successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Stadium not found with the provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete the stadium. Please check the ID and try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});