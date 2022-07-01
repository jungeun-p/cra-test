function Parent({ user }){
    return(
        <div>
            {user && <Child user={user}/>}
        </div>
    )
}
function Child({ user }){
    const [v, setV] = (0);
    // if(user){
    //     return null;
    // }
    return(
        <div>
            <p>{user.name}</p>
        </div>
    )
}