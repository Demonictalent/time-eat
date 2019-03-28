export const ADD_USERINFO = 'ADD_USERINFO';



export const addUserInfo = info => ({
  type: 'ADD_USERINFO',
  info
})

export const editUserInfo = info => ({
  type: 'EDID_USERINFO',
  info
})