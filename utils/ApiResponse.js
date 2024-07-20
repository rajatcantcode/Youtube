class ApiResponse {
  constructor(statuscode, data, messege = "Success") {
    this.statuscode = statuscode;
    this.data = data;
    this.messege = messege;
    // Determine if the response is successful based on the status code
    // 200-299 are successfull responses codes
    this.success = statuscode >= 200 && statuscode < 300;
  }
}
