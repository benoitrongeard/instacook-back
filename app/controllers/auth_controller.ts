import { registerUserValidator } from '#validators/register_user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request }: HttpContext) {
    const payload = await request.validateUsing(registerUserValidator)
  }
}
