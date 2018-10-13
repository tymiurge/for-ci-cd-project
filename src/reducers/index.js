import user from './user'
import registration from './registration'

const reducer = (state = {}, action) => ({
    user: user(state.user, action),
    registration: registration(state.registration, action)
})

export default reducer
