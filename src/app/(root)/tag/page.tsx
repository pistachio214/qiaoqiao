
import PageTransition from '@/components/PageTransition';

export default function Tag() {
    return (
        <PageTransition className="text-white h-full md:w-4/5 w-full flex flex-col overflow-hidden p-4!">
            <div
                className="flex flex-row flex-wrap content-start gap-2 overflow-y-auto"
                style={{ height: 'calc(100% - 100px)' }}
            >
                {
                    Array.from({ length: 50 }, ((_, i: number) => {
                        return (
                            <div
                                key={i}
                                className={`self-start text-[.85rem] flex justify-center items-center cursor-pointer ${i === 2 ? 'bg-(--button-primary-color) text-black' : 'bg-[#333] text-(--font-color-focus1)'}`}
                                style={{
                                    padding: '5px 10px',
                                    lineHeight: '.7rem',
                                    borderRadius: '5px'
                                }}
                            >
                                tag - {i}
                            </div>
                        )
                    }))
                }
            </div>
            
            <div className="w-full flex items-center justify-center" style={{ height: '100px' }}>
                <div
                    className='w-full p-3! flex justify-center items-center rounded-2xl text-black text-md font-medium'
                    style={{ backgroundColor: 'var(--button-primary-color)' }}
                >
                    保存(1/8)
                </div>
            </div>
        </PageTransition>
    );
}