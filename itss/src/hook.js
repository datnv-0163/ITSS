import { useState } from 'react';

function UserList(list_user) {
  const  [ list_name_user , setList_name_user] = useState(list_user)
  const [new_name, setNew_name] = useState('')
  const changeName = (e) => {
      setNew_name(e.target.value)
  }
  const addName = () =>{
    let data = [].concat(list_name_user)
    data = [...data, new_name]
    setList_name_user(data)
    setNew_name("")
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
  return [ showList,new_name,changeName ,addName,list_name_user]
}

export default UserList;