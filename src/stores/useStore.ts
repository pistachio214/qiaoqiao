import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { Option } from '@/types/option';
import { ageOptions, sexOptions } from '@/lib/data';

interface AppState {
    mate: {
        age: Option,
        sex: Option,
    }

    // Actions
    updateMateAge: (age: Option) => void
    updateMateSex: (sex: Option) => void
    reset: () => void
}

// 在服务端安全的初始化函数
const getDefaultInitialState = () => ({
    mate: {
        age: ageOptions[0],
        sex: sexOptions[0],
    }
})

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
                    mate: state.mate,
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