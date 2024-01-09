function soma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  }
  
  function subtracao() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  }
  
  function multiplicacao() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  }
  
  function divisao() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
      let resultado = num1 / num2;
      document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
    } else {
      document.getElementById("resultado").innerText = "Erro! Divisão por zero não é permitida.";
    }
  }
  
