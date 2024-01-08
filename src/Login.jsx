import React, { useState } from 'react'

export default function Login() {
  const [login,setLogin]=useState(false)
 

  const loginClick=()=>{
    setLogin(!login)
  }

  return (
    <div>
      <button onClick={loginClick}>{login ? "로그아웃" : "로그인"}</button>
      {login ? 
      <p>Email:wlgp@naver.com</p>: 
      <p>로그인 해주세요</p>
      }
    </div>
  )
}
