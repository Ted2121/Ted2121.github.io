import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

function Contact() {
    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const email = "teodor.andrei174@gmail.com"

    return (
        <Box sx={{ marginTop: '30px', textAlign: 'center', marginBottom: "50px"}} id="contact">
            <Divider sx={{ width: '70%', margin: '20px auto' }}>Contact</Divider>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <IconButton
                    aria-label="contact"
                    size="large"
                    onClick={() => {
                        window.open(`mailto:${email}`);
                    }}
                >
                    <MailIcon fontSize="large" />
                </IconButton>
                <Typography sx={{margin: "0px 10px"}}>|</Typography>
                <Tooltip title="Copy to Clipboard" placement="right">
                    <IconButton
                        aria-label="Copy to Clipboard"
                        onClick={handleCopyToClipboard(email)}
                        size="large"
                    >
                        <ContentPasteIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Contact