/*Escribe un pequeño programa que muestre un mensaje en consola 
(console.log("Hola Mundo")).

Ejecuta JS en un archivo .html, en la consola del navegador y en Node.js. 
*/
const globalScopeConst = 'Global Const';

function greetUser(aVar){
    let globalScopeLet = 'Hello '
    return globalScopeLet + aVar + '!!'    
}
console.log(greetUser(globalScopeConst));
