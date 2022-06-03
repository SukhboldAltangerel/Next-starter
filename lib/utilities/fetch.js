export function fetchQuery(query) {
    return fetch('/api/graphql', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    })
}
