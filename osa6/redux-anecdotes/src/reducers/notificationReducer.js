export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            message: message,
            visible: true
        })
        setTimeout(() => {
            dispatch({ type: 'SET_HIDDEN' })
          }, time*1000)
    }
}

const notificationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {...state, message: action.message, visible: action.visible}
        case 'SET_HIDDEN':
            return {...state, visible: false}
        default:
            return state
    }
}

export default notificationReducer