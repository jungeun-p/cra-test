function Greeting({isLogin, name, cash}){
    return(
        <div>Thank you for visiting
            {isLogin && (
                <div>
                    <p>{name}, hi!</p>
                    <p>{cash}</p>
                </div>
            )}
        </div>
    )
}