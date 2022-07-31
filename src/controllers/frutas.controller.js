let frutas = [
    {
        id: 0,
        nombre: 'manzana'
    },
    {
        id: 1,
        nombre: 'naranja'
    },
    {
        id: 2,
        nombre: 'pera'
    },
    {
        id: 3,
        nombre: 'banana'
    },
    {
        id: 4,
        nombre: 'kiwi'
    },
    {
        id: 5,
        nombre: 'frutilla'
    },
    {
        id: 6,
        nombre: 'mandarina'
    },    {
        id: 7,
        nombre: 'anana'
    },    {
        id: 8,
        nombre: 'mango'
    },    {
        id: 9,
        nombre: 'maracuya'
    },
    
]

const index = async (req, res, next) => {
    try {
        return await res.render('../src/views/frutas/index', { frutas });
    } catch (error) {
        return next(error);
    }
};

const show = async (req, res, next) => {
    try {
        let idParam = req.params.id;
        let Idparseado = parseInt(idParam);
        let existeFruta = frutas.findIndex(i => i.id === Idparseado)
        let elemento = frutas[existeFruta]
        return await res.render('../src/views/frutas/show', { elemento });
    } catch (error) {
        return next(error);
    }
};

const edit = async (req, res, next) => {
    try {
        let idParam = req.params.id;
        let Idparseado = parseInt(idParam);
        let existeFruta = frutas.findIndex(i => i.id === Idparseado)
        let elemento = frutas[existeFruta]
        return await res.render('../src/views/frutas/edit', { elemento });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        return await res.render('../src/views/frutas/create');
    } catch (error) {
        return next(error);
    }
};


const store = async (req, res, next) => {

    try {
        const {nombre,id} = req.body;

        if (nombre) {
            frutas.unshift({id,nombre})
            return res.status(200).json({ 'status':200, id, nombre, 'msg':'fruta creada correctamente' });
        } else {
            return res.status(404).json({ 'msg':'No se recibieron los datos' });
        }
        
    } catch (error) {
        return next(error);
    }

};

const update = async (req, res, next) => {
    try {
        const {nombre} = req.body;
        let idParam = req.params.id;
        let Idparseado = parseInt(idParam);
        let existeFruta = frutas.findIndex(i => i.id === Idparseado)
        const actualizado = frutas.splice(existeFruta,1,{ 'id':existeFruta,'nombre':nombre });
        return res.status(201).json({'status':201, actualizado, 'msg':'fruta editada correctamente'});

    } catch (error) {
        return next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        let idParam = req.params.id;
        let idParseado = parseInt(idParam);
        let existeFruta = frutas.findIndex(i => i.id === idParseado)
        let eliminado = frutas.splice(existeFruta,1);
        return res.status(200).json({ 'status':200,eliminado, 'msg':'fruta eliminada correctamente' });
    } catch (error) {
        return next(error);
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
