const socketMiddleware = socket => store => {
    if (socket)
        socket.on('action', store.dispatch)
    return next => action => {
        if(socket && action.type && action.type.startsWith('SERVER')) {
            socket.emit(action.type, action.data)
        }
        return next(action)
    }
}

export default socketMiddleware