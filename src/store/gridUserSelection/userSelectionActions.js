import * as constants from './userSelectionConstants'

export const setSelectedUser = (id) => ({
  type: constants.SET_SELECTED_USER,
  payload: id
})

export const setSelectedUsers = (array) => ({
  type: constants.SET_SELECTED_USERS,
  payload: array
})

export const setSelectedAdmin = (id) => ({
  type: constants.SET_SELECTED_ADMIN,
  payload: id
})

export const setSelectedWithdrawal = (id) => ({
  type: constants.SET_SELECTED_WITHDRAWAL,
  payload: id
})

export const setSelectedBonus = (id) => ({
  type: constants.SET_SELECTED_BONUS,
  payload: id
})

export const setSelectedTicket = (id) => ({
  type: constants.SET_SELECTED_TICKET,
  payload: id
})