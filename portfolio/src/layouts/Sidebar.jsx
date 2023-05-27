import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FeedIcon from '@mui/icons-material/Feed';
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
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton sx={{ height: "4rem" }}>
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
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>

        <Stack direction="row" spacing={1} alignItems="center">
          <a href="https://www.linkedin.com/in/teodor-andrei-1b91371ba/" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="linkedin" size="large">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </a>
          <a href="https://github.com/Ted2121" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="github" size="large">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
          <a href="https://drive.google.com/file/d/1N6f3wBg4OMLF4_aL1n7IiLwDydOQ8ndH/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="cv" size="large">
              <FeedIcon fontSize="large" />
            </IconButton>
          </a>
        </Stack>
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