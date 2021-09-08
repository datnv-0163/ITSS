import logo from './logo.svg';
import './App.css';
import UserList from './hook'
function App() {
  const  list_name = ['Huyen','Hoa','Dung','Long']
  const [ showList,new_name ,changeName,addName,list_name_user] = UserList(list_name)
  return (
    <div className="App">
      <p>学生一覧：[{showList(list_name)}]</p>
      <p>追加する名前を入力してください。</p>
      <input  value={new_name} onChange={changeName} />
      <button onClick={addName} >確定</button>
      <p>追加する名前： {new_name}</p>
      <p>新しい一覧：[{showList(list_name_user)}]</p>
    </div>
  );
}

export default App;