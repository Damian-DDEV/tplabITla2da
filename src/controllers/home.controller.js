const homeController = {
    get: async (req, res) => {

        return res.render('../views/home/index')
    }
}


module.exports = homeController;