"use client";

import { useState } from "react";

import useAppStore from "@/stores/useAppStore";

import { MarsIcon, VenusIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { useSidebar } from "@/components/ui/sidebar"

import { ageOptions, sexOptions } from "@/lib/data";
import { Option } from "@/types/option";
import { Button } from "../ui/button";


const SexSelect = () => {

    const { mate, updateMateAge, updateMateSex } = useAppStore();
    const { isMobile } = useSidebar();

    const [open, setOpen] = useState<boolean>(false);

    const onOpenAgeDrawer = () => {
        setOpen(true);
    }

    const saveAge = (age: Option) => {
        updateMateAge(age);
    }

    return (
        <>
            <div className={'flex-1 flex flex-col justify-around items-center'}>
                <div className={'flex flex-row justify-center gap-12'}>
                    {
                        sexOptions.map((item: Option, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-24 h-28 cursor-pointer rounded-2xl flex flex-col justify-center items-center ${mate.sex.value === item.value ? 'border-2 border-(--online-color) bg-(--card-active)' : ' bg-(--sex-card)'}`}
                                    onClick={() => {
                                        updateMateSex(sexOptions[index])
                                    }}
                                >
                                    {
                                        item.value === 1 ? <MarsIcon size={40} /> : <VenusIcon size={40} />
                                    }
                                    <span className={'pt-3! text-xs'}>
                                        我是{item.label}生
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>

                <div className={'flex justify-center'}>
                    <Button
                        variant="default"
                        className={'text-white bg-transparent cursor-pointer hover:bg-transparent '}
                        onClick={() => onOpenAgeDrawer()}
                    >
                        年龄: {mate.age.label}
                    </Button>
                </div>
            </div>

            {
                isMobile && (
                    <Drawer open={open} onOpenChange={setOpen} aria-labelledby={'drawer-age-group'}>
                        <DrawerContent className={'bg-(--card-board) pt-6! pb-6! pl-5! pr-5! border-none'}>
                            <DrawerHeader>
                                <DrawerTitle className="text-left text-[1.2rem] font-semibold text-(--font-color-focus)">
                                    选择你的年龄段
                                </DrawerTitle>
                                <DrawerDescription className="text-left text-[1rem]">
                                    Choose your age group
                                </DrawerDescription>
                            </DrawerHeader>

                            <div className="mt-4! mb-4! flex flex-col gap-2">
                                {
                                    ageOptions.map((item: Option, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`border ${mate.age.value === item.value ? 'border-(--radio-checked-color)' : 'border-(--radio-unchecked-color)'} p-2! text-(--font-color-focus)`}
                                                onClick={() => saveAge(item)}
                                            >
                                                {item.label}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </DrawerContent>
                    </Drawer >
                )
            }

            {
                !isMobile && (
                    <Dialog open={open} onOpenChange={setOpen} aria-labelledby={'dialog-age-group'}>
                        <DialogContent showCloseButton={false} className={'bg-(--card-board) pt-6! pb-6! pl-5! pr-5! border-none'}>
                            <DialogHeader>
                                <DialogTitle className="text-left text-[1.2rem] font-semibold text-(--font-color-focus)">
                                    选择你的年龄段
                                </DialogTitle>
                                <DialogDescription className="text-left text-[1rem]">
                                    Choose your age group
                                </DialogDescription>
                            </DialogHeader>

                            <div className="mt-4! mb-4! flex flex-col gap-2">
                                {
                                    ageOptions.map((item: Option, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`border ${mate.age.value === item.value ? 'border-(--radio-checked-color)' : 'border-(--radio-unchecked-color)'} p-2! text-(--font-color-focus)`}
                                                onClick={() => saveAge(item)}
                                            >
                                                {item.label}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </DialogContent>
                    </Dialog >
                )
            }

        </>
    );
}

export default SexSelect;