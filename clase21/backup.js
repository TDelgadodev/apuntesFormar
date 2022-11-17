const autos = require("./autos");
const personas = require("./personas")
const concecionarias = {
    autos,
    
    buscarAutos:(patente)=>{
        
        let autoEncontrado = autos.find(auto => auto.patente === patente)
        return autoEncontrado ? autoEncontrado : null;

    }, 
    venderAuto : function(patente){
    let auto = this.buscarAutos(patente)
    auto.vendido = true;
    return auto

    },
    autosParaLaVenta : function(){
         return this.autos.filter(auto => auto.vendido === false)
    },
    autosNuevos : function(){
        return this.autosParaLaVenta().filter(auto => auto.km <= 100);
    }, 
    listaDeVentas: function() {
        let autosVendidos = this.autos.filter(auto => auto.vendido === true)
        let precios = autosVendidos.map(auto => auto.precio)
        return precios
    },
    totalDeVentas: function(){
        let total = this.listaDeVentas().reduce((auto,auto2) => {
            return auto + auto2;
         }, 0)
         return total;
    },
    puedeComprar : function(persona,auto){ 
        //console.log(persona);
        console.log(this.buscarAutos(auto));
        let autos = this.buscarAutos(auto)
        return(persona.capacidadDePagoEnCuotas > (autos.precio / autos.cuotas) && persona.capacidadDePagoTotal > autos.precio)
       
    }
   
}

console.log(concecionarias.puedeComprar(personas[1],"FFF030"))

