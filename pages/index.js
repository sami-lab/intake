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
  MenuItem,
  Radio,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';

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

const rateTypeOptions = [
  {
    label: 'Contract-Primary',
    value: 'Contract-Primary',
  },
];
const equipmentOptions = [
  {
    type: 'Van',
    values: [
      {
        label: 'VN53',
        value: 'VN53',
      },
      {
        label: 'VN54',
        value: 'VN54',
      },
      {
        label: 'VN55',
        value: 'VN55',
      },
      {
        label: 'VN56',
        value: 'VN56',
      },
      {
        label: 'VN57',
        value: 'VN57',
      },
      {
        label: 'VN58',
        value: 'VN58',
      },
    ],
  },
  {
    type: 'Reefer',
    values: [
      {
        label: 'RF53',
        value: 'RF53',
      },
      {
        label: 'RF54',
        value: 'RF54',
      },
      {
        label: 'RF55',
        value: 'RF55',
      },
      {
        label: 'RF56',
        value: 'RF56',
      },
      {
        label: 'RF57',
        value: 'RF57',
      },
      {
        label: 'RF58',
        value: 'RF58',
      },
    ],
  },
  {
    type: 'Hazmat',
    values: [
      {
        label: 'HZ53',
        value: 'HZ53',
      },
      {
        label: 'HZ54',
        value: 'HZ54',
      },
      {
        label: 'HZ55',
        value: 'HZ55',
      },
      {
        label: 'HZ56',
        value: 'HZ56',
      },
      {
        label: 'HZ57',
        value: 'HZ57',
      },
      {
        label: 'HZ58',
        value: 'HZ58',
      },
    ],
  },
];

const slOptions = [
  {
    label: 'Solo',
    value: 'Solo',
  },
];
const statusOptions = [
  {
    label: 'Planned',
    value: 'Planned',
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AddOrUpdateCustomerModal = (props) => {
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
                  style={{ background: '#92949C', boxShadow: 'none', minWidth: '60px' }}
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

const SelectEquipmentDialog = (props) => {
  const theme = useTheme();
  const [value, setValue] = useState(props.value ? props.value : '');

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
                  Select Equipment Type
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '-10px' }}>
                <IconButton style={{ padding: 0 }} onClick={props.handleClose}>
                  <CancelIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          {/* radios  */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid
              container
              wrap="nowrap"
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* options */}
              {props?.equipments?.map((eq, i) => (
                <Grid item key={i}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="h5"
                        style={{
                          fontWeight: 600,
                          color:
                            theme.palette.mode === 'dark' ? theme.palette.light.main : '#505050',
                        }}
                      >
                        {eq.type}
                      </Typography>
                    </Grid>
                    {eq.values.map((v, ind) => (
                      <Grid
                        item
                        style={{ marginTop: ind === 0 ? '15px' : '1px' }}
                        key={`${i}-${ind}`}
                      >
                        {' '}
                        <FormControlLabel
                          control={
                            <Radio
                              value={v.value}
                              checked={value === v.value}
                              onChange={() => setValue(v.value)}
                              name="equipment"
                            />
                          }
                          label={v.label}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* submit */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={2} justifyContent={'flex-end'}>
              {/* save */}
              <Grid item>
                <Button
                  variant="contained"
                  style={{ boxShadow: 'none', minWidth: '60px' }}
                  primary
                  onClick={() => props.submitHandler(value)}
                >
                  Save
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
    active: false,
    customer: null,
  });

  const [equipments, setEquipments] = useState(equipmentOptions);
  const [loadEntry, setLoadEntry] = useState({
    rateType: '',
    sl: '',
    equipment: '',
    status: '',
  });
  const [equipmentInputValue, setEquipmentInputValue] = React.useState('');
  const [selectEquipmentModal, setSelectEquipmentModal] = useState({
    active: false,
    value: '',
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
        handleClose={() => {
          setOpenAddCustomerModal({
            active: false,
            customer: null,
          });
        }}
        edit={openAddCustomerModal.customer !== null}
        customer={openAddCustomerModal.customer}
        submitHandler={addCustomerHandler}
      />
      <SelectEquipmentDialog
        open={selectEquipmentModal.active}
        handleClose={() => {
          setSelectEquipmentModal({
            active: false,
            value: '',
          });
        }}
        equipments={equipments}
        submitHandler={(value) => {
          setLoadEntry({
            ...loadEntry,
            equipment: value,
          });
          setSelectEquipmentModal({
            active: false,
            value: '',
          });
        }}
      />
      {/* header */}
      <Grid item style={{ width: '100%' }}>
        <Header />
      </Grid>
      {/* 4 cards */}
      <Grid item className="container" style={{ width: '100%', marginTop: '30px' }}>
        <Grid container spacing={2}>
          {/* customer */}
          <Grid item style={{ display: 'flex', width: matchesSM ? '100%' : '35%' }}>
            <Grid container direction="column" sx={cardStyleSx}>
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
                            <IconButton
                              style={{ padding: 0 }}
                              onClick={() => {
                                setOpenAddCustomerModal({
                                  active: true,
                                  customer: null,
                                });
                              }}
                              disableRipple
                            >
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
                      {/* mileage */}
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

          {/* load entry */}
          <Grid item style={{ display: 'flex', width: matchesSM ? '100%' : '20%' }}>
            <Grid container direction="column" sx={cardStyleSx}>
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
                  Load Entry
                </Typography>
              </Grid>
              {/* inputs */}
              <Grid item style={{ width: '100%' }}>
                <Grid container direction="column">
                  {/* Rate Type */}
                  <Grid item style={{ marginTop: '20px', width: '100%' }}>
                    <TextField
                      select
                      variant="standard"
                      fullWidth
                      sx={textfieldSx}
                      SelectProps={
                        {
                          //native: true,
                        }
                      }
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rate Type</InputAdornment>,
                      }}
                      value={loadEntry.rateType}
                      onChange={(e) =>
                        setLoadEntry({
                          ...loadEntry,
                          rateType: e.target.value,
                        })
                      }
                    >
                      {rateTypeOptions.map((item, i) => (
                        <MenuItem value={item.value} key={i}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {/* sl */}
                  <Grid item style={{ marginTop: '20px', width: '100%' }}>
                    <TextField
                      select
                      variant="standard"
                      fullWidth
                      sx={textfieldSx}
                      SelectProps={
                        {
                          //native: true,
                        }
                      }
                      InputProps={{
                        startAdornment: <InputAdornment position="start">SL</InputAdornment>,
                      }}
                      value={loadEntry.sl}
                      onChange={(e) =>
                        setLoadEntry({
                          ...loadEntry,
                          sl: e.target.value,
                        })
                      }
                    >
                      {slOptions.map((item, i) => (
                        <MenuItem value={item.value} key={i}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {/* contact */}
                  <Grid style={{ marginTop: '20px', width: '100%' }}>
                    <Grid container spacing={1} alignItems="center">
                      {/* contact input */}
                      <Grid item style={{ flex: 1 }}>
                        <Autocomplete
                          value={loadEntry.equipment}
                          onChange={(event, newValue) => {
                            setLoadEntry({
                              ...loadEntry,
                              equipment: newValue,
                            });
                          }}
                          inputValue={equipmentInputValue}
                          onInputChange={(event, newInputValue) => {
                            setEquipmentInputValue(newInputValue);
                          }}
                          id="equipmentInput"
                          disableClearable
                          options={equipments.flatMap((c) => {
                            return c.values.map((v) => {
                              return {
                                label: v.label,
                                id: v.value,
                              };
                            });
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
                                  <InputAdornment position="start">Equipment</InputAdornment>
                                ),
                                endAdornment: (
                                  <InputAdornment>
                                    <IconButton
                                      style={{ padding: 0 }}
                                      onClick={() =>
                                        setSelectEquipmentModal({
                                          active: true,
                                          value: loadEntry.equipment,
                                        })
                                      }
                                    >
                                      <SearchIcon />
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* status */}
                  <Grid item style={{ marginTop: '20px', width: '100%' }}>
                    <TextField
                      select
                      variant="standard"
                      fullWidth
                      sx={textfieldSx}
                      SelectProps={
                        {
                          // native: true,
                        }
                      }
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Status</InputAdornment>,
                      }}
                      value={loadEntry.status}
                      onChange={(e) =>
                        setLoadEntry({
                          ...loadEntry,
                          status: e.target.value,
                        })
                      }
                    >
                      {statusOptions.map((item, i) => (
                        <MenuItem value={item.value} key={i}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </TextField>
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
