
import axios from 'axios'


// const API = "https://us-central1-enye-form-challage-3.cloudfunctions.net/firebaseusers"

// export const  fetchData = async () => {
//     try {
//         const response = await axios.get(API)
//         const data = response.data
//         return data
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
  
// export const  AddData = async () => {
//     try {
//         const response = await axios.post(API)
//         const data = response.data
//         return data
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
export default axios.create({
  baseURL:  "https://us-central1-enye-form-challage-3.cloudfunctions.net/firebaseusers"
});

