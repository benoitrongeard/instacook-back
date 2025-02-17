import User from '#models/user'
import { loginUserValidator, registerUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response, i18n }: HttpContext) {
    const payload = await request.validateUsing(registerUserValidator)

    try {
      const user = await User.create({
        email: payload.email,
        password: payload.password,
      })

      const token = await User.accessTokens.create(user)

      return response.created(token)
    } catch (error) {
      return response.status(error.statuts || 500).send({
        error: error.message,
        message: i18n.t('error.register'),
      })
    }
  }

  async login({ request, response, i18n }: HttpContext) {
    const payload = await request.validateUsing(loginUserValidator)

    try {
      const user = await User.verifyCredentials(payload.email, payload.password)

      if (!user) {
        return response.unauthorized({
          message: i18n.t('error.login.error'),
        })
      }

      const token = await User.accessTokens.create(user)

      return response.ok(token)
    } catch (error) {
      return response.status(error.statuts || 500).send({
        error: error.message,
        message: i18n.t('error.login.default'),
      })
    }
  }
}
