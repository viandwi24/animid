export default [
  {
    method: 'GET',
    url: '/carousel',
    response: require('./seed/carousel.json')
  },
  {
    method: 'GET',
    url: '/anime/highlighted',
    response: require('./seed/anime_highlighted.json')
  }
]
