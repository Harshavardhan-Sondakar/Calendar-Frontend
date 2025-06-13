import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      to: '/',
    },
    {
      text: 'Calendar',
      icon: <CalendarMonthIcon />,
      to: '/calendar',
    },
    {
      text: 'New Event',
      icon: <AddIcon />,
      to: '/event/new',
    },
  ];

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', boxShadow: 'none', borderBottom: '1px solid #f0f0f0' }}>
      <Toolbar sx={{ minHeight: 72, px: { xs: 1, sm: 4 }, gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'cursive',
              fontWeight: 700,
              color: '#027ef7',
              letterSpacing: 1,
              userSelect: 'none',
            }}
          >
            Comply
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={RouterLink}
              to={item.to}
              startIcon={item.icon}
              sx={{
                color: '#181828',
                fontWeight: 600,
                fontSize: 16,
                textTransform: 'none',
                px: 1,
                '&:hover': { color: '#4b9ff2', bgcolor: 'transparent' },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        {/* Spacer after nav links */}
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;