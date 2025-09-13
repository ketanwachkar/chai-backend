const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}



export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}} //i want to pass func in another function
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (func) => async () => {}

// asyncHandler is a function that takes func as input.
// It returns another function () => {} (an empty arrow function).

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }





const asyncHandlers = (fn) => () => {}