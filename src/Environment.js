import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const URI = `https://api.graph.cool/relay/v1/figures`

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {

  return fetch(URI, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  .then(response => response.json())
})

export default new Environment({
  network,
  store,
})