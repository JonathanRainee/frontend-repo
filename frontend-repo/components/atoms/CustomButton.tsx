import theme from "@/theme/theme";
import { Button, ButtonProps } from "@mui/material";

export default function CustomButton(props: ButtonProps) {
  return <Button fullWidth variant="contained" color="primary" {...props} 
    sx={{
      marginTop: theme.spacing(1)
    }} 
  />;
}
