const ctrlMiddleware = (ctrl) => {
    return async(req, res, next) =>{
        try {
            ctrl(req, res, next);
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ctrlMiddleware;