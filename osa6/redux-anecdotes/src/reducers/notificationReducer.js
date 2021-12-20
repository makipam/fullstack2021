const initialNotification ={ message: '', visible: false }

export const notificationChange = message => {
    return {
        type: 'SET_NOTIFICATION',
        message,
        visible: true
    }
}

export const hideNotification = () => {
    return {
        type: 'SET_HIDDEN',
        message: '',
        visible: false
    }
}

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {...state, visible: true, message: action.message}
        case 'SET_HIDDEN':
            return {...state, visible: false}
        default:
            return state
    }
}

export default notificationReducer