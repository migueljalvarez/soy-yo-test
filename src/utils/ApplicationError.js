class ApplicationError extends Error {
  constructor(name, message, status) {
    super(message);
    this.name = name ? name : this.constructor.name;
    this.message = message;
    this.status = status || 400;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default ApplicationError;
