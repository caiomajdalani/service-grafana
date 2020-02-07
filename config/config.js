const { ENVIRONMENT } = process.env;

module.exports = app => {
  return require(`./config.${ENVIRONMENT}.js`);
};
  