import axios from "axios";

const API_URL = "https://localhost:44387/api/Users/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "Authenticate", {
        username,
        password
      })
      .then(response => {
        if (response.data.JwtToken!=null) {
          localStorage.setItem("user", JSON.stringify(response.data));
          
        
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(Password,Email,Mobile_no) {
    return axios.post(API_URL + "Register", {
     
      Password,
      Email,
      Mobile_no
    }); 
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
    console.log(localStorage.getItem('user'));

  }
  student_data(Email) {
    return axios.get("https://localhost:44387/api/Student/Email", {
     
      Email
     
    }).then(response => {
      if (response.data.JwtToken!=null) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }); 
  }
  
}

export default new AuthService();
