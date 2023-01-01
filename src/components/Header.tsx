import { Autocomplete, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "@src/components/Navbar";


interface Props {
  onCompanyChange: any;
}

function Header(props:Props) {
  
  const { onCompanyChange } = props;
  return (
    <div className="header">
      <Navbar onCompanyChange={onCompanyChange}/>  
      <Button component={Link} to="/dashboard">
        Home
      </Button>
      <Button component={Link} to="/dashboard/companies">
        Companies
      </Button>

    </div>
  )
}

export default Header;