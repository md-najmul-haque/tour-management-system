const connection = ()=>{

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://`${process.env.DB_USER}`:`${process.env.DB_PASS}`@cluster0.hvgp9ef.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("server running form utils")
  client.close();
});

}

module.exports=connection