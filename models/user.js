const mongoose = require ('mongoose'), Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.connect ('mongodb://abdurrehman:mann1998@ds243344.mlab.com:43344/restapi', { useNewUrlParser: true });

const UserSchema = new Schema ({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  firstName: {type: String},
  lastName: {type: String},
});

const User=mongoose.model ('User', UserSchema);
module.exports=User;