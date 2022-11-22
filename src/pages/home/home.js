import "./index.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import SidebarRight from "../../components/SidebarRight/SidebarRight";
function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Feed />
      <SidebarRight />
    </div>
  );
}

export default Home;
