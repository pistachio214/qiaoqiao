'use client'

import { useState } from 'react';

import {
    AppBar, Container, Drawer, IconButton, Typography, Toolbar, Box,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Divider
} from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box className='flex flex-col' sx={{ flexGrow: 1, minHeight: '-webkit-fill-available;' }}>
                <AppBar position="static" elevation={0} color='transparent'>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            aria-label="menu"
                            color="inherit"
                            sx={{ mr: 2, color: '#ffffff' }}
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuOutlinedIcon fontSize='inherit' />
                        </IconButton>
                        <Typography
                            // variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                color: '#fff',
                                textAlign: 'center'
                            }}
                        >
                            qiaoqiao
                        </Typography>
                        <IconButton
                            edge="end"
                            color="inherit"
                            sx={{ color: '#ffffff' }}
                        >
                            <ManageSearchOutlinedIcon fontSize='inherit' />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Container component={'div'} className='flex-1 flex'>
                    {children}
                </Container>
            </Box>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}
