function Hello({user, color}) {

    return (
        <div style={{color: color}}>
            hello, {user}
        </div>
    )
}

Hello.defaultProps = {
    name: '기본값'
}

export default Hello;
