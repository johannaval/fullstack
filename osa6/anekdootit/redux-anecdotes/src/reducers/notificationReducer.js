import { act } from "react-dom/cjs/react-dom-test-utils.production.min"


export const setNotification = (message) => {

    return ({
        type: 'SET_NOTIFICATION',
        data: { message }
    })
}

export const hideNotification = () => {

    return ({
        type: 'HIDE_NOTIFICATION',
    })
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