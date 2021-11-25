import mongoose from "mongoose";

const MongoDbURL = "cluster0.1altu.mongodb.net";
const databaseName = "polleada";
const connectionString = `mongodb+srv://Ivivoda86:45663166@${MongoDbURL}/${databaseName}?retryWrites=true`;

export const configureDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Conectado base de datos");
  } catch (error) {
    console.log(error);
  }
};
