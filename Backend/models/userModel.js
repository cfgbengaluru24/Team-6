const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    ],
    role:{
        type:String,
        enum:['user','admin','trainer'],
        default:'user'
        },
  },
  { timestamps: true }
);

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
