import React, { useState } from "react";
import { Form, FormikProvider } from "formik";

import Logo from "../../components/Logo";
import { Error, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  animate,
  RootStyle,
  HeadingStyle,
  ContentStyle,
  fadeInUp,
} from "./ConstAuth";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  CircularProgress,
  Alert,
  Container,
  Typography,
  Fade,
  Stack,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";

const ResetPasswordView = ({
  handleSubmit,
  isSubmitting,
  errorMessage,
  iserror,
  setIserror,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <RootStyle>
      <Container maxWidth="sm" component="form" onSubmit={handleSubmit}>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Check your email for verification code
            </Typography>
          </HeadingStyle>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="verificationCode"
              label="Verification Code"
              name="verificationCode"
              margin="normal"
              required
              type="number"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              autoComplete="new-password"
              type={showPassword ? "text" : "password"}
              label="New Password"
              name="newPassword"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Visibility color="primary" />
                      ) : (
                        <VisibilityOff color="primary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            
            />

            <TextField
              margin="normal"
              fullWidth
              autoComplete="confirm-new-password"
              type={showPassword ? "text" : "password"}
              label="Confirm New Password"
              name="confirmNewPassword"
              sx={{
                "& fieldset": {
                  borderColor: "white",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Visibility color="primary" />
                      ) : (
                        <VisibilityOff color="primary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}

            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <p></p>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            ></Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              loadingIndicator={<CircularProgress color="primary" size={16} />}
            >
              {isSubmitting ? "loading..." : "Reset"}
            </LoadingButton>

            <p></p>

            {iserror && (
              <Fade
                in={iserror} //Write the needed condition here to make it appear
                timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
                addEndListener={() => {
                  setTimeout(() => {
                    setIserror(false);
                  }, 4000);
                }}
              >
                <Alert
                  variant="filled"
                  color="primary"
                  icon={<Error fontSize="inherit" />}
                >
                  {errorMessage}
                </Alert>
              </Fade>
            )}
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>

    /*  <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Check your email for verification code
            </Typography>
          </HeadingStyle>

          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Box
                component={motion.div}
                animate={{
                  transition: {
                    staggerChildren: 0.55,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  animate={animate}
                >
                  <TextField
                    fullWidth
                    autoComplete="verificationCode"
                    label="Verification Code"
                    name="verificationCode"
                    {...getFieldProps("verificationCode")}
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                    error={Boolean(
                      touched.verificationCode && errors.verificationCode
                    )}
                    helperText={
                      touched.verificationCode && errors.verificationCode
                    }
                  />

                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="New Password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <Visibility color="primary" />
                            ) : (
                              <VisibilityOff color="primary" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="Confirm New Password"
                    {...getFieldProps("confirmPassword")}
                    sx={{"& fieldset": {
                      borderColor: "white",
                    },}}
                    error={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <Visibility color="primary" />
                            ) : (
                              <VisibilityOff color="primary" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animate}
                >
    
                   <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ my: 2 }}
                  ></Stack>

                  
                

                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    loadingIndicator={
                      <CircularProgress color="primary" size={16} />
                    }
                  >
                    {isSubmitting ? "loading..." : "Reset"}
                  </LoadingButton>

                  <p></p>

                  { iserror && <Fade
                    in={iserror} //Write the needed condition here to make it appear
                    timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
                    addEndListener={() => {
                      setTimeout(() => {
                        setIserror(false);
                      }, 4000);
                    }}
                  >
                    <Alert
                      variant="filled"
                      color="primary"
                      icon={<Error fontSize="inherit" />}
                    >
                      {errorMessage}
                    </Alert>
                  </Fade>}

                </Box>
              </Box>

            </Form>
          </FormikProvider>
        </ContentStyle>
      </Container>
    </RootStyle> */
  );
};

export default ResetPasswordView;
