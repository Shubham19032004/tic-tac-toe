import dotenv from "dotenv";
import connotDB from "./db/index.js";

import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connotDB().them(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`port is running at ${process.env.PORT}`);
  })
  .catch((err)=>{
    console.log(`unable to connect to database ${err}`)
  })
});
