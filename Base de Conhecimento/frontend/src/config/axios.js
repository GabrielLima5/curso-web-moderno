import axios from 'axios'

const success = res => res
const error = e => {
    if (401 === e.response.status){
        window.location = '/'
    } else {
        return Promise.reject(e)
    }
}

axios.interceptors.response.use(success, error)