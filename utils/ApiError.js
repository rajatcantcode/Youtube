class ApiError extends Error {
  constructor(
    statusCode,
    message = "Kuch Toot Gaya 😂", // Default error message
    error = [], // Optional additional error details
    stack = "" // Optional stack trace
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.success = false; // Indicate that the response is not successful
    this.data = null; // Default data to null for uniformity in response structure

    if (stack) {
      this.stack = stack;
    }
  }
}
