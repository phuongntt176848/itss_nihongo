import { useState } from 'react';

function UserList(list_user) {
  const  [ list_name_user , setList_name_user] = useState(list_user)
  const [new_name, setNew_name] = useState('')
  const changeName = (e) => {
      setNew_name(e.target.value)
  }
  const deleteName = () =>{
    let data = [].concat(list_name_user)
    let index = data.findIndex(value => value === new_name)
    if (index !== -1){
      data.splice(index, 1)
    }
    setList_name_user(data)
  }
  const showList = (users) =>{
    let result = null
    result = users.map((value,index)=>{
      if(index === users.length -1){
        return(
          <span>{value}</span>
        )
      } else {
        return(
          <span>{value} ,</span>
        )
      }
      
    })
    return result
  } 
  return [ showList,new_name,changeName ,deleteName,list_name_user]
}

export default UserList;