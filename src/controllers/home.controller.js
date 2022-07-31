const homeController = {
    get: async (req, res, next) => {
        try {
            return res.render('../views/home/index')
        } catch (error) {
            return next(error)
        }
    }
}


module.exports = homeController;