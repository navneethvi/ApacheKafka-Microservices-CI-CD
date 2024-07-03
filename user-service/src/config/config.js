export default {
    port : 3001,
    mongo: {
        uri : 'mongodb://user-mongo-svc:27017/clean-user'
    },
    jwtsecretkey : process.env.JWT_SECRET_KEY || 'jwtsecretkey'
}
