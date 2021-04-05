import React from 'react';
import './Comprar.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='compra'>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
       ▾
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Ropa</MenuItem>
        <MenuItem onClick={handleClose}>Zapatos</MenuItem>
        <MenuItem onClick={handleClose}>Accesorios</MenuItem>
      </Menu>
    </div>
  );
}