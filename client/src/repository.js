import { getRequest, postRequest, deleteRequest, putRequest } from './requests'


class ValidationError extends Error {
  
}


export default class BikeAdminPanelRepository {
  constructor(url) {
    this.url = url
  }

  getBikes() {
    return getRequest(this.url).then(res => res['bikes'])
  }

  addBike(bike) {
    return postRequest(this.url, {bike: bike}).then((response) => {
      if (response && response.message) {
        throw new ValidationError(response.message)
      }
    })
  }

  deleteBike(bike) {
    return deleteRequest(this.url + '/' + bike.id, {bike: bike})
  }

  updateBike(bike) {
    return putRequest(this.url + '/' + bike.id, {bike: bike})
  }
}