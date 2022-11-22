import Sidebar from "../../components/Sidebar/Sidebar";
import SignUpCard from "../../components/SignUpCard/SignUpCard";
import SidebarRight from "../../components/SidebarRight/SidebarRight";
function SignUp() {
  return (
    <div className="Home">
      <Sidebar />
      <SignUpCard />
      <SidebarRight />
    </div>
  );
}

export default SignUp;
