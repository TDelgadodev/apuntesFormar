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
    verDetalle : function (id) {

        if(isNaN(id)){
            return "Debes ingresar un ID válido"
        }

        id = Math.floor(id);

        const productos = this.leerJSON();
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].id === id){
                return productos[i]
            }
        }

        return "No hay productos con el ID: " + id

    },
    agregarProducto : function(nombre,precio,oferta){

       /*  if(typeof nombre === "undefined"){
            return 'Debes escribir el nombre del producto!'
        } */
        
      /*   if(nombre === undefined){
            return 'Debes escribir el nombre del producto!'
        } */

         /*   if(!nombre){
            return 'Debes escribir el nombre del producto!'
        }
        if(!precio){
            return 'Debes escribir el nombre del producto!'
        } */

     /*    let validacion;

        validacion = !nombre ? 'Debes escribir el nombre del producto!\n' : "";
        validacion += !precio ? 'Debes escribir el precio del producto!\n' : "";
        validacion += !oferta ? 'Debes escribir la oferta del producto!\n' : "";

        if(validacion){
            return validacion
        } */

        let errores = [];

        !nombre ? errores.push('Debes escribir el nombre del producto!'):
        !precio ? errores.push('Debes escribir el precio del producto!'):
        !oferta ? errores.push('Debes escribir la oferta del producto!') : null;


        if(errores.length){
            return errores
        }


        let productos = this.leerJSON();

        let lastId = productos[productos.length - 1].id;

        let nuevoProducto = {
            id : lastId + 1,
            nombre: nombre.trim(),
            precio : +precio,
            oferta : oferta === "true" ? true: oferta === "false" ? false: null
        }
        productos.push(nuevoProducto)
        fs.writeFileSync(path.join(__dirname, "..","data","productos.json"),JSON.stringify(productos,null,3), "utf-8")
       

        return "Producto agregado con éxito!"
    },
    editarProducto : function(id,precio,oferta){
        let productos = this.leerJSON();
        let productosModificados = [];

        productos.forEach(producto => {
            if (producto.id === id) {
                productoModificado = {
                    id : producto.id,
                    nombre : producto.nombre,
                    precio : precio,
                    oferta : oferta
                }
                productosModificados.push(productoModificado)
            }else{
                productosModificados.push(producto)
            }

        });
    }
}

module.exports = moduloProductos;