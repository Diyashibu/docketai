import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Industries', hasDropdown: true },
    { label: 'Product', hasDropdown: true },
    { label: 'Resources', hasDropdown: true },
    { label: 'Customer Stories', hasDropdown: true },
    { label: 'About', hasDropdown: true },
  ];

  const drawer = (
    <Box sx={{ width: 280, bgcolor: '#181818', height: '100%', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.label} sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding sx={{ px: 2, mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: 'white',
              color: '#181818',
              '&:hover': { bgcolor: '#f0f0f0' },
              borderRadius: '100px',
              py: 1.5,
            }}
          >
            Book a demo
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(24, 24, 24, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(244, 246, 253, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* LEFT LOGO IMAGE ONLY */}
            <Box
              component="img"
              src="/logo.png"   // 🔁 change extension if needed
              alt="Docket"
              sx={{
                height: 70,
                cursor: 'pointer',
              }}
            />

            {/* DESKTOP MENU */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    endIcon={item.hasDropdown && <KeyboardArrowDownIcon />}
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 400,
                      px: 2,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* CTA + MOBILE MENU */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!isMobile && (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'white',
                    color: '#181818',
                    '&:hover': { bgcolor: '#f0f0f0' },
                    borderRadius: '100px',
                    px: 3,
                    py: 1,
                  }}
                >
                  Book a demo
                </Button>
              )}

              {isMobile && (
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
