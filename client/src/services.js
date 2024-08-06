import { getRequest, postRequest, deleteRequest, putRequest } from './requests'


class ValidationError extends Error {
  
}


export default class BikeService {
  constructor(url) {
    this.url = url
  }

  async getBikes() {
    return getRequest(this.url).then(res => res['bikes'])
  }

  async addBike(bike) {
    return postRequest(this.url, {bike: bike}).then((response) => {
      if (response && response.message) {
        throw new ValidationError(response.message)
      }
    })
  }

  async deleteBike(bike) {
    return deleteRequest(this.url + '/' + bike.id, {bike: bike})
  }

  async updateBike(bike) {
    return putRequest(this.url + '/' + bike.id, {bike: bike})
  }
}