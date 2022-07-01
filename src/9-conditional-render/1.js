function GreetingA({ isLogin, name }){
    if(isLogin){
        return <p>{`${name}, hi!`}</p>
    } else {
        return <p>권한이 없습니다.</p>
    }
}
function GreetingB({ isLogin, name }){
    return <p>{isLogin ? `${name}, Hi!` : `권한이 없습니다`}</p>
}