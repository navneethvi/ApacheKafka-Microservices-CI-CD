const userData = (username, email, password) => {
    return {
        getUsername : () => username,
        getEmail : () => email,
        getPassword : () => password
    }
}

export default userData