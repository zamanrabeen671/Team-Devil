import logo from './logo.svg';
import './App.css';
import Header from './component/HEADER/Header';
import ShowPlayer from './component/SHOWPLAYER/ShowPlayer';

function App() {
  return (
    <div className="main-div">
      <Header></Header>
      <ShowPlayer></ShowPlayer>
    </div>
  );
}

export default App;
