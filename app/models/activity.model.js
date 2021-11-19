module.exports = (sequelize, DataTypes) => {
  const activity = sequelize.define("activity", {
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

  return activity;
};
