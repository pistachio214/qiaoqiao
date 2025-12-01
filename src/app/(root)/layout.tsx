'use client'

import { useState, useEffect } from 'react';

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

    const [windowsHeight, setWindowsHeight] = useState<string>('100%');

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    useEffect(() => {
        // const screenHeight = window.innerHeight;
        // console.log(screenHeight); // 输出当前屏幕高度

        if (window.visualViewport) {
            setWindowsHeight(`${window.visualViewport.height}px`);
        } else {
            setWindowsHeight(`${window.innerHeight}px`);
        }
    }, []);

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
            <Box
                sx={{
                    flexGrow: 1,
                    height: `${windowsHeight}`,
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'fixed',
                }}
            >
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

                <Container
                    component={'div'}
                    className='flex'
                    sx={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        height: '100%',
                    }}
                >
                    {children}
                </Container>
            </Box>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}
