const headers = {
  'Content-Type': 'application/json'
}

export const get = async <T>(signal: AbortSignal, url: string): Promise<T> =>
  fetch(url, { signal, method: 'GET' })
    .then((response) => response ? response.json() : null)
    .catch((error) => error.name === 'AbortError' ? console.info(error) : console.error(error))

export const post = async <T>(signal: AbortSignal, url: string, body = {}): Promise<T> =>
  fetch(url, { signal, headers, method: 'POST', body: JSON.stringify(body) })
    .then((response) => response ? response.json() : null)
    .catch((error) => console.error(error))
