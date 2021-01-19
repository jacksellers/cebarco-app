import axios from 'axios';

export default class Client {
  // Request ------------------------------------------------------------------
  request(method, endpoint, data = undefined) {
    const config = {
      method: method,
      url: 'https://cebarco.com/api/' + endpoint,
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    }
    return axios(config)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return error;
    });
  }
  // Articles -----------------------------------------------------------------
  listArticles() {
    return this.request('get', 'articles/');
  }
  // Executives -----------------------------------------------------------------
  listExecutives() {
    return this.request('get', 'executives/');
  }
  // Projects -----------------------------------------------------------------
  listProjects() {
    return this.request('get', 'projects/');
  }
}
