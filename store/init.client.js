export default ({ store }) => {
  const dogs = JSON.parse(localStorage.getItem('dogs') || '[]')
  store.commit('UPDATE_DOGS', dogs)
}
