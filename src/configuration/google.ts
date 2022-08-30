const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_KEY
// eslint-disable-next-line max-len
const GOOGLE_PLACES_SCRIPT = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_PLACES_API_KEY}&libraries=places`

export default {
  GOOGLE_PLACES_API_KEY,
  GOOGLE_PLACES_SCRIPT,
  addressConfig: {
    script: GOOGLE_PLACES_SCRIPT,
    searchOptions: {
      types: ['address'],
      bounds: {
        north: 51.1241999,
        east: 9.6624999,
        south: 41.31433,
        west: -5.5591,
      },
    },
  },
}
