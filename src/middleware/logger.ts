// middleware/logger.ts
import { StateCreator } from 'zustand'

// 日志中间件
const logger = <T>(config: StateCreator<T>): StateCreator<T> =>
    (set, get, api) =>
        config(
            (args) => {
                console.group('State Update')
                console.log('Previous State:', get())
                console.log('Action Arguments:', args)
                set(args)
                console.log('Next State:', get())
                console.groupEnd()
            },
            get,
            api
        )

export default logger