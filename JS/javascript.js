function miFuncion(){
    var variableLocal = "Soy una variable local";
    console.log(variableLocal);
}

var variableGlobal = "Soy una variable local";
function funcion(){
    console.log(variableGlobal);
}

var globalVar = 10;
function myFunction(){
    var localVar = 20;
    console.log(localVar);
}
console.log(globalVar);
console.log(localVar);

var num1 = 10;
var num2 = 20;
function suma(){
    res = num1 + num2;
    console.log(res);
    res = num1 * num2;
    console.log(res);
    if(num1>num2)[console.log("numero 1 es mayor"), resu = true, ternaryResult = "Mayor"]
    else[console.log("numero 2 es mayor"), resu= false, ternaryResult="menor o igual"]
    console.log(resu);
    console.log(ternaryResult);
};

horas trabajadas
+40 horas extras pagas 1.5 por hora

var salario = 250000;
var horasExtras = 40;
var bonus = 1.5;

function bonificacion(){
    valor = bonus * horasExtras;
    valor = valor + salario;
    console.log("Al empleado se le pago "+valor);

}