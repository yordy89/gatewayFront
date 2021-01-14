import { SET_GATEWAY, ADD_GATEWAY, REMOVE_GATEWAY, EDIT_GATEWAY, GET_GATEWAY } from './actions'

const initialState = {
    gateways: []
}

export default function GatewayReducer(state = initialState, actions) {
    switch (actions.type) {
        case GET_GATEWAY:
            return { ...state, gateways: actions.payload }
        case SET_GATEWAY:
            return { ...state, gateways: actions.payload }
        case ADD_GATEWAY:
            return { ...state, gateways: [...state.gateways, actions.payload] }
        case REMOVE_GATEWAY:
            return { ...state, gateways: state.gateways.filter(c => c._id !== actions.payload._id) }
        case EDIT_GATEWAY:
            return {
                ...state, gateways: state.gateways.map(gateway => {
                    if (gateway._id === actions.payload._id) {
                        gateway = { ...gateway, ...actions.payload }
                    }
                    return gateway
                })
            }
        default:
            return state
    }
}

export const setGateways = (Gateways) => (dispatch) => {
    dispatch({
        type: SET_GATEWAY,
        payload: Gateways
    })
}

export const addGateway = (gateway) => (dispatch) => {
    dispatch({
        type: ADD_GATEWAY,
        payload: gateway
    })
}

export const removeGateway = (gateway) => (dispatch) => {
    dispatch({
        type: REMOVE_GATEWAY,
        payload: gateway
    })
}

export const editGateway = (gateway) => (dispatch) => {
    dispatch({
        type: EDIT_GATEWAY,
        payload: gateway
    })
}

export const getGateway = () => async (dispatch) => {
    const gateways = await fetch(`${process.env.REACT_APP_API_URL}/gateway`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    });
    dispatch({
        type: GET_GATEWAY,
        payload: await gateways.json()
    })
}