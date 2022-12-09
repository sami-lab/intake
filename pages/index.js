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
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

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

const DeleteModal = (props) => {
  const theme = useTheme();

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
                    color: theme.palette.mode === 'dark' ? theme.palette.light.main : 'red',
                  }}
                >
                  Delete {props.title}
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '-10px' }}>
                <IconButton style={{ padding: 0 }} onClick={props.handleClose}>
                  <CancelIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          {/* description */}
          <Grid item style={{ width: '100%', marginTop: '20px' }}>
            <Typography variant="subtitle1">
              You are about to delete "{props.element}", are you sure?
            </Typography>
          </Grid>
          {/* submit */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={2} justifyContent={'flex-end'}>
              {/* delete */}
              <Grid item>
                <Button
                  variant="contained"
                  style={{
                    boxShadow: 'none',
                    minWidth: '60px',
                    background: theme.palette.mode === 'dark' ? theme.palette.light.main : 'red',
                  }}
                  primary
                  onClick={props.submitHandler}
                >
                  Delete
                </Button>
              </Grid>
              {/* cancel */}
              <Grid item>
                <Button
                  variant="contained"
                  style={{ background: '#92949C', boxShadow: 'none', minWidth: '60px' }}
                  onClick={props.handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const EditCommodityDialog = (props) => {
  const theme = useTheme();
  const [data, setData] = useState({
    commodityName: '',
    pieces: '',
    weight: '',
    pallets: '',
    cube: '',
    volume: '',
  });
  const [error, setError] = useState('');
  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, []);

  const submitHandler = () => {
    setError('');
    if (
      data.commodityName.trim() === '' ||
      data.pieces.trim() === '' ||
      data.weight.trim() === '' ||
      data.pallets.trim() === '' ||
      data.cube.trim() === '' ||
      data.volume.trim() === ''
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
                  Edit Commodity
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '-10px' }}>
                <IconButton style={{ padding: 0 }} onClick={props.handleClose}>
                  <CancelIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          {/* commodityName Pieces  */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="space-between">
              {/* commodityName */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Commodity Name"
                  placeholder="Commodity Name"
                  value={data.commodityName}
                  onChange={(e) =>
                    setData({
                      ...data,
                      commodityName: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* Pieces */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Pieces"
                  placeholder="Pieces"
                  value={data.pieces}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pieces: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Weight pallets  */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="space-between">
              {/* commodityName */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Weight"
                  placeholder="Weight"
                  value={data.weight}
                  onChange={(e) =>
                    setData({
                      ...data,
                      weight: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* pallets */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Pallets"
                  placeholder="Pallets"
                  value={data.pallets}
                  onChange={(e) =>
                    setData({
                      ...data,
                      pallets: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Grid>

          {/* cube volume  */}
          <Grid item style={{ width: '100%', marginTop: '40px' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="space-between">
              {/* cube */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Cube"
                  placeholder="Cube"
                  value={data.cube}
                  onChange={(e) =>
                    setData({
                      ...data,
                      cube: e.target.value,
                    })
                  }
                />
              </Grid>
              {/* volume */}
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Volume"
                  placeholder="Volume"
                  value={data.volume}
                  onChange={(e) =>
                    setData({
                      ...data,
                      volume: e.target.value,
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
export default function Index() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const matches1400 = useMediaQuery(theme.breakpoints.down('1400'));

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

  const [rateAmount, setRateAmount] = useState({
    contractAmount: '',
    margin: '',
    declValue: '',
    actualAmount: '',
    actualMargin: '',
  });

  const [expanded, setExpanded] = React.useState('panel2');
  const [commodities, setCommodities] = React.useState([
    {
      commodityName: '',
      pieces: '',
      weight: '',
      pallets: '',
      cube: '',
      volume: '',
    },
  ]);
  const [deleteCommodityModal, setDeleteCommodityModal] = React.useState({
    active: false,
    index: -1,
    name: '',
  });
  const [editCommodityModal, setEditCommodityModal] = React.useState({
    active: false,
    index: -1,
    data: null,
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
      //fontSize: '13px',
      paddingRight: '10px',
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

      <DeleteModal
        open={deleteCommodityModal.active}
        handleClose={() => {
          setDeleteCommodityModal({
            active: false,
            index: -1,
            name: '',
          });
        }}
        title="Commodity"
        element={deleteCommodityModal.name}
        submitHandler={() => {
          setCommodities(commodities.filter((c, i) => i !== deleteCommodityModal.index));
          setDeleteCommodityModal({
            active: false,
            index: -1,
            name: '',
          });
        }}
      />

      <EditCommodityDialog
        open={editCommodityModal.active}
        handleClose={() => {
          setEditCommodityModal({
            active: false,
            index: -1,
            data: null,
          });
        }}
        data={editCommodityModal.data}
        submitHandler={(data, callback) => {
          setCommodities(
            commodities.map((c, i) => {
              if (i === deleteCommodityModal.index) {
                return data;
              }
              return c;
            })
          );

          setEditCommodityModal({
            active: false,
            index: -1,
            data: null,
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
          <Grid item style={{ display: 'flex', width: matches1400 ? '100%' : '33%' }}>
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
          <Grid item style={{ display: 'flex', width: matches1400 ? '100%' : '17%' }}>
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
          {/* Trace numbers */}
          <Grid item style={{ display: 'flex', width: matches1400 ? '100%' : '25%' }}>
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
                  Trace Numbers
                </Typography>
              </Grid>
              <Grid item style={{ width: '100%' }}>
                <Grid container direction="column" alignItems={'flex-start'}>
                  {/* trace number and type */}
                  <Grid item style={{ marginTop: '20px', width: '100%' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: 600,
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#505050',
                          }}
                        >
                          Trace Number
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: 600,
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#505050',
                          }}
                        >
                          Type
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* divider */}
                  <Grid item style={{ marginTop: '5px', width: '100%' }}>
                    <Divider style={{ borderWidth: '1px' }} />
                  </Grid>
                  {/* EDI shipment ID */}
                  <Grid item style={{ marginTop: '10px', width: '100%' }}>
                    <Grid container spacing={1}>
                      {/* value */}
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          A000000000
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          EDI Shipment ID
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Bill of Landing */}
                  <Grid item style={{ marginTop: '10px', width: '100%' }}>
                    <Grid container spacing={1}>
                      {/* value */}
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          ABC000000
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          Bill of Landing
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ProBill */}
                  <Grid item style={{ marginTop: '10px', width: '100%' }}>
                    <Grid container spacing={1}>
                      {/* value */}
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          A0000000000
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          ProBill
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* purchase order */}
                  <Grid item style={{ marginTop: '10px', width: '100%' }}>
                    <Grid container spacing={1}>
                      {/* value */}
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: '13px',
                            lineHeight: '20px',
                            color:
                              theme.palette.mode === 'dark' ? theme.palette.light.main : '#777777',
                          }}
                        >
                          0000
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ gap: '4px' }}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Typography
                              variant="body2"
                              style={{
                                fontSize: '13px',
                                lineHeight: '20px',
                                color:
                                  theme.palette.mode === 'dark'
                                    ? theme.palette.light.main
                                    : '#777777',
                              }}
                            >
                              Purchase Order
                            </Typography>
                          </Grid>
                          <Grid item>
                            <IconButton
                              style={{ padding: 0 }}
                              // onClick={() => {
                              //   setOpenAddCustomerModal({
                              //     active: true,
                              //     customer: null,
                              //   });
                              // }}
                              disableRipple
                            >
                              <AddCircleIcon
                                style={{
                                  color:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.light.main
                                      : theme.palette.primary.main,
                                }}
                                fontSize="small"
                              />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Rate Amount */}
          <Grid item style={{ display: 'flex', width: matches1400 ? '100%' : '25%' }}>
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
                  Rate Amount
                </Typography>
              </Grid>
              {/* inputs */}
              <Grid item style={{ width: '100%' }}>
                <Grid container direction="column" alignItems={'flex-start'}>
                  {/* contract amount, Margin, Decl value */}
                  <Grid item style={{ marginTop: '20px', width: '100%' }}>
                    <Grid container spacing={4} alignItems="center" justifyContent="space-between">
                      {/* contractAmount */}
                      <Grid item xs={4}>
                        <TextField
                          variant="standard"
                          fullWidth
                          label="Contract Amount"
                          placeholder=""
                          InputProps={{
                            startAdornment: '$',
                          }}
                          value={rateAmount.contractAmount}
                          onChange={(e) =>
                            setRateAmount({
                              ...rateAmount,
                              contractAmount: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      {/* margin */}
                      <Grid item xs={4}>
                        <TextField
                          variant="standard"
                          fullWidth
                          label="Margin"
                          placeholder=""
                          InputProps={{
                            startAdornment: ' ',
                            endAdornment: '%',
                          }}
                          value={rateAmount.margin}
                          onChange={(e) =>
                            setRateAmount({
                              ...rateAmount,
                              margin: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      {/* declValue */}
                      <Grid item xs={4}>
                        <TextField
                          variant="standard"
                          fullWidth
                          label="Decl. Value"
                          placeholder=""
                          InputProps={{
                            startAdornment: '$',
                          }}
                          value={rateAmount.declValue}
                          onChange={(e) =>
                            setRateAmount({
                              ...rateAmount,
                              declValue: e.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* actualAmtount actualMargin */}
                  <Grid item style={{ marginTop: '20px', width: '100%' }}>
                    <Grid container spacing={4} alignItems="center">
                      {/* actualAmount */}
                      <Grid item xs={4}>
                        <TextField
                          variant="standard"
                          fullWidth
                          label="Actual Covered Amt."
                          placeholder=""
                          InputProps={{
                            startAdornment: '$',
                          }}
                          value={rateAmount.actualAmount}
                          onChange={(e) =>
                            setRateAmount({
                              ...rateAmount,
                              actualAmount: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      {/*Actual margin */}
                      <Grid item xs={4}>
                        <TextField
                          variant="standard"
                          fullWidth
                          label="Actual Margin"
                          placeholder=""
                          InputProps={{
                            startAdornment: ' ',
                            endAdornment: '%',
                          }}
                          value={rateAmount.actualMargin}
                          onChange={(e) =>
                            setRateAmount({
                              ...rateAmount,
                              actualMargin: e.target.value,
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

      {/* commadities */}
      <Grid item className="container" style={{ width: '100%', marginTop: '30px' }}>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={(event, newExpanded) => {
            setExpanded(newExpanded ? 'panel2' : false);
          }}
          sx={cardStyleSx}
          style={{ padding: '10px 25px', borderRadius: '15px' }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            {/* heading and add icon */}
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <AccordionSummary
                    style={{ padding: 0 }}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
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
                      Commodities
                    </Typography>
                  </AccordionSummary>
                </Grid>
                <Grid item>
                  <IconButton
                    style={{ padding: 0 }}
                    // onClick={() => {
                    //   setOpenAddCustomerModal({
                    //     active: true,
                    //     customer: null,
                    //   });
                    // }}
                    disableRipple
                  >
                    <AddCircleIcon
                      style={{
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.light.main
                            : theme.palette.primary.main,
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            {/* info and Arrow */}
            <Grid item>
              <Grid container alignItems="center" spacing={matchesMD ? 2 : 5}>
                {/* Commodity Name */}
                <Grid item>
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
                    Commodity: Commodity Name
                  </Typography>
                </Grid>
                {/* Pieces */}
                <Grid item>
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
                    Pieces: 000
                  </Typography>
                </Grid>
                {/* Weight */}
                <Grid item>
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
                    Weight: 000
                  </Typography>
                </Grid>
                {/* Pallets */}
                <Grid item>
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
                    Pallets: 000
                  </Typography>
                </Grid>
                {/* Cube */}
                <Grid item>
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
                    Cube: 000
                  </Typography>
                </Grid>
                {/* Volume */}
                <Grid item>
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
                    Volume: 000
                  </Typography>
                </Grid>
                {/* Arrow */}
                <Grid item>
                  {expanded === 'panel2' ? (
                    <KeyboardArrowUpIcon fontSize="large" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="large" />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <AccordionDetails style={{ padding: 0, paddingBottom: '40px' }}>
            <Grid container direction="column">
              {commodities.map((item, i) => (
                <Grid item key={i} style={{ marginTop: '15px' }}>
                  <Grid
                    container
                    justifyContent="space-between"
                    style={{
                      padding: '30px 30px',
                      border: '1px solid #E0E1E3',
                      borderRadius: '15px',
                      gap: '40px',
                    }}
                  >
                    {/* commodityName */}
                    <Grid item>
                      <TextField
                        variant="standard"
                        placeholder="Commodity Name"
                        fullWidth
                        sx={textfieldSx}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">Commodity</InputAdornment>
                          ),
                        }}
                        value={item.commodityName}
                        onChange={(e) =>
                          setCommodities((c) =>
                            c.map((x, ind) => {
                              if (i === ind) {
                                x.commodityName = e.target.value;
                              }
                              return x;
                            })
                          )
                        }
                      />
                    </Grid>
                    {/* Pieces */}
                    <Grid item>
                      <TextField
                        variant="standard"
                        placeholder="Code"
                        fullWidth
                        sx={textfieldSx}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Pieces</InputAdornment>,
                        }}
                        value={item.pieces}
                        onChange={(e) =>
                          setCommodities((c) =>
                            c.map((x, ind) => {
                              if (i === ind) {
                                x.pieces = e.target.value;
                              }
                              return x;
                            })
                          )
                        }
                      />
                    </Grid>
                    {/* weight */}
                    <Grid item>
                      <TextField
                        variant="standard"
                        placeholder="000"
                        fullWidth
                        sx={textfieldSx}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Weight</InputAdornment>,
                        }}
                        value={item.weight}
                        onChange={(e) =>
                          setCommodities((c) =>
                            c.map((x, ind) => {
                              if (i === ind) {
                                x.weight = e.target.value;
                              }
                              return x;
                            })
                          )
                        }
                      />
                    </Grid>
                    {/* pallets */}
                    <Grid item>
                      <TextField
                        variant="standard"
                        placeholder="000"
                        fullWidth
                        sx={textfieldSx}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Pallets</InputAdornment>,
                        }}
                        value={item.pallets}
                        onChange={(e) =>
                          setCommodities((c) =>
                            c.map((x, ind) => {
                              if (i === ind) {
                                x.pallets = e.target.value;
                              }
                              return x;
                            })
                          )
                        }
                      />
                    </Grid>
                    {/* cube */}
                    <Grid item>
                      <TextField
                        variant="standard"
                        placeholder="000"
                        fullWidth
                        sx={textfieldSx}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Cube</InputAdornment>,
                        }}
                        value={item.cube}
                        onChange={(e) =>
                          setCommodities((c) =>
                            c.map((x, ind) => {
                              if (i === ind) {
                                x.cube = e.target.value;
                              }
                              return x;
                            })
                          )
                        }
                      />
                    </Grid>
                    {/* volume */}
                    <Grid item>
                      <TextField
                        variant="standard"
                        placeholder="000"
                        fullWidth
                        sx={textfieldSx}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Volume</InputAdornment>,
                        }}
                        value={item.volume}
                        onChange={(e) =>
                          setCommodities((c) =>
                            c.map((x, ind) => {
                              if (i === ind) {
                                x.volume = e.target.value;
                              }
                              return x;
                            })
                          )
                        }
                      />
                    </Grid>
                    {/* button */}
                    <Grid item>
                      <Grid container style={{ gap: '20px' }}>
                        {/* edit */}
                        <Grid item>
                          <IconButton
                            style={{ padding: 0 }}
                            onClick={() => {
                              setEditCommodityModal({
                                active: true,
                                index: i,
                                data: item,
                              });
                            }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Grid>
                        {/* delete */}
                        <Grid item>
                          <IconButton
                            style={{ padding: 0 }}
                            onClick={() => {
                              setDeleteCommodityModal({
                                active: true,
                                index: i,
                                name: item.commodityName,
                              });
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Grid>
                        {/* Menu */}
                        <Grid item>
                          <IconButton style={{ padding: 0 }}>
                            <MenuIcon fontSize="small" />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
