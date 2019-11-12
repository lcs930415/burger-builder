import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken,userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken:idToken,
        userId:userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout=()=>{
    return {
        type:actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout=(expirationTime)=>{
    return dispatch=>{
        setTimeout(
            ()=>{
                dispatch(logout());
            },expirationTime*1000
        )
    }
}

export const auth = (email, password,isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData={
            email:email,
            password:password,
            returnSecureToken:true
        }
        //axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAuJcqDddBhCFY2QYhql5q4SQbTTRQp6fI',authData)
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAuJcqDddBhCFY2QYhql5q4SQbTTRQp6fI';
        if(!isSignUp){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAuJcqDddBhCFY2QYhql5q4SQbTTRQp6fI';
        }
        console.log(url)
        axios.post(url,authData)
            .then(response=>{
                console.log(response)
                dispatch(authSuccess(response.data.idToken,response.data.userId));
                dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err=>{
                console.log(err);
                dispatch(authFail(err.response.data.error))
            })
    }
}