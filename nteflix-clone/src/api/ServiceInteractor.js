import ServiceFactory from "./ServiceFactory";
class ServiceInteractor {
  getMovies(url) {
    let urlComplete = `${ServiceFactory.routeApi}${url}`;

    return new Promise((resolve, reject) => {
      fetch(urlComplete, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default ServiceInteractor;
