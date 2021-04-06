export const state = () => ({
  breeds: {},
  filterLetter: '',
  filterTerm: '',
  dogs: [],
})

export const mutations = {
  SET_BREEDS(state, message) {
    state.breeds = message
  },
  UPDATE_DOGS(state, message) {
    if (Array.isArray(message)) {
      state.dogs = message
    } else {
      if (!state.dogs.includes(message)) {
        state.dogs.push(message)
      } else {
        state.dogs = state.dogs.filter((dog) => dog !== message)
      }
      if (process.browser)
        localStorage.setItem('dogs', JSON.stringify(state.dogs))
    }
  },
  FILTER_BY_LETTER(state, message) {
    if (state.filterLetter === message) {
      state.filterLetter = ''
    } else {
      state.filterLetter = message
    }
  },
  FILTER_BY_TERM(state, message) {
    state.filterTerm = message
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { message } = await fetch(
      'https://dog.ceo/api/breeds/list/all'
    ).then((response) => response.json())
    const formattedResponse = Object.keys(message).map((key) => ({
      name: key,
      sub: message[key],
    }))
    commit('SET_BREEDS', formattedResponse)
  },
}
