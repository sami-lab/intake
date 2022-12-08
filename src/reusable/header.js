import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  Grid,
  Avatar,
  Menu,
  MenuItem,
  Switch,
  styled,
  TextField,
  InputAdornment,
  useMediaQuery,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightbulbCircleRoundedIcon from '@mui/icons-material/LightbulbCircleRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { ThemeContext } from '../../pages/_app';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 22,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 18,
    height: 18,
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#80B4C8' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
export default function Header() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('400'));

  const toggleTheme = React.useContext(ThemeContext);
  const [userMenu, setUserMenu] = useState(null);
  const [settingMenu, setSettingMenu] = useState(null);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [search, setSearch] = useState('');

  const logoutHandler = () => {};

  const userMenuID = 'user-menu';
  const renderUserMenu = (
    <Menu
      anchorEl={userMenu}
      id={userMenuID}
      keepMounted
      //MenuListProps={{ onMouseLeave: () => setSettingMenu(null) }}
      open={Boolean(userMenu)}
      onClose={() => setUserMenu(null)}
      getcontentanchorel={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        '.MuiMenu-paper': {
          boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          borderRadius: '6px',
          padding: '2px 16px',
          marginTop: '10px',
        },
      }}
      disableScrollLock
    >
      {/* view/edit profile */}
      <MenuItem style={{ background: 'transparent' }} onClick={() => setUserMenu(null)}>
        {/* <Link href="/change-password" style={{ textDecoration: 'none' }}> */}
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body1">View/Edit Profile</Typography>
          </Grid>
        </Grid>
        {/* </Link> */}
      </MenuItem>
      {/* toggle theme */}
      <MenuItem style={{ background: 'transparent' }}>
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body1">Dark Mode</Typography>
          </Grid>
          <Grid item>
            <IOSSwitch
              sx={{ m: 1 }}
              checked={theme.palette.mode === 'dark'}
              onChange={toggleTheme}
            />
          </Grid>
        </Grid>
      </MenuItem>
      {/* logout */}
      <MenuItem style={{ background: 'transparent' }} onClick={logoutHandler}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body1">Logout</Typography>
          </Grid>
        </Grid>
      </MenuItem>
    </Menu>
  );

  const settingMenuID = 'setting-menu';
  const renderSettingMenu = (
    <Menu
      anchorEl={settingMenu}
      id={settingMenuID}
      keepMounted
      //MenuListProps={{ onMouseLeave: () => setSettingMenu(null) }}
      open={Boolean(settingMenu)}
      onClose={() => setSettingMenu(null)}
      getcontentanchorel={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        '.MuiMenu-paper': {
          boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          borderRadius: '6px',
          padding: '2px 16px',
          marginTop: '10px',
        },
      }}
      disableScrollLock
    >
      {/* Add Account */}
      <MenuItem style={{ background: 'transparent' }} onClick={() => setSettingMenu(null)}>
        {/* <Link href="/change-password" style={{ textDecoration: 'none' }}> */}
        <Grid container spacing={2}>
          <Grid item>
            <AddCircleRoundedIcon
              style={{
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.light.main
                    : theme.palette.primary.main,
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.light.main
                    : theme.palette.primary.main,
              }}
            >
              Add Account
            </Typography>
          </Grid>
        </Grid>
        {/* </Link> */}
      </MenuItem>

      {/* Add Task */}
      <MenuItem style={{ background: 'transparent' }} onClick={() => setSettingMenu(null)}>
        {/* <Link href="/change-password" style={{ textDecoration: 'none' }}> */}
        <Grid container spacing={2}>
          <Grid item>
            <AddCircleRoundedIcon
              style={{
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.light.main
                    : theme.palette.primary.main,
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.light.main
                    : theme.palette.primary.main,
              }}
            >
              Add Task
            </Typography>
          </Grid>
        </Grid>
        {/* </Link> */}
      </MenuItem>
    </Menu>
  );
  return (
    <div>
      {renderUserMenu}
      {renderSettingMenu}
      <AppBar
        elevation={0}
        position="static"
        style={{
          padding: '20px 0px',
          background:
            theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.light.main,
          color: theme.palette.mode !== 'dark' ? theme.palette.dark.main : theme.palette.light.main,
        }}
      >
        <Toolbar disableGutters>
          <Grid container className="container" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container style={{ gap: '10px' }} alignItems={'center'}>
                <Grid item>
                  <IconButton style={{ padding: 0 }} color="inherit" aria-label="menu">
                    <MenuIcon
                      style={{
                        fontSize: '2.2rem',
                        color:
                          theme.palette.mode === 'dark'
                            ? theme.palette.light.main
                            : theme.palette.secondary.main,
                      }}
                    />
                  </IconButton>
                </Grid>
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
                    Section Name
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {displaySearch && !matchesSM && (
              <Grid item style={{ flex: 1 }}>
                <Grid container justifyContent="center">
                  <Grid item md={10} xs={11}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Search"
                      variant="outlined"
                      sx={{
                        '.MuiInputBase-root': {
                          boxShadow:
                            'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                          border: 0,
                        },
                        '.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          border: 0,
                          borderColor: 'transparent',
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment>
                            <SearchIcon sx={{ marginRight: '10px' }} />
                          </InputAdornment>
                        ),
                      }}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item>
              <Grid container spacing={2} alignItems={'center'}>
                {/* search icon */}
                {!matchesSM && (
                  <Grid item>
                    <IconButton disableRipple onClick={() => setDisplaySearch((s) => !s)}>
                      <SearchIcon
                        style={{
                          fontSize: '2.2rem',
                          color:
                            theme.palette.mode === 'dark'
                              ? theme.palette.light.main
                              : theme.palette.primary.main,
                        }}
                      />
                    </IconButton>
                  </Grid>
                )}
                {/* Notification icon */}
                {!matchesSM && (
                  <Grid item>
                    <IconButton disableRipple>
                      <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 7, right: 4 }}>
                          <div
                            style={{
                              width: '10px',
                              height: '10px',
                              background: 'red',
                              borderRadius: '50%',
                              border: '0.5px solid #fff',
                            }}
                          />
                        </div>
                        <NotificationsIcon
                          style={{
                            fontSize: '2.2rem',
                            color:
                              theme.palette.mode === 'dark'
                                ? theme.palette.light.main
                                : theme.palette.primary.main,
                          }}
                        />
                      </div>
                    </IconButton>
                  </Grid>
                )}
                {/* bulb icon */}
                {!matchesSM && (
                  <Grid item>
                    <IconButton
                      disableRipple
                      aria-owns={settingMenu ? settingMenuID : undefined}
                      aria-haspopup={settingMenu ? true : false}
                      onClick={(e) => setSettingMenu(e.currentTarget)}
                    >
                      <LightbulbCircleRoundedIcon
                        style={{
                          fontSize: '2.2rem',
                          color:
                            theme.palette.mode === 'dark'
                              ? theme.palette.light.main
                              : theme.palette.primary.main,
                        }}
                      />
                    </IconButton>
                  </Grid>
                )}
                {/* image */}
                <Grid item>
                  <Grid
                    container
                    alignItems={'center'}
                    aria-owns={userMenu ? userMenuID : undefined}
                    aria-haspopup={userMenu ? true : false}
                    onClick={(e) => setUserMenu(e.currentTarget)}
                    style={{ cursor: 'pointer', gap: '10px' }}
                  >
                    <Avatar src="/testUser.png" style={{ width: '50px', height: '50px' }} />
                    {!matchesXS && (
                      <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                        Hello, User <KeyboardArrowDownRoundedIcon />
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
