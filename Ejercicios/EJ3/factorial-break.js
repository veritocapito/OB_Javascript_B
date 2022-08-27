//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
factorial = 1;
i = 10;

while (i > 0) {
    factorial *=i;
    i--;
    if ( i == 5){
        break;
    }
};

console.log(factorial)