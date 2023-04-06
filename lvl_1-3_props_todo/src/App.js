
import './App.css';
import List from './components/List';

const dataArr = [
  {
    item1: "Bug Grocery",
    item2: "Send Email",
    item3: "Finish Assignment",
    item4: "Write Blog",
    item5: "Bake Cake"
  }
]

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <List
        item1={dataArr[0].item1}
        item2={dataArr[0].item2}
        item3={dataArr[0].item3}
        item4={dataArr[0].item4}
        item5={dataArr[0].item5}
      />
    </div>
  );
}

export default App;
