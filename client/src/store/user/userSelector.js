

export const userIsAuth = state => state.user.isAuth

export const userProfile = state => {
    const { id, displayName, photoURL } = state.user
    return { id, displayName, photoURL}
}