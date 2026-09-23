import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// dotenv.config({
//   path: "./.env",
// });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is started at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error dur to Mongo Db");
  });
