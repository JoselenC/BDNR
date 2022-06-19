const Repository = require("./src/repositories/repository");

module.exports = class VehiculoController {
  
  constructor() {
    this.repository = new Repository()
  }

   addVehiculo(ctx) {
    try {
      let data = ctx.request.body;
      let message =  Repository.add();
      ctx.body = {data: message};
    } catch (err) {
      ctx.status = 400;
      ctx.body = { status: 400, message: err.message };
    }
  }

   async getAll(ctx) {
    try {
      let message =  await this.repository.getAllVehiculos()
      console.log(message)

      ctx.body = {data: message};
    } catch (err) {
      ctx.status = 400;
      ctx.body = { status: 400, message: err.message };
    }
  }

};
