import * as React from 'react'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton , Badge,Box, Typography} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Profile() {
    const [profileItem, setProfielItem] = React.useState<null | HTMLElement>(null);
    const open = Boolean(profileItem);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setProfielItem(event.currentTarget);
    };
    const handleClose = () => {
      setProfielItem(null);
    };
  return (
    <Box sx={{display: 'flex', flexDirection:'row'}}>
        <Box sx={{ display:'flex',width:130,
        height:50,border: '2px solid grey', justifyContent:'space-evenly' ,alignItems:'center', marginLeft:'10px'}}>
            <Box sx={{display:'table', marginLeft:'5px'}}>
            <Typography sx={{fontSize:'14px',  fontWeight:400, color: '#344767'}}>
            Signed in as
        </Typography>
        <Typography sx={{fontSize:'16px',  fontWeight:700, color: '#344767'}}>
            Rating Analyst
        </Typography>
            </Box>
        </Box>
        <Box sx={{ display:'flex',width:110,
        height:50,border: '2px solid grey', justifyContent:'space-evenly' ,alignItems:'center', marginLeft: '10px'}}>
    <Box sx={{display:'flex', alignItems:'flex-start'}}>
        <Box sx={{display:'table', marginLeft:'5px'}}>
        <Typography sx={{fontSize:'14px',  fontWeight:400, color: '#344767'}}>
            Rupesh
        </Typography>
        <Typography sx={{fontSize:'11px',  fontWeight:400,color:'#344767'}}>
            E1232
        </Typography>
        </Box>
    <Box sx={{marginLeft:'10px'}}>
    <IconButton
  id="basic-button"
  aria-controls={open ? 'profile-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
>
<Badge badgeContent={4} color="primary">
  <AccountCircleIcon color="action" />
</Badge>
</IconButton>
<Menu
  id="profile-menu"
  anchorEl={profileItem}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
</Box>
    </Box>
    </Box>
    </Box>
  )
}