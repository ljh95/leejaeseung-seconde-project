// @ts-nocheck
import { all, call, put, takeLeading } from 'redux-saga/effects';
import { actions, Types } from '.';
import { callApi } from '../../common/util/api';
import { makeFetchSaga } from '../../common/util/fetch';

function* fetchLogin({ name, password }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/auth/login',
    method: 'post',
    data: {
      name,
      password,
    },
  });

  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    takeLeading(
      Types.FetchLogin,
      makeFetchSaga({ fetchSaga: fetchLogin, canCache: false })
    ),
  ]);
}
