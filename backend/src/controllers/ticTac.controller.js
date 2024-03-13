
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const ticTac=asyncHandler(async(req,res)=>{
    return res.status(200)
    .json(
        new ApiResponse(
          200,
          "efwrw",
          " a user"
        )
      );
})


export {ticTac};