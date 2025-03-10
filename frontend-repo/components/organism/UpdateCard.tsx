import { Paper } from "@mui/material";
import HeadingText from "../atoms/HeadingText";
import UpdateUserForm from "../molecules/UpdateUserForm";

export default function UpdateUserCard() {
  return (
    <Paper elevation={3} sx={{ padding: 4, width: 360 }}>
      <HeadingText text="User Data" />
      <UpdateUserForm />
    </Paper>
  );
}
