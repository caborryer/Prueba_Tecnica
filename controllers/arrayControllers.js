const logger = require("../utils/logger");

class arrayController {
  constructor() {}

  //Ordenando números de manera ascendente
  asc(req, res, next) {
    let numbers = [34, 20, 4, 100];

    let sortAsc = numbers.sort(function(a, b) {
      return a - b;
    });
    res.status(200).json({
      message: "Sort generado",
      sortAsc
    });
    logger.info("ordenados de forma ascendente:" + sortAsc);
  }

  // Ordenando números de forma descendente
  desc(req, res, next) {
    let numbers = [500, 20, 10, 5, 34];

    let sortDesc = numbers.sort(function(a, b) {
      return b - a;
    });

    res.status(200).json({
      message: "Sort generado",
      sortDesc
    });
    logger.info("ordenados de forma descendente:" + sortDesc);
  }

  //Generando números de manera aleatoria
  mix(req, res, next) {
    let numbers = [40, 100, 1, 5, 25, 10];

    let sorMix = numbers.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    res.status(200).json({
      message: "Sort generado",
      sorMix
    });
    logger.info("ordenados de forma aleatoria:" + sorMix);
  }
}

module.exports = arrayController;
