import login from '../../api/login'
import * as types from '../mutation-types'
// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  loging:false,
  checkoutStatus: null,
  is_vailed: false
}
// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  is_vailed: state => state.is_vailed,
  loging: state => state.loging
}
// actions
const actions = {
  
  checkCaptcha ({commit,state}, p) {
    // state.loging = true;
    // console.info(p);
    commit(types.CHANGE_LOGING_STATUS,true);
    login.checkC(
      p,
      (rsp) => commit(types.CHECK_CAPTCHA, rsp)
    )
  }
  // ,
  // changeLogingStatus ({commit}) {

  // }
}
// mutations
const mutations = {
  [types.CHECK_CAPTCHA] (state, payload) {
    console.info(payload);
    state.is_vailed = true;
   
    state.loging = false;
  },
  [types.CHANGE_LOGING_STATUS] (state) {
      state.loging = !state.loging;
  },
  [types.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },
  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },
  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}