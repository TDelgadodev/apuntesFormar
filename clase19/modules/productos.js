const fs = require('fs');
const path = require('path')


const moduloProductos = {
    archivo : 'productos.json',
    leerJSON : function(){
        const productosJSON = fs.readFileSync(path.join(__dirname,'..','data',this.archivo),'utf-8');
        //console.log(path.join('data','productos.json'))
        //console.log(__dirname)
        const productosParseado = JSON.parse(productosJSON);

        return productosParseado
    },
    guardarJSON: function(array){
        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(array,null,3),'utf-8');
        return "JSON agregado!"
    },
    verDetalle : function (id) {

        if(isNaN(id)){
            return "Debes ingresar un ID válido"
        }

        id = Math.floor(id);

        const productos = this.leerJSON();
/*         for (let i = 0; i < productos.length; i++) {
            if(productos[i].id === id){
                return productos[i]
            }
        } */
        
/*         let productosFiltrados = productos.filter( producto=>{
            return producto.id === id;
        });

        if(productosFiltrados[0]){
            return productosFiltrados;
        } */

        
        let producto = productos.find(producto=>{
            return producto.id === id;
        })

        return producto ? producto : "No hay productos con el ID: " + id
       

    },
    agregarProducto : function(nombre,precio,oferta){

        let errores = [];

        !nombre && errores.push('Debes escribir el nombre del producto!');
        !precio && errores.push('Debes escribir el precio del producto!');
        !oferta ? errores.push('Debes escribir la oferta del producto!') : false;


        if(errores.length){
            return errores
        }


        let productos = this.leerJSON();

        let lastId = productos[productos.length - 1].id;

/*         switch (oferta) {
            case "true":
                oferta = true
                break;
            case "false":
                oferta = false
            default:
                oferta = null
                break;
        } */

        let nuevoProducto = {
            id : lastId + 1,
            nombre: nombre.trim(),
            precio : +precio,
            oferta : oferta === "true" ? true : oferta === "false" ? false : null
        }

        productos.push(nuevoProducto)

        this.guardarJSON(productos);

        return "Producto agregado con éxito!"
    },
    editarProducto : function(id,precio,oferta){
        let productos = this.leerJSON();
     /*    let productosModificados = [];

        productos.forEach(producto => {
            if(producto.id === id){

                productoModificado = {
                    id : producto.id,
                    nombre : producto.nombre,
                    precio : precio,
                    oferta : oferta
                }

                productosModificados.push(productoModificado)
            } else {
                productosModificados.push(producto)
            }
        }); */

        if (!id) {
            return "Se precisa de un ID para continuar con la operacion"
        }
        
        let productosModificados = productos.map(producto => {
            if(producto.id === id){

                productoModificado = {
                    id : producto.id,
                    nombre : producto.nombre,
                    precio : precio ? precio : producto.precio,
                    oferta : oferta === "true" ? true : oferta === "false" ? false : producto.oferta            
                }  

               return productoModificado
            } 
            
            return producto
        });
        this.guardarJSON(productosModificados)

        return productosModificados

    },
    eliminarProducto: function(id){
    
        if(!id){
            return "Se precisa del ID del producto para eliminar el producto"
        }

        if (isNaN(id)) {
            return "El ID no es valido"
        } 

        let productos = this.leerJSON();
        const productosNoEliminados = productos.filter(producto =>
        producto.id != id)

        this.guardarJSON(productosNoEliminados);

        return productosNoEliminados;
},
buscarProducto : function(keyword) {
    if (!keyword) {
        return "Decime que queres buscar..."
    }
    const productos = this.leerJSON();
    const productosFiltrados = productos.filter(producto =>{
        return producto.nombre.toLowerCase().includes(keyword.toLowerCase());
    })

    return productosFiltrados.length ? productosFiltrados : "No resultados para " + keyword;
}


}

module.exports = moduloProductos;