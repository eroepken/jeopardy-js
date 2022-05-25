import camelcaseKeys from 'camelcase-keys'
import { isArray } from 'lodash'
import { URLSearchParams } from 'url'

const baseURL = 'https://jservice.io/api/'
type APIPath = 'random' | 'category' | 'categories'

const isCacheSupported = 'caches' in window
const makeURL = ( path: APIPath, params: URLSearchParams ) => `${baseURL}${path}?${params.toString()}`

const callAPI = ( url: string, cacheName: string) => {
  console.log('calling jService...')
  return fetch( url )
    .then(( res ) => res.json())
    .then(( data ) => isArray( data ) ? data.map(( v ) => camelcaseKeys( v )) : camelcaseKeys( data ))
    .then(( data ) => {
      if ( isCacheSupported ) {
        caches.open( cacheName ).then(( cache ) => cache.put( url, new Response( JSON.stringify( data ))))
      }
      return data
    })
}

export const getData = (
  urlName: APIPath,
  params: URLSearchParams,
  callback: CallableFunction
) => {
  if ( !callback ) return

  const cacheName = `jservice-${urlName}`
  const url = makeURL( urlName, params )

  if ( isCacheSupported ) {
    console.log('pulling cache')
    return caches.open( cacheName ).then(( cache ) => (
      cache.match( url ).then(( cachedResponse ) => (
        ( !cachedResponse ) ?
          callAPI( url, cacheName ).then(( data ) => callback( data )) :
          cachedResponse.json().then(( data ) => callback( data ))
      ))
    ))
  }

  return callAPI( url, cacheName ).then(( data ) => callback( data ))
}