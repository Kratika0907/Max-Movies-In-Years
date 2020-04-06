 function validateSet(input, output) {
     if (input.size != output.length) {
         return false;
     } else {
         for (let i of output) {
             if (input.has(i)) {
                 input.delete(i)
             }
         }
     }
     return input.size == 0;

 }

 module.exports = validateSet;