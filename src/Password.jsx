import React, { useState } from 'react'

export default function Password() {
  const[check,setCheck]=useState(false);

  const onChangeCheck=()=>{
    setCheck(!check)
  }

  return (
    <div>
     <input className='border border-black' type={check? "text": "password"} />
     <div>
     <input type='checkbox' checked={setCheck} onChange={onChangeCheck}/>
     비밀번호 보기
     </div>
    </div>
  )
}
