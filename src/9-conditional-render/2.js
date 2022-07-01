function GreetingA({ isLogin, name }){
    if(isLogin){
        return(
        <p className="greeting" onClick={showMenu}>
            {`${name}, hi!`}
        </p>
        );
    } else {
        return (
        <p className="noAuth" onClick={goToLoginPage}>
            권한이 없습니다.
        </p>)
    }
}
function GreetingB({ isLogin, name }){
    return (
        <p
            className={isLogin ? 'greeting' : 'noAuth'}
            onClick={isLogin ? showMenu : goToLoginPage}
        >
            {isLogin ? `${name}, Hi!` : `권한이 없습니다`}
        </p>)
}