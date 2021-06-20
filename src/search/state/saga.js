import { all, put, call, takeEvery, takeLeading } from 'redux-saga/effects';
import { actions, Types } from '.';
import { callApi } from '../../common/util/api';
import { makeFetchSaga } from '../../common/util/fetch';

function* fetchAutoComplete({ keyword }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/search',
    params: { keyword },
  });

  if (isSuccess && data) {
    yield put(actions.setValue('autoCompletes', data));
  }
}

function* fetchAllHistory() {
  const { isSuccess, data } = yield call(callApi, {
    url: '/history',
  });

  if (isSuccess && data) {
    yield put(actions.setValue('history', data));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([
    takeEvery(
      Types.FetchAutoComplete,
      makeFetchSaga({ fetchSaga: fetchAutoComplete, canCache: true })
    ),
    takeLeading(
      Types.FetchAllHistory,
      makeFetchSaga({ fetchSaga: fetchAllHistory, canCache: false })
    ),
  ]);
}
