import { act } from "react-dom/cjs/react-dom-test-utils.production.min"
let timer = ''

export const setNotification = (message, time) => {

    time = time * 1000

    return async dispatch => {

        dispatch({
            type: 'SET_NOTIFICATION',
            data: { message }
        })
        clearTimeout(timer)

        timer = setTimeout(() =>
            dispatch({
                type: 'HIDE_NOTIFICATION',
            }), time)
    }
}

const notificationReducer = (state = '', action) => {

    switch (action.type) {

        case 'SET_NOTIFICATION':

            state = action.data.message
            return state

        case 'HIDE_NOTIFICATION':
            state = ''
            return state

        default: return state
    }
}

export default notificationReducer