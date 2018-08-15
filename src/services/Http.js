import Service from './Service';
import Singleton from '../decorators/Singleton';
import axios from 'axios';
import { API_URL } from '../env';
import { toast } from 'react-toastify';

@Singleton
export default class HttpClient extends Service {
  constructor() {
    super();
    this.api_url = API_URL;
  }

  get = (url,global_error_toast=true) => {
    return new Promise((resolve, reject) => {
      axios.get(this.api_url+url).then((response) => {
        resolve(response);
      }).catch((error)=>{
        console.log(error);
        if(global_error_toast==true){
          toast.error("Something went wrong!", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        reject(error);
      })
    });
  }

  post = (url,data,global_error_toast=true) => {
    return new Promise((resolve, reject) => {
      axios.post(this.api_url+url,data).then((response) => {
        resolve(response);
      }).catch((error)=>{
        console.error(error);
        if(global_error_toast==true){
          toast.error("Something went wrong!", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        reject(error);
      })
    });
  }
}
