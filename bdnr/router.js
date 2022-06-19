const Router = require("koa-router");
const router = new Router();
const VehiculoController = require("./vehiculoController")
const vehiculoController = new VehiculoController();

router.post("/vehiculo", async (ctx,next) =>
  await vehiculoController.addVehiculo(ctx,next)
);

router.get("/vehiculo", async (ctx) =>
  await vehiculoController.getAll(ctx)
);

module.exports = router;
