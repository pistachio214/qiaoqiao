'use client'

import useAppStore from "@/stores/useAppStore";
import { ageOptions, sexOptions } from "@/lib/data";
import { Button } from "../ui/button";

export default function EnterChat() {
    const { mate, setConnect } = useAppStore();

    const goChat = () => {
        console.log('匹配信息: ', mate);
        setConnect({
            age: ageOptions[0],
            sex: sexOptions[1],
            location: '成都市',
            tag: ['快乐小狗', '反差er', '人间清醒']
        })
        location.href = "/chat";
    }

    return (
        <div className={'flex justify-center max-w-125 w-full'}>
            <Button
                className={'rounded-2xl h-11 w-[80%] text-black bg-white border border-white hover:bg-white hover:cursor-pointer'}
                onClick={() => goChat()}
            >
                进入聊天
            </Button>
        </div>
    );
}