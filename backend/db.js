const mongoose = require("mongoose");
DB_URI="mongodb://127.0.0.1:27017/sr";
mongoose.connect(DB_URI, { useNewUrlParser: true }).then(() => {
    console.log("DB connected on",DB_URI);
  })
  .catch((err) => console.log({ err }));