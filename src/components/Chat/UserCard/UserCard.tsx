'use client'

import { Box, Typography } from "@mui/material";
import { LocationOn, Person, Sell } from "@mui/icons-material";

import useAppStore from "@/stores/useAppStore";

import styles from './user-card.module.scss';

const TagCard = (props: { text: string }) => {
    return (
        <Box className={styles.tagCard}>{props.text}</Box>
    );
}

export const UserCard = () => {

    const { connect } = useAppStore();

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.boxCard}>
                <Box className={styles.rowCenter}>
                    <Box className={styles.iconBoard}>
                        <Person sx={{ fontSize: '1.2rem' }} />
                    </Box>
                    <Box className={styles.sexBox}>{connect.otherMate.sex.label}</Box>
                    <Box>{connect.otherMate.age.label}</Box>
                </Box>
                <Box className={styles.rowCenter} sx={{ marginTop: '12px' }}>
                    <Box className={styles.iconBoard}>
                        <LocationOn sx={{ fontSize: '1.1rem' }} />
                    </Box>
                    <Box>{connect.otherMate.location}</Box>
                </Box>
                <Box className={styles.rowCenter} sx={{ marginTop: '12px' }}>
                    <Box className={styles.iconBoard}>
                        <Sell sx={{ fontSize: '1.1rem' }} />
                    </Box>
                    <Box className={styles.tagBox}>
                        {
                            connect.otherMate.tag.map((item: string, i: number) => {
                                return <TagCard key={i} text={item} />
                            })
                        }
                    </Box>
                </Box>
            </Box>

            <Box className={`${styles.boxCard} ${styles.hintCard}`}>
                <Typography className={styles.text}>
                    绿色聊天，遵守秩序，本站24H进行举报内容审核
                </Typography>

                <Typography className={styles.text}>
                    你正处于清流模式中，对方如发送敏感词将被屏蔽并处罚
                </Typography>
            </Box>

        </Box>
    );
}