// 6. Herança de Interfaces
// TypeScript permite que interfaces herdem outras interfaces, facilitando a criação de contratos complexos.

interface Vehicle {
  speed: number;
  drive(): void;
}

interface ElectricVehicle extends Vehicle {
  batteryLevel: number;
  charge(): void;
}

export default class Tesla implements ElectricVehicle {
  speed: number;
  batteryLevel: number;

  constructor(speed: number, batteryLevel: number) {
    this.speed = speed;
    this.batteryLevel = batteryLevel;
  }

  drive(): void {
    console.log(`Driving at ${this.speed} km/h`);
  }

  charge(): void {
    console.log(`Charging... Battery level is ${this.batteryLevel}%`);
  }
}

const myTesla = new Tesla(120, 80);
myTesla.drive(); // Driving at 120 km/h
myTesla.charge(); // Charging... Battery level is 80%
