# Nodejs_Express_Mongo_Docker_REST_API_Project
This is CRUD Rest API project build using Node.js Express, Mongo running on docker container for user management.

Add connection string first from drivers
mongoose.connect(
  "mongodb+srv://admin:admin@rajcluster.twcoi6w.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=rajCluster"
).then (() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err.message);
});

Node-Api - Name of collection

                User - Name of table


 const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }, 
});

const UserModel = mongoose.model("User", userSchema);

To connect in local copy the string of MOngoDb for VS code
mongodb+srv://admin:admin@rajcluster.twcoi6w.mongodb.net/