import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed'
import SidebarRight from './components/SidebarRight/SidebarRight';
function App() {
  return (
    <div className="App">
        <Sidebar />
        <Feed />
        <SidebarRight />
        
    </div>
  );
}

export default App;
