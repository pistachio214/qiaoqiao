'use client'

import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

import styles from './enter-message.module.scss';
import { CircleXIcon, ImageIcon } from "lucide-react";
import useAppStore from "@/stores/useAppStore";

export default function EnterMessage() {

    const { connect } = useAppStore();

    return (
        <div
            className="flex justify-center items-center"
            style={{ height: '90px', backgroundColor: 'var(--color-pop)', padding: '8px 12px' }}
        >

            {
                connect.status ? (
                    <div className="h-full w-full flex flex-col justify-between">
                        <Input
                            className={styles.enterMessageInput}
                            placeholder="想说的话～"
                        />

                        <div className="flex flex-row justify-end gap-10">
                            <div className="h-full">
                                <ImageIcon color="#ffffff" />
                            </div>

                            <div className="h-full">
                                <CircleXIcon color="#ffffff" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Button
                        className="w-full h-10"
                        style={{
                            backgroundColor: 'var(--button-primary-color)',
                            color: 'var(--button-primary-text-color)',
                        }}
                    >
                        重新分配
                    </Button>
                )
            }
        </div>
    );

}