class ManbookProtocol {

  constructor() {
    this.sharedData = []
  }

  shareData(agent, data) {
    const record = {
      agent,
      data,
      time: new Date()
    }

    this.sharedData.push(record)

    return record
  }

  getAllData() {
    return this.sharedData
  }

}

module.exports = ManbookProtocol
