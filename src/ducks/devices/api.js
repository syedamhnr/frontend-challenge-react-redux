import axios from 'axios';


export class Api{

    constructor(){
      this.get_EU_url = "http://localhost:3004/eu-devices";
      this.get_US_url = "http://localhost:3004/us-devices";
      this.poll_EU_url = "http://localhost:3004/eu-availability";
      this.poll_US_url = "http://localhost:3004/us-availability";
    }

    getAllData() {
      return  axios.all([
        axios.get(this.get_EU_url),
        axios.get(this.get_US_url)
      ])
        .then(response => {
          return response;
        })
        .catch(function (error) {
          console.error(error)
          return error.response;
        })

    }
    pollData(){
      return  axios.all([
        axios.get(this.poll_EU_url),
        axios.get(this.poll_US_url)
      ])
        .then(response => {
          return response;
        })
        .catch(function (error) {
          console.error(error)
          return error.response;
        })

    }

}

