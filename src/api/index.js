import db from './db'
import uniqid from 'uniqid'

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
    if (data.login === 'shrek@gmail.com') {
      return {
        status: 'Forbidden',
        code: 403,
        messages: [
          `Most likely the ${data.login} account has not been registered. Please register it and if it still does not work - contact our support`
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
  }
)

export const fetchBuckets = () => delay(10).then(
  () => {
    const buckets = db.buckets
    return {
      status: 'ok',
      code: 200,
      messages: [],
      data: {
        buckets
      }
    }
  }
)

export const saveBucket = data => delay(10).then(
  () => {
    const bucket = {...data, id: uniqid()}
    //db.buckets.push(bucket)
    return {
      status: 'ok',
      code: 200,
      messages: [],
      data: {
        bucket: bucket
      }
    }
  }
)