import React, { Suspense } from "react";
import TextField from "@mui/material/TextField";

// Lazy load MenuItem only when select is true and options are available
const MenuItem = React.lazy(() => import("@mui/material/MenuItem"));

const CustomTextField = ({
  id,
  name,
  label,
  formik,
  type = "text",
  options = [],
  select = false,
  ...rest
}) => {
  return (
    <TextField
      select={select}
      type={type}
      size="small"
      margin="dense"
      variant="filled"
      fullWidth
      id={id}
      name={name}
      label={label}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      className="login-input"
      InputLabelProps={{ shrink: true }}
      {...rest}
    >
      {select && (
        <Suspense
          fallback={<div>Loading...</div>} // Optional: Show a loading indicator while loading MenuItem
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Suspense>
      )}
    </TextField>
  );
};

export default React.memo(CustomTextField);
