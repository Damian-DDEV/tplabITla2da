let usuario = [
    {
        'id':0,
        'nombre':'pepe'
    },
    {
        'id':1,
        'nombre':'juan'
    },
    {
        'id':2,
        'nombre':'jony'
    }
]

const index = async (req, res, next) => {
    try {
        return res.render('../src/views/usuario/index', {usuario});
    } catch (error) {
        return next(error);
    }
};

const show = async (req, res, next) => {
    try {
        let idParam = req.params.id;
        let Idparseado = parseInt(idParam);
        let existeUsuario = usuario.findIndex(i => i.id === Idparseado);
        let elemento = usuario[existeUsuario];
        return res.render('../src/views/usuario/show', {elemento});
    } catch (error) {
        return next(error);
    }
};

const edit = async (req,res) => {
    try {
        let idParam = req.params.id;
        let Idparseado = parseInt(idParam);
        let existeUsuario = usuario.findIndex(i => i.id === Idparseado);
        let elemento = usuario[existeUsuario];
        return res.render('../src/views/usuario/edit', {elemento});
    } catch (error) {
        return next(error);
    }
};

const create = async (req,res) => {
    try {
        return res.render('../src/views/usuario/create');
    } catch (error) {
        return next(error)
    }
};

//API

const store = async (req,res) => {
    const {nombre,id} = req.body;
    if (nombre) {
        usuario.unshift({id,nombre})
        return res.status(200).json({'status':200, id, nombre, 'msg':'usuario creado correctamente'})
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
};

const update = async (req, res, next) => {
    try {
        const {nombre} = req.body;
        let idParam = req.params.id;
        let Idparseado = parseInt(idParam);
        let existeUsuario = usuario.findIndex(i => i.id === Idparseado)
        const actualizado = usuario.splice(existeUsuario,1,{ 'id':existeUsuario,'nombre':nombre });
        return res.status(201).json({'status':201, actualizado, 'msg':'usuario editado correctamente'});
    } catch (error) {
        return next(error)
    }
};

const destroy = async (req, res, next) => {
    try {
        let idParam = req.params.id;
        let Idparseado = parseInt(idParam);
        let existeUsuario = usuario.findIndex(i => i.id === Idparseado);
        const eliminado = usuario.splice(existeUsuario,1);
        return res.status(200).json({'status':200,eliminado, 'msg':'usuario eliminado correctamente'});
    } catch (error) {
        return next(error)
    }
};

module.exports = {
    index,
    create,
    show,
    edit,
    store,
    destroy,
    update
};