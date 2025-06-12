import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
        boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
        borderRadius: { xs: 0, sm: '0 0 18px 18px' },
      }}
    >
      <Toolbar sx={{ minHeight: 64, px: { xs: 1, sm: 3 } }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            letterSpacing: 1,
            color: '#fff',
            fontSize: { xs: '1.1rem', sm: '1.35rem' },
            textShadow: '0 2px 8px rgba(25,118,210,0.10)',
            userSelect: 'none',
          }}
        >
          Comply's Smart Compliance Scheduler
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{
                ml: 1,
                bgcolor: 'rgba(255,255,255,0.12)',
                borderRadius: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  width: 240,
                  borderTopLeftRadius: 18,
                  borderBottomLeftRadius: 18,
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  width: 240,
                  pt: 2,
                  pb: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                role="presentation"
                onClick={() => setDrawerOpen(false)}
                onKeyDown={() => setDrawerOpen(false)}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#1976d2',
                    px: 2,
                    mb: 1,
                  }}
                >
                  Menu
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <List>
                  {menuItems.map((item) => (
                    <ListItem
                      button
                      key={item.text}
                      component={RouterLink}
                      to={item.to}
                      sx={{
                        borderRadius: 2,
                        mx: 1,
                        mb: 0.5,
                        transition: 'background 0.2s',
                        '&:hover': {
                          background: 'rgba(25, 118, 210, 0.08)',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: '#1976d2', minWidth: 36 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          color: '#1976d2',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={RouterLink}
                to={item.to}
                startIcon={item.icon}
                sx={{
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 2,
                  mx: 0.5,
                  background: 'rgba(255,255,255,0.08)',
                  transition: 'background 0.2s',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.18)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;