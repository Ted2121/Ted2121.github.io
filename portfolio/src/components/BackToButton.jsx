import { IconButton } from '@mui/material';
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-scroll';

function BackToButton({ index }) {
  return (
    <Link
      to={`${index}`}
      key={index}
      smooth
      offset={-70}
      duration={500}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        width: "100%",
        flexBasis: 'content',
        textAlign:'center'
      }}>
      <IconButton>
        <KeyboardArrowUpIcon sx={{
          fontSize: '3rem'
        }} />
      </IconButton>
    </Link>

  )
}

export default BackToButton;