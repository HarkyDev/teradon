import "./index.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import SidebarRight from "../../components/SidebarRight/SidebarRight";
function Login() {
  return (
    <div className="Home">
      <Sidebar />
      <SidebarRight />
    </div>
  );
}

export default Login;
