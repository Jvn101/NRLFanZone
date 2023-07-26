const mongoose = require('mongoose');
// const app = express();
// app.use(cors());
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
// const MONGO_PORT = process.env.MONGO_PORT;
// const MONGO_DB = process.env.MONGO_DB;

// const DB_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`


// if(process.env.NODE_ENV === 'production') {
//   db.connect(process.env.MONGODB_URI);
// } else {
//   db.connect(DB_URL);
// }

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://jasmine1:jasmine1@nrlzone.yd574lc.mongodb.net/');


// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb+srv://jasmine:<Jasmine14>@nrlfanzone.hvipevd.mongodb.net/?retryWrites=true&w=majority',

//   //mongodb://127.0.0.1:27017/NRLZone
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );


// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


module.exports = mongoose.connection;