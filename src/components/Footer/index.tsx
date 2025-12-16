
export default function Footer() {
    return (
        <footer className={'w-full pt-0! pr-3! pb-9! pl-3! flex flex-col justify-center items-center gap-3'}>
            <ProviderText txt={'某ICP备XXXXXXXXXX号-1'} />
            <ProviderText txt={'绿色聊天，遵循秩序，本站24H进行违规举报和内容审核'} />
        </footer>
    );
}

const ProviderText = (props: { txt: string }) => {
    return (
        <span
            className={'text-[0.5rem]'}
            style={{
                color: 'hsla(0, 0%, 86.3%, 0.3)'
            }}
        >
            {props.txt}
        </span>
    );
}