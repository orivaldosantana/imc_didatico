function calculaIMC() {
    let peso, altura;

    peso = parseFloat(document.getElementById("peso").value)
    altura = parseFloat(document.getElementById("altura").value)

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
}
