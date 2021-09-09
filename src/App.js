import logo from './logo.svg';
import './App.css';
import UserList from './hook'
function App() {
  const  list_name = ['huyen','hoa','dung','long']
  const [ showList,new_name ,changeName,deleteName,list_name_user] = UserList(list_name)
  return (
    <div className="App">
      <p>学生一覧：[{showList(list_name)}]</p>
      <p>削除値を入力してください。</p>
      <input  value={new_name} onChange={changeName} />
      <div><button onClick={deleteName} >確定</button></div>
      <p>削除する名前： {new_name}</p>
      <p>新しい一覧：[{showList(list_name_user)}]</p>
    </div>
  );
}

export default App;
