const { getDepots, getVehicles } = require("../services/apiService");
const solveKnapsack = require("../services/knapsackService");
const Log = require("../../middleware/logger");

const getSchedule = async (req, res) => {
  try {

    await Log(
      "backend",
      "info",
      "controller",
      "Fetching depots and vehicles"
    );

    const depots = await getDepots();
    const vehicles = await getVehicles();

    const result = depots.map((depot) => {
      const schedule = solveKnapsack(
        depot.MechanicHours,
        vehicles
      );

      return {
        depotId: depot.ID,
        mechanicHours: depot.MechanicHours,
        maxImpact: schedule.maxImpact,
        selectedVehicles: schedule.selectedVehicles
      };
    });

    await Log(
      "backend",
      "info",
      "service",
      "Vehicle schedule generated successfully"
    );

    res.status(200).json(result);

  } catch (error) {

    await Log(
      "backend",
      "error",
      "controller",
      error.message
    );

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getSchedule
};