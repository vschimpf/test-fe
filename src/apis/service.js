const http = require('http')

export default {
  getFromApi (parameters = '') {
    return new Promise((resolve, reject) => {
      let results = null
      const searchOptions = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/items' + parameters,
        method: 'GET'
      }
      const httpsReq = http.request(searchOptions, httpsRes => {
        let response = ''
        httpsRes.on('data', d => {
          response += d
        })
        httpsRes.on('end', function () {
          results = JSON.parse(response)
          resolve(results)
        })
      })
      httpsReq.on('error', error => {
        reject(error)
      })

      httpsReq.end()
    })
  }
}
