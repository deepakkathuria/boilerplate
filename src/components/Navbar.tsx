import { Box,AppBar,Toolbar,Autocomplete,TextField} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchCompanies from "./SearchCompanies";
import Profile from '@src/components/Profile'

interface Props {
  onCompanyChange: any;
}
function Navbar(props:Props) {
  const { onCompanyChange } = props;
    return (
      <div className="header">
       <Box sx={{flexGrow: 1 , marginLeft: 30, marginRight:10 ,marginTop: 2, backgroundColor:'#FFFFFF'}}>
    <AppBar position="static" sx={{backgroundColor:'#FFFFFF'}}>
        <Toolbar> 
        <SearchCompanies onCompanyChange={onCompanyChange}/>
      <NotificationsIcon/>
      <Profile/>
        </Toolbar>
      </AppBar>
      </Box>
      </div>
        )
        }
        export default Navbar;
