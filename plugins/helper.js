function fakeHttp(instanceOptions = {}) {
  const defaultOptions = {
    method: 'GET',
    url: '',
  }
  const options = Object.assign({}, defaultOptions, instanceOptions)
  const router = require('@/api/router').default

  // search options in router
  const route = router.find(route => {
    return (route.method === options.method && route.url === options.url)
  })

  // build response
  const formatResponse = (route) => {
    const response = {
      status: 200,
      data: undefined,
    }

    if (Array.isArray(route.response)) {
      response.data = route.response
    } else if (typeof route.response === 'object') {
      response.data = route.response
    } else {
      response.data = route.response
    }

    return response
  }


  // return promise
  return new Promise((resolve, reject) => {
    if (route) {
      resolve(formatResponse(route))
    } else {
      reject(new Error('Route not found'))
    }
  })
}

export default function({ app }, inject) {
  inject('http', fakeHttp)
  inject('sleep', (ms) => new Promise(resolve => setTimeout(resolve, ms)))
}
