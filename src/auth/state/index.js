import { AuthStatus } from '../../common/constant';
import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from '../../common/redux-helper';

export const Types = {
  SetValue: 'auth/SetValue',
  FetchLogin: 'auth/FetchLogin',
  SetUser: 'auth/SetUser',
};

// Action Creater Function
export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchLogin: (name, password) => ({
    type: Types.FetchLogin,
    name,
    password,
  }),
  setUser: name => ({
    type: Types.SetUser,
    name,
  }),
};

const INITIAL_STATE = {
  name: '',
  status: undefined,
};
const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.SetUser]: (state, action) => {
    state.name = action.name;
    state.status = action.name ? AuthStatus.Login : AuthStatus.NotLogin;
  },
});
export default reducer;
