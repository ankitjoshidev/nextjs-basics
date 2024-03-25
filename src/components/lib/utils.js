import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect("mongodb+srv://ankitjoshi66259:<password>@cluster0.3au20ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
