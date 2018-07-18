import { TEST } from './type'
export const actions = {
  async [TEST] (store, param) {
    store.commit(TEST, param)
  }
}
