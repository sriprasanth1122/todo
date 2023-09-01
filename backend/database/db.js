import mongoose from 'mongoose'


const Connection =  async () => {
        try {
            const connect = await mongoose.connect(process.env.ATLAS_URL)
            console.log(`Database connected successfully`)
        }
        catch (error) {
            console.log(`Error in MongoDb connection ${error}`)
        }
    }




export default Connection;


    //     const MONGODB_URI = 'mongodb+srv://user:12345@mern-todo.zltswjw.mongodb.net/?retryWrites=true&w=majority'

    //     mongoose.connect(MONGODB_URI, {useNewUrlParse : true});

    //     mongoose.connection.on('connected',() => {
    //         console.log('Dtabase Connected Successfully')
    //     });

    //     mongoose.connection.on('disconnnected', () => {
    //         console.log("Database Disconnected")
    //     });

    //     mongoose.connection.on('error', () => {
    //         console.log('Error while connnecting with the database', error.message)
    //     });