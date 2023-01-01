import { Box } from "@mui/material";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";

interface Props {
  children: any;
  onCompanyChange: any;
}

function AppLayout(props:Props) {
  const { onCompanyChange } = props;
  
  return (
    <div>
      <Header 
        onCompanyChange={onCompanyChange}
      />
      <Box className="box-a">
        { props.children }
      </Box>

      <Footer />
    </div>
  )
}

export default AppLayout;
