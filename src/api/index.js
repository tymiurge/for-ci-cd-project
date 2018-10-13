const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const registerUser = data => delay(30).then( () => {
  return {
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      confirmed: true
    }
  }
})