import React, {Component} from 'react';

import {connect} from 'react-redux';

import axios from 'axios';

import css from './Login.module.css';

class Login extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then(response => {

            localStorage.setItem('data', JSON.stringify(response.data));
        })
        .catch(error => {

            alert('Error occured', error);
        })

    }

    onUserValidate = (e) => {

        // e.preventDefault();

        let dataFromLocal = localStorage.getItem('data')

        dataFromLocal = JSON.parse(dataFromLocal);

        const accounts = {...dataFromLocal.accountsPage};

        const user = document.querySelector('input[name="user"]').value;

        const pass = document.querySelector('input[name="password"]').value;

        if(accounts.Admin.email === user && accounts.Admin.password === pass){

            this.props.onUserLogged();
        }
        else (
            alert('Wrong user or password')
        )

    }




    render() {

        return(

            <div className={css.login}>

                <div className={css.divLogin}>
                    <h2>Welcome to Dashboard, Login</h2>

                    <form>
                        <div className={css.divName}>
                            <label>Username</label>
                            <input type="text" name="user"></input>
                            
                            <label>Password</label>
                            <input type="password" name="password"></input>

                            <button type="submit" method="POST" 
                                    onClick={(e) => this.onUserValidate(e)}>LOGIN</button>

                            <button>FORGOT YOUR PASSWORD?</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
       onUserLogged: () => {
      dispatch({type: 'SET_LOGGED'})
      } 
    }
  }
  

export default connect(null, mapDispatchToProps)(Login);

// export default Login;

