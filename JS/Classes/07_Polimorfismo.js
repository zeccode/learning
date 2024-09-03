// 7. Polimorfismo
// Polimorfismo permite que métodos em classes derivadas possam ter diferentes comportamentos 
// apesar de compartilharem o mesmo nome com métodos em classes base.

class Shape {
  draw() {
    console.log('Drawing a shape');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle');
  }
}

class Square extends Shape {
  draw() {
    console.log('Drawing a square');
  }
}

const shapes = [new Circle(), new Square()];

shapes.forEach(shape => shape.draw());
// Saída:
// Drawing a circle
// Drawing a square

//   Aqui, o método draw() é sobrescrito nas classes Circle e Square, demonstrando polimorfismo.