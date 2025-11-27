import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { AgeOption } from '@/types/age';
import { ageOptions } from '@/lib/data';

interface AppState {
    age: AgeOption

    // Actions
    setAge: (age: AgeOption) => void
    reset: () => void
}

// 在服务端安全的初始化函数
const getDefaultInitialState = () => ({
    age: ageOptions[0]
})

const useAppStore = create<AppState>()(
    devtools(
        persist(
            (set, get) => ({
                ...getDefaultInitialState(),
                setAge: (age) => set({ age }),
                reset: () => set(getDefaultInitialState()),
            }),
            {
                name: 'app-storage', // localStorage 的 key
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
                    age: state.age,
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