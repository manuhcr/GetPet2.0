function dispararConfetes() {
    const config = {
      particleCount: 150,
      startVelocity: 30,
      spread: 150,
      scalar: 1 // tamanho
    };
  
    // esquerda
    confetti({
      ...config,
      origin: { x: 0, y: 0.5 }
    });
  
    // direita
    confetti({
      ...config,
      origin: { x: 1, y: 0.5 }
    });
  }
export default dispararConfetes()