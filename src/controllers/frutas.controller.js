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

const index = async (req,res) => {
    return await res.render('../src/views/frutas/index', { frutas });
};

const show = async (req,res) => {

    //TODO: ME DEVUELVE UNDEFINED EL EXISTE FRUTA, Y CUADO BORRO UN ELEMENTO DEL ARRAY ME PASA EL SIGUIENTE 
    console.log('EL PARAM',req.params.id)
    const id = req.params.id
    let existeFruta = frutas.find(element => element.id === id);
    console.log('EXISTE FRUTA',existeFruta)
    const elemento = frutas[id]
    console.log('EL ELEMENTO',elemento)
    return await res.render('../src/views/frutas/show', {elemento});
};

const edit = async (req,res) => {
    const id = req.params.id
    const elemento = frutas[id]
    
    return await res.render('../src/views/frutas/edit', {elemento});
};

const create = async (req,res) => {
    return await res.render('../src/views/frutas/create');
};


const store = async (req,res) => {
    const {nombre,id} = req.body;
    if (nombre) {
        frutas.unshift({id,nombre})
        return res.status(200).json({'status':200, id, nombre, 'msg':'creado correctamente'})
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
};

const update = async (req,res) => {
    const {nombre} = req.body;
    const id = req.params.id;
    if (id) {
        const actualizado = frutas.splice(id,1,{'id':id,'nombre':nombre})
        return res.status(201).json({'status':201, actualizado, 'msg':'Fruta editada correctamente'})
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
};

const destroy = async (req,res) => {
    const id = req.params.id;
    eliminado = frutas.splice(id,1)
    return res.status(200).json({'status':200,eliminado, 'msg':'Fruta eliminada correctamente'})
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
