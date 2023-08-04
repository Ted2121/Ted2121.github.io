import React from 'react';
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SectionDivider from '../components/SectionDivider';

function Contact() {
    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const email = "teodor.andrei174@gmail.com"

    return (
        <Box sx={{ marginTop: '30px', textAlign: 'center', marginBottom: "50px" }} id="contact">
            <SectionDivider text='Contact'/>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <IconButton
                    aria-label="contact"
                    size="large"
                    onClick={() => {
                        window.open(`mailto:${email}`);
                    }}
                >
                    <MailIcon fontSize="large" />
                </IconButton>
                <Typography sx={{
                    margin: "0px 10px",
                }}>
                    |
                </Typography>
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