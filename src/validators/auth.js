/* eslint-disable no-extend-native */
import { pagePermissions } from "./rolesPermissions";
import jwtDecode from 'jwt-decode';
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(data, login) {
    if (data.status === "active") {
      this.authenticated = true;
      if (data.role === "owner") {
        login("./admin");
      } else {
        login("./");
      }
    }
  }

  logout() {
    this.authenticated = false;
    window.location.reload(false);
  }

  checkJWT(token) {
    let jwt = jwtDecode(token);
    let exp = jwt.exp * 1000;
    return new Date(new Date().getTime()) < new Date(exp);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  hasPermissions(props, role) {
    role = role.replace(/\s/g, "");
    let canSee = true;
    const userPermissions = pagePermissions[role];
    userPermissions.forEach((permission) => {
      if (props.location.pathname === permission) {
        canSee = false;
      }
    });
    return canSee;
  }
}

export default new Auth();
