export const state = () => ({
  safemode: true
})

export const mutations = {
  tsafemode (state) {
    if (state.safemode === true) {
      state.safemode = false
    } else {
      state.safemode = true
    }
  }
}