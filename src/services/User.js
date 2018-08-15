import cookie from 'react-cookies'

import Service from './Service';
import Singleton from '../decorators/Singleton';
//service
import HttpClient from './Http';
@Singleton
export default class User extends Service{
  constructor() {
    super();
  }

  getUser = () => {
    return cookie.load('user');
  }

  setUser = (user) => {
    cookie.save('user',user);
  }

  getToken = () => {
    return this.getUser().TOKEN;
  }

  verify = () => {
    const token = this.getToken();
    const _http = new HttpClient();
    _http.post('verify-login',{token : token})
      .then((response) => {

      })
  }
}
