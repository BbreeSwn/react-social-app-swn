import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div>
          <h1>Login Page</h1>
          <Link to='/'>HomePage</Link><br />
          <Link to='/profile'>ProfilePage</Link>
    
        </div>
      );
    }
    
    export default LoginPage