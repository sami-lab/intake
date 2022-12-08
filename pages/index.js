import React, { useEffect, useState } from 'react';
import {
  Grid,
  useTheme,
  Typography,
  useMediaQuery,
  TextField,
  InputAdornment,
  Autocomplete,
  IconButton,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogContent,
  Alert,
  Button,
  Slide,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Header from '../src/reusable/header';

const sampleCustomers = [
  {
    id: 1,
    firstName: 'Muhammad',
    lastName: 'Sami',
    phone: '000-000-0000',
    ext: '123',
    email: 's.m.sami125@gmail.com',
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    phone: '000-000-0000',
    ext: '123',
    email: 's.m.sami125@gmail.com',
  },
];

const AddOrUpdateCustomerModal = (props) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const theme = useTheme();
  const [data, setData] = useState({
    id: null,
    firstName: '',
    lastName: '',
    phone: '',
    ext: '',
    email: '',
  });
  const [error, setError] = useState('');
  useEffect(() => {
    if (props.edit) {
      setData(props.customer);
    }
  }, []);

  const submitHandler = () => {
    setError('');
    if (
      data.firstName.trim() === '' ||
      data.lastName.trim() === '' ||
      data.phone.trim() === '' ||
      data.ext.trim() === '' ||
      data.email.trim() === ''
    ) {
      setError('Fill all field to Continue');
      return;
    }
    props.submitHandler(data, (err) => {
      setError(err);
    });
  };
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Grid container direction={'column'}>
          {/* title close*/}
          <Grid item style={{ width: '100%' }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: 600,
                    color:
                      theme.palette.mode === 'dark'
                        ? theme.palette.light.main
                        : theme.palette.primary.main,
                  }}
                >
                  Add Contact
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '-10px' }}>
                <IconButton style={{ padding: 0 }} onClick={props.handleClose}>
                  <CancelIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          {/* firstName lastname  */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="space-between">
              {/* firstname */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="First Name"
                  placeholder="First Name"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({
                      ...data,
                      firstName: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* lastName */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Last Name"
                  placeholder="Last Name"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lastName: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          {/* phone ext email  */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="space-between">
              {/* phone ext */}
              <Grid item xs={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                  {/* phone */}
                  <Grid item xs={8}>
                    <TextField
                      variant="standard"
                      fullWidth
                      label="Phone"
                      placeholder="Phone"
                      value={data.phone}
                      onChange={(e) =>
                        setData({
                          ...data,
                          phone: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  {/* ext */}
                  <Grid item xs={4}>
                    <TextField
                      variant="standard"
                      fullWidth
                      label="Ext."
                      placeholder="Ext."
                      value={data.ext}
                      onChange={(e) =>
                        setData({
                          ...data,
                          ext: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              {/* email */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Email"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          {error !== '' && (
            <Grid item style={{ marginTop: '1em', width: '100%' }}>
              <Alert severity="warning">{error}</Alert>
            </Grid>
          )}
          {/* submit */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={2} justifyContent={'flex-end'}>
              {/* save */}
              <Grid item>
                <Button
                  variant="contained"
                  style={{ boxShadow: 'none', minWidth: '60px' }}
                  primary
                  onClick={submitHandler}
                >
                  Save
                </Button>
              </Grid>
              {/* cancel */}
              <Grid item>
                <Button
                  variant="contained"
                  style={{ boxShadow: 'none', minWidth: '60px' }}
                  onClick={props.handleClose}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default function Index() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [customers, setCustomers] = useState([...sampleCustomers]);
  const [customer, setCustomer] = useState({
    refNo: '',
    contact: '',
    phone: '',
    ext: '',
    mileage: '',
    man: false,
    address: '1234 Address Lane Jacksonville, FL 32203, US',
    team: '',
    am: '',
  });
  const [contactInputValue, setContactInputValue] = React.useState('');
  const [openAddCustomerModal, setOpenAddCustomerModal] = useState({
    active: true,
    customer: null,
  });

  const addCustomerHandler = (data, callback) => {
    //use callback(err) to set Error
    setCustomers([...customers, data]);
    setOpenAddCustomerModal({
      active: false,
      customer: null,
    });
  };
  const cardStyleSx = {
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0px 1px 3px rgb(16 24 40 / 10%), 0px 1px 2px rgb(16 24 40 / 6%)'
        : 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))',
    padding: '20px',
    borderRadius: '6px',
  };
  const textfieldSx = {
    '.MuiInputAdornment-root p': {
      fontSize: '13px',
      fontWeight: 600,
      color: theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
    },
  };

  const selectedCustomer = customers.find((c) => c.id === customer.contact);

  return (
    <Grid container direction="column">
      <AddOrUpdateCustomerModal
        open={openAddCustomerModal.active}
        handleClose={() =>
          setOpenAddCustomerModal({
            active: false,
            customer: null,
          })
        }
        edit={openAddCustomerModal.customer !== null}
        customer={openAddCustomerModal.customer}
        submitHandler={addCustomerHandler}
      />
      {/* header */}
      <Grid item style={{ width: '100%' }}>
        <Header />
      </Grid>
      {/* 4 cards */}
      <Grid item className="container" style={{ width: '100%', marginTop: '30px' }}>
        <Grid container>
          {/* customer */}
          <Grid
            item
            sx={cardStyleSx}
            style={{ display: 'flex', width: matchesSM ? '100%' : '35%' }}
          >
            <Grid container direction="column">
              {/* heading */}
              <Grid item style={{ width: '100%' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    color:
                      theme.palette.mode === 'dark'
                        ? theme.palette.light.main
                        : theme.palette.primary.main,
                  }}
                >
                  Customer
                </Typography>
              </Grid>
              {/* inputs */}
              <Grid item style={{ width: '100%' }}>
                <Grid container spacing={4}>
                  {/* left side */}
                  <Grid item xs>
                    <Grid container direction="column">
                      {/* customer ref no */}
                      <Grid item style={{ marginTop: '20px', width: '100%' }}>
                        <TextField
                          variant="standard"
                          fullWidth
                          sx={textfieldSx}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">Customer c#</InputAdornment>
                            ),
                          }}
                          value={customer.refNo}
                          onChange={(e) =>
                            setCustomer({
                              ...customer,
                              refNo: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      {/* contact */}
                      <Grid style={{ marginTop: '20px', width: '100%' }}>
                        <Grid container spacing={1} alignItems="center">
                          {/* contact input */}
                          <Grid item style={{ flex: 1 }}>
                            <Autocomplete
                              value={customer.contact}
                              onChange={(event, newValue) => {
                                setCustomer({
                                  ...customer,
                                  contact: newValue,
                                });
                              }}
                              inputValue={contactInputValue}
                              onInputChange={(event, newInputValue) => {
                                setContactInputValue(newInputValue);
                              }}
                              id="contactInput"
                              disableClearable
                              options={customers.map((c) => {
                                return {
                                  label: c.firstName + ' ' + c.lastName,
                                  id: c.id,
                                };
                              })}
                              freeSolo
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  variant="standard"
                                  fullWidth
                                  sx={textfieldSx}
                                  InputProps={{
                                    ...params.InputProps,

                                    startAdornment: (
                                      <InputAdornment position="start">Contact</InputAdornment>
                                    ),
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          {/* add Icon */}
                          <Grid item>
                            <IconButton style={{ padding: 0 }} disableRipple>
                              <PersonAddAlt1Icon fontSize="small" />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      {/* phone  ext*/}
                      <Grid item style={{ marginTop: '20px', width: '100%' }}>
                        <Grid container spacing={2}>
                          {/* phone */}
                          <Grid item style={{ flex: 1 }}>
                            <TextField
                              variant="standard"
                              placeholder="0000-000-0000"
                              fullWidth
                              sx={textfieldSx}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">Phone</InputAdornment>
                                ),
                              }}
                              value={customer.phone}
                              onChange={(e) =>
                                setCustomer({
                                  ...customer,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </Grid>
                          {/* ext */}
                          <Grid item style={{ width: '35%' }}>
                            <TextField
                              variant="standard"
                              placeholder="0000"
                              fullWidth
                              sx={textfieldSx}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">Ext. </InputAdornment>
                                ),
                              }}
                              value={customer.ext}
                              onChange={(e) =>
                                setCustomer({
                                  ...customer,
                                  ext: e.target.value,
                                })
                              }
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item style={{ marginTop: '20px', width: '100%' }}>
                        <Grid container spacing={2}>
                          {/* mileage */}
                          <Grid item style={{ flex: 1 }}>
                            <TextField
                              variant="standard"
                              placeholder="0000"
                              fullWidth
                              sx={textfieldSx}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">Mileage</InputAdornment>
                                ),
                              }}
                              value={customer.mileage}
                              onChange={(e) =>
                                setCustomer({
                                  ...customer,
                                  mileage: e.target.value,
                                })
                              }
                            />
                          </Grid>
                          <Grid item>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={customer.man}
                                  onChange={(e) =>
                                    setCustomer({
                                      ...customer,
                                      man: e.target.checked,
                                    })
                                  }
                                />
                              }
                              label="Man"
                              style={{
                                color:
                                  theme.palette.mode === 'dark'
                                    ? theme.palette.light.main
                                    : '#777777',
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* right side */}
                  <Grid item xs>
                    <Grid container direction="column">
                      {/* customer name address */}
                      <Grid item style={{ marginTop: '20px', width: '100%' }}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          {selectedCustomer?.firstName ? selectedCustomer.firstName : ''}
                          {selectedCustomer?.lastName ? selectedCustomer.lastName : 'Customer Name'}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            width: '45%',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          {customer.address}
                        </Typography>
                      </Grid>
                      {/* team */}
                      <Grid item style={{ marginTop: '25px', width: '100%' }}>
                        <TextField
                          variant="standard"
                          fullWidth
                          placeholder="JAX00"
                          sx={textfieldSx}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">Team</InputAdornment>,
                          }}
                          value={customer.team}
                          onChange={(e) =>
                            setCustomer({
                              ...customer,
                              team: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      {/* am */}
                      <Grid item style={{ marginTop: '20px', width: '100%' }}>
                        <TextField
                          variant="standard"
                          fullWidth
                          placeholder="JAX00"
                          sx={textfieldSx}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">Am</InputAdornment>,
                          }}
                          value={customer.am}
                          onChange={(e) =>
                            setCustomer({
                              ...customer,
                              am: e.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
