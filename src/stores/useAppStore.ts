import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

import { Option } from '@/types/option';
import { ChatConnectOtherMate, MessageItem } from '@/types/message';
import { ageOptions, sexOptions } from '@/lib/data';

interface AppState {
    mate: {
        age: Option,
        sex: Option,
    }
    connect: {
        status: boolean,
        otherMate: ChatConnectOtherMate,
        messageList: MessageItem[]
    }

    // Actions
    updateMateAge: (age: Option) => void
    updateMateSex: (sex: Option) => void
    setConnect: (otherMate: ChatConnectOtherMate, status: boolean) => void
    clearConnect: () => void
    reset: () => void
}

// 在服务端安全的初始化函数
const getDefaultInitialState = () => ({
    mate: {
        age: ageOptions[0],
        sex: sexOptions[0],
    },
    connect: {
        status: true,
        otherMate: {
            age: { label: '', value: 0 },
            sex: { label: '', value: 0 },
            location: '',
            tag: []
        },
        messageList: []
    }
});

const useAppStore = create<AppState>()(
    devtools(
        persist(
            (set, get) => ({
                ...getDefaultInitialState(),
                updateMateAge: (age: Option) => set((state) => ({
                    mate: { ...state.mate, age }
                })),
                updateMateSex: (sex: Option) => set((state) => ({
                    mate: { ...state.mate, sex }
                })),
                setConnect: (otherMate: ChatConnectOtherMate, status: boolean) => set(() => ({
                    connect: {
                        status,
                        otherMate,
                        messageList: [
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: '你也hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 2, type: 1, text: 'hello', createdAt: new Date() },
                            { sender: 1, type: 1, text: 'hello', createdAt: new Date() },
                        ]
                    }
                })),
                clearConnect: () => set((state) => ({
                    connect: {
                        ...state.connect,
                        ...getDefaultInitialState().connect
                    }
                })),
                reset: () => set(getDefaultInitialState()),
            }),
            {
                name: 'QiaoQiaoStorage', // localStorage 的 key
                skipHydration: false, // 允许水合时同步数据
                storage: createJSONStorage(() => {
                    // 在服务端返回一个模拟的存储
                    if (typeof window === 'undefined') {
                        return {
                            getItem: () => null,
                            setItem: () => { },
                            removeItem: () => { },
                        }
                    }
                    return localStorage
                }),
                // 可选：只持久化部分状态
                partialize: (state) => ({
                    mate: state.mate,
                    connect: state.connect,
                }),
            }
        )
    )
)

// 在开发环境订阅状态变化
if (process.env.NODE_ENV === 'development') {
    useAppStore.subscribe((state, prevState) => {
        console.log('🔄 Zustand State Changed:')
        console.log('📜 Previous:', prevState)
        console.log('📖 Current:', state)
    })
}

export default useAppStore;