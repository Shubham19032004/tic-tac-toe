
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const ticTac=asyncHandler(async(req,res)=>{
    return res
    .json(
        new ApiResponse(
          200,
          "efwrw",
          "not a user"
        )
      );
})


export {ticTac};