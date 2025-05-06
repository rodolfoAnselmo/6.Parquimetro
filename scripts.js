// Classe Parquimetro com apenas um método
class Parquimetro {
    constructor(valor) {
      this.valor = Number(valor); // Converte para número
    }
  
    calcular() {
      if (this.valor < 1) {
        return "Valor insuficiente. Mínimo: R$1,00";
      }
  
      let tempo = 0;
      let troco = 0;
  
      if (this.valor < 2) {
        tempo = 30;
        troco = this.valor - 1;
      } else if (this.valor < 3) {
        tempo = 60;
        troco = this.valor - 1.75;
      } else {
        tempo = 120;
        troco = this.valor - 3;
      }
  
      return `Tempo: ${tempo} minutos<br>Troco: R$ ${troco.toFixed(2)}`;
    }
  }
  
  // Função executada ao clicar no botão
  function simular() {
    const valor = document.getElementById("valor").value;
    const resultado = document.getElementById("resultado");
  
    const parquimetro = new Parquimetro(valor);
    resultado.innerHTML = parquimetro.calcular();
  }
  
