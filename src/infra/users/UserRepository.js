import userMock from '@/infra/users/__mock__/Users.json'

function getUsers() {
  return Promise.resolve(userMock)
}

export default {
  getUsers
}
