
import Api from './Api'
import Csrf from './Csrf'

export default {
    register(form) {
        return Api().post('/api/register', form)
    },
    login(form) {
        return Api().post('/api/login', form)
    },
    logout() {
        return Api().post('/api/logout')
    },
    auth() {
        return Api().get('/api/user')
    }
}
