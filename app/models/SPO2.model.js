module.exports = (sequelize, DataTypes) => {
  const spo2 = sequelize.define("spo2", {
    date: {
      type: DataTypes.STRING,
    },
    count: {
      type: DataTypes.STRING,
    },
  });

  return spo2;
};
