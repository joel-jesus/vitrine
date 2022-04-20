import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

interface Props {
  variant: any;
  children: string;
}

const Message: React.FC<Props> = ({ variant, children }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={variant}>{children}</Alert>
    </Stack>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
