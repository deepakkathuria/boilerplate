import { useEffect } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { SET_PAGE_TITLE } from "@src/helpers/Base";
import AppLayout from "@src/layouts/AppLayout";

function Dashboard() {
  useEffect(() => {
    SET_PAGE_TITLE("Dashboard");
  }, []);

  const onCompanyChange = () => {
    console.log("onCompanyChange");
  }
  
  return (
    <AppLayout onCompanyChange={onCompanyChange}> 
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={0}>
          <Tab label="Widget" />
          <Tab label="Chart" />
          <Tab label="Settings" />
        </Tabs>
      </Box>
      
      <Container>
        <Box sx={{ padding: 5 }}>
          <Typography sx={{ fontSize: '1.2em' }}>
            Welcome to <strong>Dashboard</strong> 😀
          </Typography>
          <ul>
            <li>Setup Store</li>
            <li>Setup Dashboard router</li>
            <li>Setup JWT middleware</li>
            <li>Setup HTTP Client</li>
            <li>Setup Chart library</li>
            <li>Setup Navbar</li>
            <li>Setup Sidebar</li>
            <li>Setup Header</li>
          </ul>
        </Box>
      </Container>
    </AppLayout>
  )
}

export default Dashboard;
