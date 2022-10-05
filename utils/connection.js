const mongoose = require('mongoose')

const connection = async ()=>{
  const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hvgp9ef.mongodb.net/?retryWrites=true&w=majority`
try {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } )

  console.log('db connected')
} catch (error) {
  console.log(error)
}

}

module.exports=connection