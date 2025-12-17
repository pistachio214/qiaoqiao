import { SendIcon, SquareEqualIcon } from "lucide-react";

import AuraEffect from "@/components/Bottle/AuraEffect";

import PageTransition from '@/components/PageTransition';

export default function Bottle() {
    return (
        <PageTransition className="text-white h-full md:w-4/5 w-full flex flex-col overflow-hidden p-4!">
            <div className="h-full w-full flex flex-col items-center">
                <AuraEffect />

                <div className="h-1/5 flex items-center gap-8 text-sm">
                    <div
                        className="h-13.5 pl-6! pr-6! text-[.92rem] flex flex-row gap-2 justify-center items-center select-none cursor-pointer"
                        style={{
                            color: 'var(--button-default-text-color)',
                            backgroundColor: 'var(--button-default-color)',
                            borderRadius: 'var(--button-border-radius)',
                        }}
                    >
                        <SendIcon size={18} />
                        <span className="">扔个瓶子</span>
                    </div>

                    <div
                        className="h-13.5 pl-6! pr-6! text-[.92rem] flex flex-row gap-2 justify-center items-center select-none cursor-pointer"
                        style={{
                            color: 'var(--button-default-text-color)',
                            backgroundColor: 'var(--button-default-color)',
                            borderRadius: 'var(--button-border-radius)',
                        }}
                    >
                        <SquareEqualIcon size={18} />
                        <span className="">我的瓶子</span>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}