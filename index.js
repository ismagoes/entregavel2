function contador(){
    var NumeroDeAlunos = prompt("Informe quantos alunos que fizeram a prova:");
    var Nota;
    var Contador = 0;
    var i = 0;

    while (i < NumeroDeAlunos) {
    Nota = prompt("Indique cada nota individualmente");

    if (Nota >= 6) {
    Contador = Contador + 1;
    }

    i = i + 1;
    }
    document.getElementById("MostrarResultados").innerHTML = ("Número de alunos que passaram no exame: " + Contador);
}

function fibonacci(){
    var n = prompt("Indique quantos termos terá a sequência Fibonacci:");
    
    var valorA= 0;
    var valorB = 1;
    var valorC;
    var resultados = (valorA + "," + valorB);
    
    for (i = 3; i <= n; i++)
    {
        valorC = valorA + valorB;
        resultados += ("," + valorC);
        valorA = valorB;
        valorB = valorC;
    }
    document.getElementById("MostrarResultados").innerHTML = (resultados);
    }

    function Mdc(){
        var ValorMDCa = prompt("Informe o primeiro valor:");
        var ValorMDCb = prompt("Informe o segundo valor:");
    
        for(let i = ValorMDCa; i>0; i--){
           if (ValorMDCa % i == 0 && ValorMDCb % i == 0){
            document.getElementById("MostrarResultados").innerHTML = ('O MDC de ' + ValorMDCa + ' e de ' + ValorMDCb + ' é ' + i);
           }
        }
    }

    function Ordenacao(){
        var numbers = [0,1,2,3,30,7,16,4,240];
        numbers.sort();
        document.getElementById("MostrarResultados").innerHTML = (numbers);
     }

     function Primo(){
        function NumeroPrimo(num) {
            var numeros = new Array();
            for (var i = 0; i <= num; i++) {
              if (Eprimo(i)){
                numeros.push(i);
              }
            }
            return numeros;
          }
          function Eprimo(num) {
            for(let i = 2; i <num; i++)
              if(num % i === 0) {
                  return false
              };
            return num > 1;
          }
          document.getElementById("MostrarResultados").innerHTML = (NumeroPrimo(23));
     }
 
     function Somatorio(){
        var n = prompt("Informe a quantidade de números:");
        var num;
        var Soma = 0;
        var i = 0;
        
        while (i < n) {
            num = parseInt(prompt("Informe um número"));
            Soma = Soma + num;
            i = i + 1;
        }
        
        document.getElementById("MostrarResultados").innerHTML = ("A Soma dos " + n + " números é " + Soma);
     }