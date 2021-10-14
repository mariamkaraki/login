import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString : any = localStorage.getItem('token');
   
    const userToken = JSON.parse(tokenString);
    console.log(localStorage.getItem('token'));
    return userToken
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken : any) => {
    console.log("hello")
    localStorage.setItem('token', JSON.stringify(userToken.token));
    setToken(userToken.token);
  };
  return {
    setToken: saveToken,
    token
  }
}