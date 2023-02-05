class Smartphone {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDescription() {
    return `The ${this.name} costs ${this.price}`;
  }
}

class Android extends Smartphone {
  getVersion() {
    return 12;
  }
}

class iOS extends Smartphone {
  getVersion() {
    return 15;
  }
}

// Sample usage - do not modify
const galaxy = new Android("Galaxy", 400);
galaxy.getDescription(); // "The Galaxy costs 400"
galaxy.getVersion(); // 12 (always for android phones)

const iphone = new iOS("iPhone", 500);
iphone.getDescription(); // "The iPhone costs 500"
iphone.getVersion(); // 15 (always for iOS phones)
