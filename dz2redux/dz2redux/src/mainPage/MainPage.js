import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNameAction, createUserAction, deleteNameAction } from '../action/action';

function MainPage() {
  

    const dispatch = useDispatch();
    const name = useSelector(state => state.users.name)
    const users = useSelector(state => state.users.users)

    const createUser = () => {
        dispatch(createUserAction(name))
        dispatch(deleteNameAction(""))
    }

    const changeInput = (e) => {
        dispatch(addNameAction(e.target.value))
    }

  return (
    <div className='body2'>
        <div>
        <input className='text' type="text" onChange={changeInput} value={name}/>
        <button className='text2' onClick={createUser}>😀create user</button>
        </div>

        <div className='none'>
            {/* <li>users:</li> */}
            {users.map((user, id)=> <li key={id}>😀{user}</li>)}
            
        </div>
     
    </div>

   
  )
}

export default MainPage;