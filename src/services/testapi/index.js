/**
 * Class for handling requests to the test endpoint of the backend
 */
class TestAPI{
  constructor(){
    this.url = "http://127.0.0.1:5000/api/test";
  }

  /**
   * Gets a response from the test endpoint, currently just an incremented number
   * @returns {Promise<Response>} a (number, status) tuple
   */
  get(){
    const request = new Request(this.url, {
      method:"GET",
      mode: "cors"
    });

    return fetch(request);
  }
}

export default new TestAPI();