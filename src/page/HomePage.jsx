import { Link, useNavigate } from "react-router-dom";
// import Button from "@mui/joy/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    let isValid = true;

    if (isValid) navigate("/randon-path"); //link กดปุ๊บไปปั๊บ
    else navigate("/");
  };
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/login">LoginPage</Link>
      <br />
      <Link to="/profile">ProfilePage</Link>
      <br />
      <Button
        variant="contained"
        color="error"
        size="medium"
        onClick={handleClick}
        endIcon={<DeleteIcon />}
        se={{ padding: "16px", color: "black", "&:hover": { color: "white" }, }}
      >
        Go to 404
      </Button>
    </div>
  );
}

export default HomePage;
