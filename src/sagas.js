// import axios from 'axios';
// import { call, put, takeEvery, all } from 'redux-saga/effects';
// import {ADD_USERS, USER_FETCH_REQUESTED} from '../actions/types'
const ROOT_URL = 'https://jsonplaceholder.typicode.com/users;'
// const API_KEY = '?key=edgar1234';

// export function* fetchUsers() {
//   try {
//     const todos = yield call(axios.get, `${ROOT_URL}/posts${API_KEY}`);
//     yield put({ type: 'FETCH_User_SUCCESS', todos})
//   } catch (error) {
//     console.log('fetchTodos error:', error.message)
//   }
// }

// function* watchFetchUsers() {
//   yield takeEvery('FETCH_Users', fetchUsers)
// }

// export function* createTodo(action) {
//   const newTodo = { title: '', categories: '', content: action.payload };
//   try {
//     yield call(axios.post, `${ROOT_URL}/posts${API_KEY}`, newTodo);
//     yield put({type:'FETCH_TODOS'});
//   } catch (error) {
//     console.log('createTodo error:', error.message);
//   }
// }

// function * watchAddToDo() {
//   yield takeEvery('ADD_TODO', createTodo)
// }
