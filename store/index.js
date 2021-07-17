export const state = () => ({
  safemode: true
})

export const mutations = {
  togglesafemode() {
    state.safemode = !state.safemode
  }
}
