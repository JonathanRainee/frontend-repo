import { Paper } from "@mui/material";
import HeadingText from "../atoms/HeadingText";
import RegisterForm from "../molecules/RegisterForm";
import LoginForm from "../molecules/LoginForm";

export default function LoginAuthCard() {
  return (
    <Paper elevation={3} sx={{ padding: 4, width: 360 }}>
      <HeadingText text="Login" />
      <LoginForm />
    </Paper>
  );
}
