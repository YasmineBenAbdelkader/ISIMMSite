const mongoose = require ("mongoose")
const bcrypt = require('bcryptjs')


const baseOptions = {
    discriminatorKey: "itemtype",
    collection: "users"
}


const userSchema= new mongoose.Schema({

    
    
},baseOptions, {timestamps:true}
)

// Define the comparePassword function on the User schema
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};
  
  

mongoose.models = {}
module.exports=mongoose.model("users",userSchema)