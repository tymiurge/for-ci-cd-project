const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const registerUser = data => delay(30).then( () => {
  if (data.mail === 'shrek@gmail.com') {
    return {
      status: 'email_address_in_use',
      code: 380,
      messages: [
        `A user with ${data.mail} mail is already registered.`
      ],
      data: {
      }  
    }
  }
  return {
    status: 'ok',
    code: 200,
    messages: [],
    data: {
      confirmed: true
    }
  }
})

export const loginUser = data => delay(10).then(
  () => {
    return {
      status: 'ok',
      code: 200,
      messages: [],
      data: {
        confirmed: true
      }
    }
  }
)