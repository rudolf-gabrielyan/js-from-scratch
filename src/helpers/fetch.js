export function fetchAPI({
    url = '',
    method = 'GET',
    body = {},
    headers = {},
    success = () => {},
    error = () => {},
    complete = () => {}
}) {
    return fetch(
        url,
        {   
            method,
            headers,
            body
        }
    )
    .then(success)
    .catch(error)
    .finally(complete);
}

