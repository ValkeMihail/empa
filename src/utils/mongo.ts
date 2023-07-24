import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb://localhost:27017";
const DATABASE_NAME = "local";



let connectedClient : MongoClient | undefined = undefined;


export const connectClient = async () => {
  if (connectedClient) {
    return connectedClient.db(DATABASE_NAME);
  }
  const client = new MongoClient(MONGODB_URI);
  await client.connect();


  connectedClient = client; 

  return connectedClient.db(DATABASE_NAME);
}

export const stopClient = async () => {
  if (connectedClient) {
    await connectedClient.close();
    connectedClient = undefined;
  }
}
