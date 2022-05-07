function Wrapper({children}) {

    /* component, props.children 
    {children}
    전달 받아야 Hello를 렌더링할 수 있다.
    */
    const style = {
        border: '2px solid black',
        padding: '16px'
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;