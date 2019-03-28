import { GET_USER } from '../actions/actionType'

const defaultValue = {
  username: null,
  account: '',
  email: '',
  userId: ''
}

const userInfo = (state = defaultValue, action) => {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, action.info)
    case 'CHANGE_AVATARURL':
      return Object.assign({}, state, action.info)
    default:
      return state
  }
}
export default userInfo