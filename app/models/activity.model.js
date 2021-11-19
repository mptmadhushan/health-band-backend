module.exports = (sequelize, DataTypes) => {
  const glucose = sequelize.define("glucose", {
    bicycle: {
      type: DataTypes.STRING,
    },
    swim: {
      type: DataTypes.STRING,
    },
    run: {
      type: DataTypes.STRING,
    },
  });

  return glucose;
};
