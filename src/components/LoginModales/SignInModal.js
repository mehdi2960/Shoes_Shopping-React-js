import React, { useState } from "react";
import { Modal, TextField } from "@material-ui/core";

export default function SignInModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div
        style={{
          backgroundColor: "#fff",
          width: 400,
          height: "auto",
          margin: "auto",
          marginTop: 80,
          padding: 15,
          "&:focus": {
            outline: "none",
          },
          borderRadius: 5,
          outline: "none",
        }}
      >
        <TextField variant="outlined" label="تلفن همراه" fullWidth size="small" />
      </div>
    </Modal>
  );
}
