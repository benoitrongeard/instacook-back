import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const user = await db.from('users').select('id').where('email', value).first()
        return !user
      }),
    password: vine.string().minLength(6).confirmed({
      confirmationField: 'passwordConfirmation',
    }),
  })
)
