import user from './user'

const reducer = (state = {}, action) => ({
    user: user(state.user, action)
})

export default reducer
