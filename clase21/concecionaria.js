const autos = require("./autos")
const personas = require("./personas")
const concecionarias = {
    autos,
    
    buscarAutos:(patente)=>{
/*         for (let i = 0; i < autos.length; i++) {
            if (autos[i].patente === patente) {
                return autos[i]
            }
        }
        return null */
      /*   let autoEncontrado = null;
        autos.forEach(auto =>{  
            if(auto.patente === patente){
                autoEncontrado = auto
            }
        });
        return autoEncontrado */
        
        let autoEncontrado = autos.find(auto => auto.patente === patente)
        return autoEncontrado ? autoEncontrado : null;

    }, 
    venderAuto : function(patente){
 /*    const autosActualizados = this.auto.map(auto => {
        if (auto.patente === patente) {
            let autoActualizado = {
                ...auto,
                vendido: true
            }
            return autoActualizado
        }
        return auto
    })

    return autosActualizados */
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
        
        return this.listaDeVentas().reduce((acum,num)=>{
            return acum + num
        })
    },
    puedeComprar : function(persona,patente){
        let {precio,cuotas} = this.buscarAutos(patente);
        let valorCuota = precio / cuotas;
        let {capacidadDePagoEnCuotas,capacidadDePagoTotal} = persona;
        console.log(persona);
        console.log(patente);
        if(capacidadDePagoEnCuotas >= valorCuota && capacidadDePagoTotal >= precio){
            return `${persona.nombre} puede comprar!!`
        }
        return `${persona.nombre} sorry`
    }
   
}

console.log(concecionarias.puedeComprar(personas[0],"FFF030"))

