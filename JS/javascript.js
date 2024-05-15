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

var diaDeLaSemana = "viernes";
switch (diaDeLaSemana) {
 case "lunes":
 console.log("Hoy es lunes.");
 break;
 case "martes":
 console.log("Hoy es martes.");
 break;
 case "miércoles":
 console.log("Hoy es miércoles.");
 break;
 case "jueves":
 console.log("Hoy es jueves.");
 break;
 case "viernes":
 console.log("Hoy es viernes.");
 break;
 case "sábado":
 console.log("Hoy es sábado.");
 break;
 case "domingo":
 console.log("Hoy es domingo.");
 break;
 default:
 console.log("No es un día válido.");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
   }

   let j = prompt("ingrese el numero","");
   while (j <= 10) {
    var num = num + j;
    console.log(num);
    j++;
   }

   let k = 1;
   do {
    console.log(k);
    k++;
   } while (k <= 5);
   
   let factor = prompt("Ingrese numero",);
   var ss = 0;
   var cc = 1;
   do{ss= ss*cc}while(cc<=factor);
i=1;
   for(i<=50){
    var parr = 0;
    var impar =0;
var resul = i%2
if(resul == 0){parr++}else{impar++}
i++}
console.log("la cantidad de numeros pares fueron " + parr + "y los impares " + impar);