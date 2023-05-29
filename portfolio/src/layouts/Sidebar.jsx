import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Box';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-scroll';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ExternalProfiles from '../components/ExternalProfiles';

const drawerWidth = 250;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h3" component="h1">Teodor Andrei</Typography>
      </Toolbar>
      <Divider />
      <List>
        {['About Me', 'Projects', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
          <Link
            to={text.toLowerCase().replace(' ', '-')}
            smooth
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit', width: "100%" }}
          >
            <ListItemButton sx={{ height: '4rem', display: 'flex', alignItems: 'center' }}>
              <ListItemIcon>
                {index === 0 && <AccountBoxIcon /> ||
                  index === 1 && <DeveloperModeIcon /> ||
                  index === 2 && <AlternateEmailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ sx: { fontSize: '1.2rem' } }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>

        <ExternalProfiles />
      </Box>
    </div>
  );


  return (
    <Grid sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          display: { sm: 'none' }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Grid
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sections"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Grid>

    </Grid>
  );
}

export default Sidebar;