// 10. Construtores e Propriedades Automáticas
// Em TypeScript, você pode definir e inicializar propriedades diretamente nos 
// parâmetros do construtor, tornando o código mais conciso.

class Point {
  constructor(public x: number, public y: number) { } // Inicialização automática
}

const point = new Point(10, 20);
console.log(point.x, point.y); // 10 20
