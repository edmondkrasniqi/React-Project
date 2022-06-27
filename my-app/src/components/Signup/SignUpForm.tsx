import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Paper, Avatar, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import FormLabel from "@mui/material/FormLabel";

import { SignupFormik } from "../../lib/hooks/useSignupFormik";

const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
const headerStyle = { margin: "2px" };
const avatarStyle = { backgroundColor: "#1bbd7e" };
const marginTop = { marginTop: "10px" };

interface Props {
  formik: SignupFormik;
}

export const SignupForm = ({ formik }: Props) => {
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid sx={{ align: "center" }}>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              style={marginTop}
              fullWidth
              onChange={formik.handleChange}
              label="Username"
              placeholder="Enter your Username"
              name="username"
              value={formik.values.username}
              error={Boolean(formik.errors.username) && formik.touched.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <TextField
              style={marginTop}
              fullWidth
              onChange={formik.handleChange}
              label="Email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              error={Boolean(formik.errors.email) && formik.touched.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <FormControl
              component="fieldset"
              error={Boolean(formik.errors.gender) && formik.touched.gender}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                onChange={formik.handleChange}
                aria-label="gender"
                name="gender"
                value={formik.values.gender}
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value={"male"}
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
              {formik.touched.gender && formik.errors.gender ? (
                <div>{formik.errors.gender}</div>
              ) : null}
            </FormControl>
            <TextField
              fullWidth
              label="Age"
              type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              placeholder="Please Enter your age"
              error={Boolean(formik.errors.age) && formik.touched.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <div>{formik.errors.age}</div>
            ) : null}
            <FormControl
              style={marginTop}
              fullWidth
              error={
                Boolean(formik.errors.preferences) && formik.touched.preferences
              }
            >
              <InputLabel>Preferences</InputLabel>
              <Select
                name="preferences"
                value={formik.values.preferences}
                label="Preferences"
                onChange={formik.handleChange}
              >
                <MenuItem value={"Action"}>Action</MenuItem>
                <MenuItem value={"Sci-FI"}>Sci-fi</MenuItem>
                <MenuItem value={"Thriller"}>Thriller</MenuItem>
                <MenuItem value={"Drama"}>Drama</MenuItem>
                <MenuItem value={"Comendy"}>Comedy</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.preferences && formik.errors.preferences ? (
              <div>{formik.errors.preferences}</div>
            ) : null}

            <TextField
              autoComplete="off"
              style={marginTop}
              fullWidth
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={Boolean(formik.errors.password) && formik.touched.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <TextField
              autoComplete="off"
              style={marginTop}
              fullWidth
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              error={
                Boolean(formik.errors.confirmPassword) &&
                formik.touched.confirmPassword
              }
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={marginTop}
            >
              Sign up
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};
