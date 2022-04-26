module.exports = (message, status = 200) => {
  const response = {
    status,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {}
  }

  if (typeof message === 'object') {
    response.body = message
  } else if ((status / 100 | 0) === 2) {
    response.body.message = message
  } else {
    response.body.error = message
  }

  return response
}
