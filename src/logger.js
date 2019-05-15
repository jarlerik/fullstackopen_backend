const log = (message) => {
  const logLine = typeof message === 'object' ? JSON.stringify(message) : message;
  // eslint-disable-next-line no-console
  console.log(logLine);
};

const error = (message) => {
  const logLine = typeof message === 'object' ? JSON.stringify(message) : message;
  // eslint-disable-next-line no-console
  console.error(logLine);
};

module.exports = {
  log,
  error,
};
