const TagItem = (props: { label: string }) => {
    return (
        <div
            className="flex justify-center items-center mr-2!"
            style={{
                border: '.5px solid hsla(0, 0%, 100%, .8)',
                color: 'hsla(0, 0%, 100%, .6)',
                padding: '.02rem 8px .02rem 8px',
                fontSize: '.6rem',
                borderRadius: '4px'
            }}
        >
            {props.label}
        </div>
    );
}


export default TagItem;