'use client'

import { useState } from "react";

import Image from "next/image";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import LoginForm from "./LoginForm";
import { useSidebar } from "../ui/sidebar";

export default function SidebarUserInfo() {

    const { isMobile } = useSidebar();

    const [open, setOpen] = useState<boolean>(false);

    const showLoginDrawer = () => {
        setOpen(true)
    }

    return (
        <>
            <div className="w-full cursor-pointer select-none">
                <div
                    className="rounded-lg p-3! flex flex-col justify-center overflow-hidden"
                    style={{
                        background: 'linear-gradient(to right bottom, rgb(11, 232, 114), rgb(83, 4, 195))',
                        boxShadow: '8px 10px 5px 1px hsla(0, 0%, 4% .15)'
                    }}
                >
                    <div
                        className="text-[1.1rem] font-extrabold text-(--font-color-focus)"
                        onClick={() => showLoginDrawer()}
                    >
                        登录
                    </div>

                    <div
                        className="mt-2! mb-1! text-[.7rem] font-normal"
                        style={{ color: 'hsla(0, 0%, 100%, .8)' }}
                    >
                        新用户首次充值
                        <span className="font-semibold">买一送一</span>
                    </div>
                </div>
            </div>

            {
                isMobile && (
                    <Drawer open={open} onOpenChange={setOpen} aria-labelledby={'drawer-login-group'}>
                        <DrawerContent className={'bg-(--card-board) pt-6! pb-6! pl-5! pr-5! h-full'}>
                            <DrawerHeader>
                                <DrawerTitle className="text-[1.2rem] font-semibold flex justify-center">
                                    <Image src={'/logo.svg'} width={120} height={120} alt="" />
                                </DrawerTitle>

                                <DrawerDescription className="text-[1rem] text-white">
                                    QiaoQiao
                                </DrawerDescription>

                                <LoginForm />
                            </DrawerHeader>
                        </DrawerContent>
                    </Drawer>
                )
            }

            {
                !isMobile && (
                    <Dialog open={open} onOpenChange={setOpen} aria-labelledby={'dialog-login-group'}>
                        <DialogContent showCloseButton={false} className={'bg-(--card-board) pt-6! pb-6! pl-5! pr-5!'}>
                            <DialogHeader>
                                <DialogTitle className="text-[1.2rem] font-semibold flex justify-center items-center">
                                    <Image src={'/logo.svg'} width={120} height={120} alt="" />
                                </DialogTitle>

                                <DialogDescription className="text-[1rem] text-white text-center">
                                    QiaoQiao
                                </DialogDescription>

                                <LoginForm />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                )
            }

        </>
    );
}