var valor1, valor2, operacao;

$(document).on("click","#num1",function(){
 var num1 = 1;
 var resul = $("#resultado").val();
 $("#resultado").val(resul + num1);
});

$(document).on("click","#num2",function(){
var resul = $("#resultado").val();
var num2 = 2;
$("#resultado").val(resul + num2);
});

$(document).on("click","#num3",function(){
var num3 = 3;
var resul = $("#resultado").val();
$("#resultado").val(resul + num3);
});

$(document).on("click","#num4",function(){
var num4 = 4;
var resul = $("#resultado").val();
$("#resultado").val(resul + num4);
});

$(document).on("click","#num5",function(){
var num5 = 5;
var resul = $("#resultado").val();
$("#resultado").val(resul + num5);
});

$(document).on("click","#num6",function(){
var num6 = 6;
var resul = $("#resultado").val();
$("#resultado").val(resul + num6);
});

$(document).on("click","#num7",function(){
var num7 = 7;
var resul = $("#resultado").val();
$("#resultado").val(resul + num7);
});

$(document).on("click","#num8",function(){
var num8 = 8;
var resul = $("#resultado").val();
$("#resultado").val(resul + num8);
});

$(document).on("click","#num9",function(){
var num9 = 9;
var resul = $("#resultado").val();
$("#resultado").val(resul + num9); 
});

$(document).on("click","#num0",function(){
var num0 = 0;
var resul = $("#resultado").val();
$("#resultado").val(resul + num0);
});


$(document).on("click","#soma",function(){
valor1 = parseFloat($("#resultado").val());
$("#resultado").val("");
operacao = "soma";
});

$(document).on("click","#subtracao",function(){
valor1 = parseFloat($("#resultado").val());
$("#resultado").val("");
operacao = "subtracao";
});

$(document).on("click","#multiplicacao",function(){
valor1 = parseFloat($("#resultado").val());
$("#resultado").val("");
operacao = "multiplicacao";
});

$(document).on("click","#divisao",function(){
valor1 = parseFloat($("#resultado").val());
$("#resultado").val("");
operacao = "divisao";
});

$(document).on("click","#porcentagem",function(){
valor1 = parseFloat($("#resultado").val());
$("#resultado").val("");
operacao = "porcentagem";
});

$(document).on("click","#raiz",function(){
valor1 = parseFloat($("#resultado").val());
$("#resultado").val(Math.sqrt(valor1));
});

$(document).on("click","#elevado",function(){
valor1 = parseFloat($("#resultado").val());
$("#resultado").val("");
operacao = "elevado";
});


$(document).on("click","#igual",function(){
  
    valor2 = parseFloat($("#resultado").val());
    if(operacao == "soma"){
      $("#resultado").val(valor1 + valor2);
    }
    else
    if(operacao == "subtracao"){
      $("#resultado").val(valor1 - valor2);
    }
    else
    if(operacao == "multiplicacao"){
      $("#resultado").val(valor1 * valor2);
    }
    else
    if(operacao == "divisao"){
      $("#resultado").val (valor1 / valor2);
    }
    else
    if(operacao == "porcentagem"){
      $("#resultado").val((valor1 * valor2) / 100);
    }
    else
    if(operacao == "elevado"){
     $("#resultado").val(Math.pow(valor1, valor2));
    }   
    else
    if(operacao == "raiz"){
     $("#resultado").val(Math.sqrt(valor1));
    }   
});

$(document).on("click","#limpar",function(){
  $("#resultado").val("");
});

