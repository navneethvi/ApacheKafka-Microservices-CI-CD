import userController from '../../../../adapters/controllers/user/userController.js'
import userRepositoryImp from '../../../database/mongodb/repositories/user/userRepositoryImp.js'
import userRepositoryInt from '../../../../application/repositories/user/userRepsitoryInt.js'
import userServiceImp from '../../../service/user/userServiceImp.js'
import userServiceInt from '../../../../application/services/user/userServiceInt.js'

const userRouter = (express) => {
    const router = express.Router()
    const controller = userController(userRepositoryInt, userRepositoryImp, userServiceInt, userServiceImp)
    router.route('/register').post(controller.createUser)
    router.route('/login').post(controller.login)
    return router
}

export default userRouter