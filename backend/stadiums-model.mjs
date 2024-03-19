// Models for the Stadium Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Failed to connect to the database. Please check the connection parameters and ensure the server is running.' });
    } else  {
        console.log('Database connection established successfully.');
    }
});

// SCHEMA: Define the collection's schema.
const stadiumSchema = mongoose.Schema({
	name:               { type: String, required: true },
	capacity:           { type: Number, required: true },
	constructionDate:   { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "Stadiums".
const stadiums = mongoose.model('Stadiums', stadiumSchema);


// CREATE model *****************************************
const createStadium = async (name, capacity, constructionDate) => {
    const stadium = new stadiums({ 
        name: name, 
        capacity: capacity, 
        constructionDate: constructionDate
    });
    return stadium.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveStadiums = async () => {
    const query = stadiums.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveStadiumByID = async (_id) => {
    const query = stadiums.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteStadiumById = async (_id) => {
    const result = await stadiums.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateStadium = async (_id, name, capacity, constructionDate) => {
    const result = await stadiums.replaceOne({_id: _id}, {
        name: name,
        capacity: capacity,
        constructionDate: constructionDate
    });
    return {
        _id: _id,
        name: name,
        capacity: capacity,
        constructionDate: constructionDate
    }
}

// EXPORT the variables for use in the controller file.
export { createStadium, retrieveStadiums, retrieveStadiumByID, updateStadium, deleteStadiumById }