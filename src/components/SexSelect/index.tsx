
"use client";

import { useState } from "react";

import {
    Container, Box, Button, Drawer,
    Typography, RadioGroup, FormControlLabel, Radio
} from "@mui/material";
import { FemaleOutlined, MaleOutlined } from "@mui/icons-material";

import classNames from "classnames";
import useAppStore from "@/stores/useStore";
import { AgeOption } from "@/types/age";
import { ageOptions } from "@/lib/data";

import styles from './sexSelect.module.scss';

const radioColor = {
    color: 'var(--radio-unchecked-color)', // 默认颜色
    '&.Mui-checked': {
        color: 'var(--radio-checked-color)', // 选中时的颜色
    },
    '&:hover': {
        backgroundColor: 'rgba(237, 108, 2, 0.04)', // 悬停背景色
    },
};

export default function SexSelect() {

    const { age, setAge } = useAppStore();

    const [sex, setSex] = useState(1);
    const [open, setOpen] = useState(false);
    const [ageType, setAgeType] = useState<AgeOption>(ageOptions[0]);

    const onOpenAgeDrawer = () => {
        setAgeType(age);
        setOpen(true);
    }

    const onCloseAgeDrawer = () => {
        setOpen(false);
    }

    const saveAge = (age: AgeOption) => {
        setAge(age);
        onCloseAgeDrawer();
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
                    <Button
                        variant="text"
                        className={styles.sexSelectBtn}
                        onClick={() => onOpenAgeDrawer()}
                    >
                        年龄: {age.label}
                    </Button>
                </Container>
            </Box>

            <Drawer
                anchor={'bottom'}
                open={open}
                onClose={() => onCloseAgeDrawer()}
                slotProps={{
                    paper: {
                        sx: {
                            borderTopLeftRadius: '12px',
                            borderTopRightRadius: '12px',
                            boxShadow: 'none',
                            backgroundColor: 'transparent',
                        }
                    }
                }}
            >
                <Container className={styles.drawerContainer}>
                    <Typography className={styles.titleText}>
                        年龄选择
                    </Typography>

                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        value={ageType.value}
                        onChange={(event) => {
                            const value = event.target.value;
                            for (let i = 0; i < ageOptions.length; i++) {
                                if (ageOptions[i].value === parseInt(value)) {
                                    setAgeType(ageOptions[i]);
                                    break;
                                }
                            }
                        }}
                        name="radio-buttons-group"
                    >
                        {
                            ageOptions.map((item: AgeOption, index: number) => {
                                return (
                                    <FormControlLabel
                                        key={index}
                                        value={item.value}
                                        control={
                                            <Radio
                                                size="small"
                                                sx={radioColor}
                                            />
                                        }
                                        label={item.label}
                                    />
                                )
                            })
                        }
                    </RadioGroup>

                    <Box className={styles.drawerBtnBox}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                borderRadius: '24px',
                                backgroundColor: 'var(--radio-checked-color)',
                                color: '#000'
                            }}
                            onClick={() => saveAge(ageType)}
                        >
                            保存
                        </Button>
                    </Box>
                </Container>

            </Drawer>
        </>
    )
}