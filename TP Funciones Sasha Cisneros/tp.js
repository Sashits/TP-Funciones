/*
1) Crear una funcion que calcule el cuadro de un numero.
2) Crear una funcion que calcule el cubo de un numero.
3) Crear una funcion por cada una de las siguientes opecariones:
a) x^2-x-10
b) (x-3)*2
c) x*x^2+20
d) (x/2)+5
e) x^3+x^2+10
f) (x*10)+5
*/


1
function Cuadrado (num)
{
 console.log (num * num)
}
Cuadrado (12)


2
function Cubo (num)
{
 console.log (num * num * num)
}
Cubo (12)


3
1
function operacionA(x)
{
    let resultado = (x*x) - x - 10
    //let resultado = Cuadrado(x) - x - 10
    return resultado
}
console.log(operacionA (5))


function operacionB (x)
{
    let resultado = (x-3)*2
    return resultado
}
console.log(operacionB (5))


function operacionC (x)
{
    let resultado = (x*x^2)+20
    return resultado
}
console.log(operacionC (5))


function operacionD (x)
{
    let resultado = (x/2)+5
    return resultado
}
console.log(operacionD (5))


function operacionF (x)
{
    let resultado = (x*10)+5
    return resultado
}
console.log(operacionF (5))

