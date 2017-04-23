const defaultState = {
  username: ''
}

export default function reducers(state = defaultState, action) {
  switch (action.type) {
    case 'SIGNUP':
      return {
        username: action.data.user
      }
    case 'LOGIN':
      return {
        username: action.data.user.username
      }
    default: return state;
  }
}
