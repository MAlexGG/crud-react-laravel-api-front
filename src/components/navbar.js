import React, { Component } from "react";
import { Link } from "react-router-dom";;
import { serviceApi } from "../services/serviceApi";


class Navbar extends Component{

    render() {

        let api = serviceApi();

        const logoutSubmit = (e) => {
            e.preventDefault();
            api.logout().then(res => {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_user');
                alert(res.data.msg);
                window.location = '/crud-api-login';
            }).catch(error => {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_user');
                console.log(error);
            });
        };

        return (
            <div className="ct-header">
                <Link to="/" className={this.props.txtColor1}>READ-JSON</Link>
                <Link to="/fake-crud" className={this.props.txtColor2}>FAKE-CRUD</Link>
                <Link to="/crud-fetch" className={this.props.txtColor3}>CRUD-FETCH</Link>
                <Link to="/crud-axios" className={this.props.txtColor4}>CRUD-AXIOS</Link>

                <div className="dropdown">
                    <Link to='/crud-api'><button className={this.props.txtColor5} type="button">
                            CRUD-API
                    </button></Link>
                    <button className="dropdown-toggle arrow-down" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></button>

                    {localStorage.getItem('auth_token')
                        ?
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a><li className="dropdown-item nav-item" href="#" onClick={logoutSubmit}>LOG-OUT</li></a>
                        </ul>
                        :
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to="/crud-api-signin" className="text-decoration-none"><li className="dropdown-item nav-item" href="#">SIGN-IN</li></Link>
                            <Link to="/crud-api-login" className="text-decoration-none"><li className="dropdown-item nav-item" href="#">LOG-IN</li></Link>
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;



