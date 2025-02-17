import User from '#models/user'
import { registerUserValidator } from '#validators/register_user'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    // try {
    //   //   const payload = await request.validateUsing(registerUserValidator)
    //   const payload = request.all()
    //   const user = await User.create({
    //     email: payload.email,
    //     password: await hash.make(payload.password),
    //   })
    //   const token = await User.accessTokens.create(user)
    //   return response.ok(token)
    // } catch (error) {
    //   console.log('error : ', error)
    //   return response.internalServerError(error.message)
    // }
  }
}
