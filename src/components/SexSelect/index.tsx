
"use client";

import { useState } from "react";

import {
    Container, Box, Button,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from "@mui/material";
import { FemaleOutlined, MaleOutlined } from "@mui/icons-material";

import styles from './sexSelect.module.scss';
import classNames from "classnames";


export default function SexSelect() {

    const [sex, setSex] = useState(1);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Box className={styles.sexBox}>
                <Container className={styles.sexBoxContainer}>
                    <Box
                        className={
                            classNames(styles['sex-box'], {
                                [styles['sex-box-active']]: sex === 1
                            })
                        }
                        onClick={() => setSex(1)}
                    >
                        <MaleOutlined fontSize={'large'} />
                    </Box>
                    <Box
                        className={
                            classNames(styles['sex-box'], {
                                [styles['sex-box-active']]: sex === 2
                            })
                        }
                        onClick={() => setSex(2)}
                    >
                        <FemaleOutlined fontSize={'large'} />
                    </Box>
                </Container>
                <Container className={styles.sexBoxAgeContainer}>
                    <Button variant="text" className={styles.sexSelectBtn} onClick={() => setOpen(true)}>
                        年龄: 18-26岁
                    </Button>
                </Container>
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                closeAfterTransition={false}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}