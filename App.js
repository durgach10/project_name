import logo from './logo.svg';
import './App.css';
import EmojiPicker from 'emoji-picker-react';
// import EmojiSearch from './EmojiSearch';
//import NameList from './Component/NameList';
// import FunctionClick from './Component/FunctionClick';
// import ClassClick from './Component/ClassClick';
// import Greet from './Component/Greet';
// import Message from './Component/Message';
// import Welcome from './Component/Welcome';
function App() {
  return (
    <div className="App">
      {/* <EmojiSearch /> */}
      <EmojiPicker />
      {/* <NameList /> */}
            {/* <FunctionClick />
      <ClassClick /> */}
     {/* function call */}
     {/* <Greet name="Durga" heroineName="abcd"/> 
     <Greet name="Janu"  heroineName="efg"/> 
     <Greet name="Eshu"  heroineName="hij"/> 
     <Welcome name="durga"/> */}
    </div>
  );
}

export default App;