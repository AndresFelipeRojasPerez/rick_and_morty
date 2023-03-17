'use strict';

function BinarioADecimal(num) {
   let acumulador = 0;
   for(let i = 0 ; i < num.length ; i++){
      acumulador = acumulador + (num[i] * (2 ** ((num.length-1)-i)))
   }
   return acumulador;
}

function DecimalABinario(num) {
   let resultadoBinario = ""
    while (num > 0) {
        resultadoBinario = (num % 2) + resultadoBinario
        num = Math.floor(num / 2);
    }
    return resultadoBinario

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
