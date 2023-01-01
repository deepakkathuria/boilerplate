import { useEffect, useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { SelectedCompany } from "@src/interfaces/SelectedCompany";
import { SET_PAGE_TITLE } from "@src/helpers/Base";
import AppLayout from "@src/layouts/AppLayout";

function Companies() {
  const [ selectedCompany, setSelectedCompany ] = useState<SelectedCompany|null>();

  useEffect(() => {
    SET_PAGE_TITLE("Companies");
  }, []);

  const onCompanyChange = (_selectedCompany:SelectedCompany) => {
    setSelectedCompany(_selectedCompany);
  }
  
  return (
    <AppLayout onCompanyChange={onCompanyChange}>
      <h2>Companies</h2>
      { selectedCompany && selectedCompany['label'] }
    </AppLayout>
  )
}

export default Companies;
