import { ADD_USERS, LOAD_USERS} from '../actions/types'
import {loadUsers,addUser} from '../actions/userAction'

import user from '../api'
import database from '../firebase/config';


import { put, takeEvery, call, all, take, fork } from "redux-saga/effects";
import { eventChannel } from "redux-saga";


function* fetchUserSaga() {
  try {

    const data = yield call(user.get,"/")
    yield put(loadUsers(data ))
  } catch (error) {
    console.log(error)
  }

 }

 function* addUserSaga(action) {
  try {
    const response = yield call(user.post,"/",action.payload);
    yield put(addUser(response));
  } catch (error) {
    console.log(error)
  }
}
function createEventChannel() {
  const userRef = database.ref("users");
  const listener = eventChannel(emit => {
    userRef.on("value", snapshot => emit(snapshot.val() || {}));
    return () => listener.off();
  });
  return listener;
}


function* updateUserSaga() {
  const updateChannel = createEventChannel();
  while (true) {
    const users = yield take(updateChannel);
    yield put(addUser(users));
  }
}

function* watchFecthUser() {
  yield takeEvery(LOAD_USERS, fetchUserSaga);
}

function* watchAddUserSaga() {
  yield takeEvery(ADD_USERS, addUserSaga);
}


export default function* mysaga() {
  yield all([
    call(watchFecthUser),
    call(watchAddUserSaga),
    fork(updateUserSaga)
  ]);
}



