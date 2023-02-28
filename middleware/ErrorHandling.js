// function userError((req, res, next) => {
//     res.status(404).json({
//       message: 'Not Found'
//     });
//   });

//   function serverError((err, req, res, next) => {
//     res.status(500).json({
//       message: 'Internal Server Error'
//     });
//   });

// Error Handling
function errorHandling(err, req, res, next) {
    if(err) {
        const status = err.status || 500;
        res.status(status).json(
            {
                status: status,
                err: "An error occurred. Please try again later."
            });
    }
    next();
}
module.exports = {errorHandling};
  