const asyncHandler1 = (fn) => (req,res,next) =>{
    Promise.resolve(fn(req,res,next))
    .catch((error) => {
        next(error)}
    );
}

export {asyncHandler1,asyncHandler2 }

const asyncHandler2 = (fn) => async (req,res,next) =>{
    try{
        await fn(req,res,next);
    }
    catch(error){
        res.status(error.code || 500).json({
            sucess:false,
            message :error.message
        })
    }
}