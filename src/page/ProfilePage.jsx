import { Link } from "react-router-dom";

function ProfilePage() {
    return (
        <div>
          <h1>ProfilePage</h1>
          <Link to='/login'>LoginPage</Link><br />
          <Link to='/'>HomePage</Link>
    
        </div>
      );
    }
    
    export default ProfilePage