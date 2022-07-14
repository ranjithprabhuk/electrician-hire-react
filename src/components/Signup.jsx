import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const SignUp = () => {
  const [state, setState] = useState({});

  const handleChange = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const handleSubmit = () => {
    // TODO: make api call to register the user
    console.log("form state", state);
  };

  return (
    <Box display={"flex"} justifyContent={"center"} mt={5}>
      <Box
        display={"flex"}
        width={500}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Card>
          <Box p={2}>
            <div>
              <FormControl fullWidth>
                <InputLabel id="user-select-id">User Type</InputLabel>
                <Select
                  labelId="user-select-id"
                  id="admin/user/jobseeker"
                  value={state.userType}
                  label="Select User"
                  onChange={(e) => handleChange("userType", e.target.value)}
                >
                  <MenuItem value={"admin"}>Admin</MenuItem>
                  <MenuItem value={"user"}>User</MenuItem>
                  <MenuItem value={"jobseeker"}>Job Seeker</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="email"
                label="Email"
                value={state.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <TextField
                id="username"
                label="Username"
                value={state.username}
                onChange={(e) => handleChange("username", e.target.value)}
              />
              <TextField
                id="mobileNumber"
                label="Mobile Number"
                value={state.mobileNumber}
                onChange={(e) => handleChange("mobileNumber", e.target.value)}
              />
              <TextField
                type={"password"}
                id="password"
                label="Password"
                value={state.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <TextField
                id="confirmPassword"
                type={"password"}
                label="Confirm Password"
                value={state.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
              />

              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                mt={2}
              >
                <Box>
                  <Button
                    id="submitButton"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
                <Box mt={2}>
                  Already a user?
                  <Button id="signInLink" variant="text">
                    Login
                  </Button>
                </Box>
              </Box>
            </div>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
