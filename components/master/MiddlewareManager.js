import React, {Component} from 'react'
import Axios from 'axios'
//import {REACT_APP_MIDDLEWARE} from 'react-native-dotenv'
//import SweetAlert from 'react-native-sweet-alert';
const MainHost = 'https://simplymeds-express.herokuapp.com';
class MiddlewareManager extends Component {
    PostData = async (data, method, callback) => {
        var response = {}
        var host = 'https://simplymeds-express.herokuapp.com';
        var host2 = 'http://10.0.2.2:8081'
        try {
            await Axios.post(MainHost+method, data)
                .then(res => {
                    result = res;
                    callback(result)
                })
        } catch (error) {
            response.Error = error.message;
        }
        return response
    }

    Notification=async(...params)=>{
        
    }

}
export default MiddlewareManager