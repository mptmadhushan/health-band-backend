module.exports = (sequelize, DataTypes) => {
  const blood = sequelize.define("blood", {
    labels: {
      type: DataTypes.STRING,
    },
    datasets: {
      type: DataTypes.STRING,
    },
  });

  return blood;
};
