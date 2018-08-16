const socketMiddleware = socket => store => {
    if (socket)
        socket.on('action', store.dispatch)
    return next => action => {
        if(socket && action.type && action.type.startsWith('SERVER')) {
            const serverAction = action.type.split('/')[1]
            socket.emit(serverAction, action.data)
        }
        return next(action)
    }
}

export default socketMiddleware