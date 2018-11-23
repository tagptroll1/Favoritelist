const DEFAULT_URL = "http://127.0.0.1:5000/api/reddit/";

/**
 * Class to interact with the Reddit endpoint of the backend
 */
class Reddit{
  /**
   * Allows a different url be passed as a base api reference
   * @param url to be used in the class.
   */
  constructor(url=DEFAULT_URL) {
    if (!url.endsWith("/")) url += "/";
    this.url = url;
}

  /**
   * Method for requesting a subreddit based on name e.g: "r/funny" or "cats"
   * @param name to be requested
   * @returns {Promise<Array>} The response in the form of a json
   */
  async getSub(name) {
    if (name.startsWith("r/")) {
      name = name.slice(2);
    }

    // Build the query url, and Request to be fetched
    const getUrl = `${this.url}${name}`;
    const request = new Request(getUrl, {
      method: 'GET',
      mode: 'cors' // We query the backend with cors to avoid getting blocked.
    });

    const response = await fetch(request);

    // Something was not right, throw an error
    if (!response.ok) {
      throw new Error(
        `Reddit Service - getSub(${name}) failed with status ${response.status}`
      );
    }
    const json = await response.json();

    // Nothing was received, throw an error
    if (json.posts === null || json.posts.length <= 0) {
      throw new Error(
        `Reddit Service - getSub(${name}) had no children`
      );
    }

    return json.posts
  };
}

export default new Reddit();