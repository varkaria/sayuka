export const state = () => ({
  vanillamode: true,
  safemode: true,
  favorite: [],
  history: []
})

export const mutations = {
  tvanillamode (state) {
    state.vanillamode = !state.vanillamode
  },
  tsafemode (state) {
    state.safemode = !state.safemode
  },
  addtohistory (state, doujin) {
    if (state.history.length !== 0) {
      if (state.history[0].id === doujin.id) { console.log(2); return }
      const i = state.history.findIndex( u => u.id === doujin.id )
      if (i !== -1) { state.history.splice(i, 1); console.log(3) } 
      else if (state.history.length === 20) {state.history.splice(state.history.length - 1, 1); console.log(4)}
    }
    state.history.unshift(doujin)
  },
  resethistory (state) {
    state.history = []
  }
}