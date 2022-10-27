const dividir = function(a,b){
    return a === 0 || b === 0 ? "No se puede dividir por cero" : a / b;
}

module.exports = dividir;