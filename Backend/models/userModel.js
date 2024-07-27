const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

<<<<<<< HEAD
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'An account holder must have a name']
    },
    email:{
        type:String,
        required:[true,'An account holder must have an email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'The email address is not valid']
    },
    // photo:String,
    password:{
        type:String,
        required:[true,'An account requires a password'],
        minlength:8,
        select:false
    },
    confirmPassword:{
        type:String,
        required:[true,'An account needs to confirm password'],
        validate:[function(el){
            return el===this.password;
        },'Password and confirm Password do not match']
    },
    role:{
        type:String,
        enum:['user','admin','trainer'],
        default:'user'
    },
    passwordChangedAt:Date,
    passwordResetToken: String,
    passwordResetTokenExpires : Date
});
=======
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    womenId:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Women"
      }
    ]
  },
  { timestamps: true }
);
>>>>>>> main

userModel.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

userModel.pre('find', function() {
  this.populate('womenId');
});

userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userModel);

module.exports = User;
