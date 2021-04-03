var peso;

peso = parseFloat(prompt("Entre com o peso:"))
altura = parseFloat(prompt("Entre com o altura:"))

imc = peso / (Math.pow(altura, 2))

if (imc < 18.5) {
    alert("Abaixo do peso")
} else {

    if (imc < 25) {
        alert("Peso normal")
    } else {
        if (imc < 30) {
            alert("Sobrepeso")
        } else {
            alert("Obesidade")
        }
    }
}
