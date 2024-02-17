const { getRequest, postRequest, deleteRequest, putRequest } = require('./requests')


export default class BikeAdminPanelRepository {
  constructor(url) {
    this.url = url
  }

  getBikes() {
    return getRequest(this.url).then(res => res['bikes'])
  }

  addBike(bike) {
    return postRequest(this.url, {bike: bike})
  }

  deleteBike(bike) {
    return deleteRequest(this.url + '/' + bike.id, {bike: bike})
  }

  updateBike(bike) {
    return putRequest(this.url + '/' + bike.id, {bike: bike})
  }
}