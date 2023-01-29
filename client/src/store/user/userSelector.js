
export const userIsAuth = state => state.user.isAuth

export const userProfile = state => {
    const { id, displayName, photoUrl } = state.user
    return { id, displayName, photoUrl}
}

export const getUser = state => state.user


