console.log("Schleifen Aufgaben");
// console.log("Schleifen Aufgabe 1");

/*
  1. Gebt mir bitte alle Quadratzahlen von 0 bis 1000 aus
  2. Ungerade Zahlen von 0 bis 1000
  3. Gerade Zahlen von 0 bis 1000
*/


function quadratzahlen(n) {
  for (let x = 1; x <= n; x = x + 1) {
    console.log(x * x);
  }
}
// quadratzahlen(10)

// console.log("Schleifen Aufgabe 2");


function ungerade(n) {
  for (let x = 1; x <= n; x = x + 2) {
    console.log(x);
  }
}

// ungerade(100);

//console.log("Schleifen Aufgabe 3");

function gerade(n) {
  for (let x = 0; x <= n; x = x + 2) {
    console.log(x);
  }
}

// gerade(100);


function geradeMitIF(n) {
  for (let x = 0; x <= n; x = x + 1) {
    if (x % 2 != 0) {
      console.log("Ist gerade", x);
    } else {
      console.log("Ist ungerade", x);
    }
  }
}

// geradeMitIF(1000);


console.log("Funktions Aufgaben");
/*
  Funktion:

    1. begruessung(namen) // gebt euren Namen aus :  Ich begrüße dich, NAME :
    2. Schreibt die oben gennannten Sachen als Funktion
    3. Primzahlen testen (übergebt einer Funktion eine Zahl und Sie wertet aus ob es eine Primzahl ist)
    4. Gebt die Fibonacci Reihenfolge aus
*/

function begruessung(name) {
  console.log("Ich begrüße dich " + name);
}

// begruessung("Dominik");


function Primzahl (y){
  let teiler=0;
  for(let x=1; x<=y; x++){
    if(y%x==0){
      teiler++;
    }
  }
  
  if ( teiler == 2 ) {
    console.log(y+" ist eine Primzahl.")
  } else {
    console.log(y+" ist keine Primzahl.")
  }
}

function PrimzahlOpt (y){
  let teiler=0;
  for(let x=1; x<=y / 2; x++){
    if(y%x==0){
      teiler++;
    }
  }
  
  if ( teiler == 1 ) {
    console.log(y+" ist eine Primzahl.")
  } else {
    console.log(y+" ist keine Primzahl.")
  }
}

function PrimzahlOpt2 (y){
  let isPrim = true;
  for(let x=2; x<=y / 2 && isPrim; x++){
    if(y%x==0){
      isPrim = false;
    }
  }
  
  if ( isPrim ) {
    console.log(y+" ist eine Primzahl.")
  } else {
    console.log(y+" ist keine Primzahl.")
  }
}

/*
console.time("Primzahl 10000");
Primzahl(7988993);
console.timeEnd("Primzahl 10000");

console.time("Primzahl opt 10000");
PrimzahlOpt(7988993);
console.timeEnd("Primzahl opt 10000");

console.time("Primzahl opt 10000");
PrimzahlOpt2(7988993);
console.timeEnd("Primzahl opt 10000");
*/


function Fibonacci (y, ganzeReihe){
    let fib2=1;
    let fib1=0;
    let neuerFib=1;
    if (ganzeReihe==true){
        console.log(fib1);
        console.log(fib2);
while(neuerFib<=y)
{
console.log(neuerFib);
neuerFib=fib1+fib2;
fib1= fib2;
fib2=neuerFib;
 
}
}else{
    while (neuerFib<=y){
 
neuerFib=fib1+fib2;
fib1= fib2;
fib2=neuerFib;
}while (neuerFib<=y);
console.log(fib1);
  }
}



function Fibonacci (y, ganzeReihe){
  let fib2=1;
  let fib1=0;
  let neuerFib=1;
  if (ganzeReihe==true){
    console.log(fib1);
    while(neuerFib<=y)
    {
      console.log(neuerFib);
      neuerFib=fib1+fib2;
      fib1= fib2;
      fib2=neuerFib;
    }
  }else{
    while (neuerFib<=y){
      neuerFib=fib1+fib2;
      fib1= fib2;
      fib2=neuerFib;
    }
  }
}

function fibo(n, ganzeReihe) {
  let fib1 = 0;
  let fib2 = 1;
  let neuFib = fib1 + fib2;

  while (neuFib <= n) {
    if (ganzeReihe) {
      console.log(fib2);
    }
    fib1 = fib2;
    fib2 = neuFib;
    neuFib = fib1 + fib2;
  }
  console.log(fib2);
  return fib2;
}

function isFibo(n) {
  return fibo(n) === n;
}

function fiboRec(n) {
  if (n <= 1) {
    return 1;
  }
  return fiboRec(n - 1) + fiboRec(n - 2);
}

// Fibonacci(100, true);
fibo(100, true);

let meineFiboZahl = fibo(100, false);

console.log(isFibo(88));


console.log(fiboRec(10));