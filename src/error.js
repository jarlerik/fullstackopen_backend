function AppError(
  {
    name, message, fileName, lineNumber, status,
  },
) {
  const instance = new Error(message);
  instance.name = name;
  instance.status = status;
  instance.lineNumber = lineNumber;
  instance.fileName = fileName;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, AppError);
  }
  return instance;
}

module.exports = AppError;
