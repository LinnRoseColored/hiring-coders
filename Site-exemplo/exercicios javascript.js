//FizzBuzz
// divisivel por 3 => Fizz
// divisivel por 5=> Buzz
// divisivel por 3 e 5 =>FizzBuzz
// Se não for número => Não é número
// Se não for divisivel nem por 3 nem por 5 => Entrada

let resultado = fizzbuzz()
console.log(resultado)
function fizzbuzz(entrada) {
    if (typeof entrada !== 'number')
    return 'não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
    return 'fizzbuzz' 
    IF (entrada % 3 === 0)
    return 'Fizz' 
    if (entrada % 5 === 0)
    return 'buzz';

    RETURN (entrada)
}