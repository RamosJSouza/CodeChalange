import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const FormField = ({ name, label, type = 'text', register, errors, watch, visible = false }) => {
  const [showContent, setShowContent] = useState(false);
  const value = watch(name);
  const hasError = !!errors[name];
  const isValid = value && value.length > 0 && !hasError;

  const handleClickShowContent = () => setShowContent(!showContent);
  const handleMouseDownContent = (event) => event.preventDefault();

  return (
    <TextField
      fullWidth
      label={label}
      type={visible ? (showContent ? 'text' : 'password') : type}
      variant="outlined"
      error={hasError}
      helperText={hasError ? errors[name]?.message : ''}
      {...register(name)}
      sx={{
        mb: 2,
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: hasError ? 'red' : isValid ? 'green' : 'default' },
          '&:hover fieldset': { borderColor: hasError ? 'red' : isValid ? 'green' : 'primary.main' },
          '&.Mui-focused fieldset': { borderColor: hasError ? 'red' : isValid ? 'green' : 'primary.main' },
        },
      }}
      InputProps={{
        endAdornment: (
          <>
            {visible && (
              <InputAdornment position="end">
                <IconButton
                  aria-label={`toggle ${label.toLowerCase()} visibility`}
                  onClick={handleClickShowContent}
                  onMouseDown={handleMouseDownContent}
                  edge="end"
                  color={showContent ? 'default' : 'primary'}
                  sx={{ p: 0.5 }}
                >
                  {showContent ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
            {isValid && !visible && <CheckCircleOutlineIcon color="success" />}
            {hasError && <ErrorOutlineIcon color="error" />}
          </>
        ),
      }}
    />
  );
};

export default FormField;