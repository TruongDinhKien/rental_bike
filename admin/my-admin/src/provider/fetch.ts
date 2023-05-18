import { HttpError } from 'react-admin'

const fetchJson = async (url: string, options: any = {}) => {
  const requestHeaders =
    options.headers || new Headers({ Accept: 'application/json' })
  if (
    !requestHeaders.has('Content-Type') &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders.set('Content-Type', 'application/json')
  }
  if (options.user && options.user.authenticated && options.user.token) {
    requestHeaders.set('Authorization', `Bearer ${options.user.token}`)
  }
  const response = await fetch(url, { ...options, headers: requestHeaders })
  const text = await response.text()
  const o = {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: text,
  }
  const status = o.status
  const statusText = o.statusText
  const headers = o.headers
  const body = o.body
  let json
  try {
    json = JSON.parse(body)
  } catch (e) {
    // not json, no big deal
  }
  if (status < 200 || status >= 300) {
    throw new HttpError(
      (json && json.error && json.error.message) || statusText,
      status,
      json,
    )
  }
  return Promise.resolve({
    status: status,
    headers: headers,
    body: body,
    json: json,
  })
}

export default (url: string, options: any = {}) => {
  return fetchJson(url, options)
}
