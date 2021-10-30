module.exports = (sequelize, DataTypes) => {
  const glucose = sequelize.define("glucose", {
    labels: {
      type: DataTypes.STRING,
    },
    datasets: {
      type: DataTypes.STRING,
    },
  });

  return glucose;
};
