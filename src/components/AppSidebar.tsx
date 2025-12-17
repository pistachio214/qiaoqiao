import React from "react"

import Image from "next/image"
import { TagIcon, MapPinnedIcon, AnvilIcon, Volume2Icon, ShieldCheckIcon } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch"
import SidebarUserInfo from "./Root/SidebarUserInfo";


interface SidebarMenuItemProps {
    title: string,
    leftNode: React.ReactNode,
    rightNode?: React.ReactNode,
    onClick?: () => void
}

const SidebarMenuItem = (props: SidebarMenuItemProps) => {
    return (
        <div
            className="w-full flex flex-row items-center pt-3! pb-3! cursor-pointer select-none"
            onClick={() => {
                if (props.onClick !== undefined) {
                    props.onClick()
                }
            }}
        >
            <div className="w-5 h-5 rounded-sm overflow-hidden flex justify-center items-center mr-3!">
                {props.leftNode}
            </div>
            <div className="text-[.86rem] font-medium whitespace-nowrap flex-1" style={{ color: 'var(--font-color-focus)' }}>
                {props.title}
            </div>
            {props.rightNode}
        </div>
    );
}

const SidebarDivider = () => {
    return (
        <div
            className="w-full"
            style={{
                borderTop: '1px solid var(--divider-color)',
                margin: 'var(--divider-text-margin)',
                fontSize: 'var(--font-size-md)',
                color: 'var(--divider-text-color)'
            }}
        />
    )
}

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent className="bg-(--color-page) text-white pt-3! pb-3! pl-4! pr-4! box-border border-none!">
                <SidebarGroup className="flex flex-col mb-3!">
                    <SidebarUserInfo />
                </SidebarGroup>

                <SidebarGroup className="flex flex-col">
                    <SidebarMenuItem
                        title={'首页'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center bg-white">
                                <Image src={'/logo.svg'} loading={'eager'} width={18} height={18} alt="" />
                            </div>
                        }
                        onClick={() => location.href = '/'}
                    />

                    <SidebarMenuItem
                        title={'漂流瓶'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center" style={{ backgroundColor: 'rgb(0, 183, 255)' }}>
                                <Image src={'/img/bottle.svg'} width={14} height={14} alt="" />
                            </div>
                        }
                        onClick={() => location.href = '/bottle'}
                    />

                    <SidebarMenuItem
                        title={'广播'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center bg-white font-extrabold text-[11px]">
                                <span style={{ color: 'rgb(11, 148, 246)' }}>F</span>
                                <span style={{ color: 'rgb(11, 148, 246)' }}>M</span>
                            </div>
                        }
                    />

                    <SidebarMenuItem
                        title={'晚晚'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center font-extrabold text-[11px]">
                                <Image src={'/img/wanwan.png'} width={20} height={20} alt="" />
                            </div>
                        }
                        rightNode={
                            <div style={{ color: 'var(--font-color-place)', fontSize: '12px' }}>友情链接</div>
                        }
                    />
                </SidebarGroup>

                <SidebarDivider />

                <SidebarGroup className="flex flex-col">
                    <SidebarMenuItem
                        title={'我的标签'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center font-extrabold text-[11px]">
                                <TagIcon size={16} style={{ color: '#fff' }} />
                            </div>
                        }
                        rightNode={
                            <div style={{ color: 'var(--font-color-place)', fontSize: '12px' }}>已选择0个</div>
                        }
                        onClick={() => location.href = '/tag'}
                    />

                    <SidebarMenuItem
                        title={'隐藏位置'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center font-extrabold text-[11px]">
                                <MapPinnedIcon size={16} style={{ color: '#fff' }} />
                            </div>
                        }
                        rightNode={
                            <Switch
                                className="data-[state=unchecked]:bg-[#F0F0F0E6]! data-[state=checked]:bg-[#10b981]!"
                                defaultChecked
                            />
                        }
                    />

                    <SidebarMenuItem
                        title={'隐藏VIP标志'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center font-extrabold text-[11px]">
                                <AnvilIcon size={16} style={{ color: '#fff' }} />
                            </div>
                        }
                        rightNode={
                            <Switch
                                className="data-[state=unchecked]:bg-[#F0F0F0E6]! data-[state=checked]:bg-[#10b981]!"
                                defaultChecked
                            />
                        }
                    />

                    <SidebarMenuItem
                        title={'开启信息提示'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center font-extrabold text-[11px]">
                                <Volume2Icon size={16} style={{ color: '#fff' }} />
                            </div>
                        }
                        rightNode={
                            <Switch
                                className="data-[state=unchecked]:bg-[#F0F0F0E6]! data-[state=checked]:bg-[#10b981]!"
                                defaultChecked
                            />
                        }
                    />

                    <SidebarMenuItem
                        title={'开启清流模式'}
                        leftNode={
                            <div className="w-full h-full flex justify-center items-center font-extrabold text-[11px]">
                                <ShieldCheckIcon size={16} style={{ color: '#fff' }} />
                            </div>
                        }
                        rightNode={
                            <Switch
                                className="data-[state=unchecked]:bg-[#F0F0F0E6]! data-[state=checked]:bg-[#10b981]!"
                                defaultChecked
                            />
                        }
                    />
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

