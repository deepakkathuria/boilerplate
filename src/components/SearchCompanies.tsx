import { Autocomplete,TextField,Box }from "@mui/material";

interface Props {
    onCompanyChange: any;
  }
function SearchCompanies(props:Props){
    const { onCompanyChange } = props;
    const options:any = [
      {"label": "Ultra Tech Cement", "value": "Ultra Tech Cement"},
      {"label": "Tata Tea Pvt. Ltd.", "value": "Tata Tea Pvt. Ltd."},
      {"label": "Axis Bank Ltd.", "value": "Axis Bank Ltd."},
    ];
    const onSubmitAutoComplete = (ev:React.SyntheticEvent, selected:any) => {
      onCompanyChange(selected);
    }
    return(
        <Box sx={{flexGrow:1}}>
        <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Companies" />}
        onChange={(ev, selected) => onSubmitAutoComplete(ev, selected)}
        isOptionEqualToValue={(option:any, selected:any) => {
          return (option.value === selected['value']);
        }}
      />
      </Box>

    )
}
export default SearchCompanies;