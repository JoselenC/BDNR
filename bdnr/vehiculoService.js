const Repository = require("./src/repositories/repository");

module.exports = class VehiculoService {
  constructor() { 
    this.repository = new Repository()
  }

  async addVehiculo(data) {
    this.repository.add()
  }
};
