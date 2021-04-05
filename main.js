function calculaIMC() {
    let peso, altura;

    peso = parseFloat(document.getElementById("peso").value)
    altura = parseFloat(document.getElementById("altura").value)

    imc = peso / (Math.pow(altura, 2))

    let resultado = ""
    if (imc < 18.5) {
        resultado = "Abaixo do peso"
    } else {
        if (imc < 25) {
            resultado = "Peso normal"
        } else {
            if (imc < 30) {
                resultado = "Sobrepeso"
            } else {
                resultado = "Obesidade"
            }
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}
