// import router from '../router'
import axios from 'axios'

const API  = process.env.ROOT_API
const LOGIN_URL = API + 'login'

export default {
    user: {
        authenticated: false,
        dataLogin: [],
        message: false,
    },

    // get DataAPI
    getdataAPI: API,

    // getSVGSpinner
    svgSpinner: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',

    // login function
    login(creds, redirect) {
        let url = LOGIN_URL
        axios.post(url, creds, {
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, OPTIONS"
            }
        })
        .then((response) => {
            // setData
            if(response.data.code == 500 && response.data.status == 'error'){
                this.user.message = response.data.message
            }else{
                this.dataLogin = response.data.data

                localStorage.setItem('id_token', response.data.data.access_token)
                localStorage.setItem("login", "loggedIn")
                localStorage.setItem("login_name", response.data.data.first_name)

                if(redirect) {
                    // router.go(redirect)
                    window.location.href = ''
                }
            }

        }).catch((err) => {
            // let element = document.getElementById("errorAll")
            // document.getElementById('spinner-login').classList.add('hide')
            // document.getElementById('sign-in-icon').classList.remove('hide')
            // element.classList.remove('hide')
            // element.innerHTML = err
        }).finally(() => {
            // document.getElementById('signin').children[0].innerHTML = 'Simpan'
        })
    },

    // logout function
    logout(type, notif) {
        localStorage.clear()
        this.user.authenticated = false
        window.location.href = ''
        if(type == 'expired-token'){
            localStorage.setItem('logout-message', notif)
        }
    },

    // get Header Authorization function
    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('id_token')
        }
    }
}