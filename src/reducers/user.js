import {
    USER_LOGIN_REQUEST,
    SIGN_UP_REQUEST
} from './action-names'

const credentials = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return action.credentials
        default:
            return state
    }
}

const signUpDetails = (state = {}, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return action.details
        default:
            return state
    }
}

const user = (state = {}, action) => ({
    credentials: credentials(state.credentials, action),
    signUpDetails: signUpDetails(state.signUpDetails, action)
})

export default user
/*

import * as api from './../api'

const COSMOS_CONTENT_REQUEST = 'cosmos/content/request'
const CARD_ADDED = 'card/add/request'
const FETCH_COMPLETE = 'cosmos/fetch/complete'


const fetchMade = (state = false, action) => {
    switch (action.type) {
        case FETCH_COMPLETE:
            return true
        default:
            return state
    }
}

const content = (state = [], action) => {
    switch (action.type) {
        case COSMOS_CONTENT_REQUEST: 
            return action.content
        case CARD_ADDED:
            return [...state, action.card]
        default: 
            return state
    }
}

const cosmos = (state = {}, action) => ({
    fetchMade: fetchMade(state.fetchMade, action),
    content: content(state.content, action)
})

export default cosmos

// ***************************************************************
// *************************** ACTIONS ***************************
// ***************************************************************


export const fetchContent = parentId => dispatch => 
    api.fetchCards(parentId).then(content => {
        dispatch({
            type: COSMOS_CONTENT_REQUEST,
            content
        })
        dispatch({
            type: FETCH_COMPLETE
        })
    }) 

export const saveCard = card => dispatch => 
    api.saveCard(card).then(savedCard => dispatch({
        type: CARD_ADDED,
        card: savedCard
    }))

 */