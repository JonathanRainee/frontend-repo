import { Paper } from "@mui/material";
import HeadingText from "../atoms/HeadingText";
import RegisterForm from "../molecules/RegisterForm";

export default function RegisterAuthCard() {
  return (
    <Paper elevation={3} sx={{ padding: 4, width: 360 }}>
      <HeadingText text="Register" />
      <RegisterForm />
    </Paper>
  );
}
