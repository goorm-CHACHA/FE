import { z } from 'zod';

//schema
const idSchema = z
  .string()
  .min(1, '아이디를 입력해주세요')
  .regex(/^[a-z|A-Z|0-9]+$/, '아이디에는 영문과 숫자만 사용할 수 있습니다.');

const passwordSchema = z
  .string()
  .min(1, '비밀번호를 입력해주세요')
  .min(6, '비밀번호는 6자 이상이어야 합니다.');

const passwordConfirmSchema = z.string();

export const loginSchema = z.object({
  id: idSchema,
  password: passwordSchema,
});

export const signUpSchema = z
  .object({
    id: idSchema,
    password: passwordSchema,
    passwordConfirm: passwordConfirmSchema,
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: 'custom',
        message: '비밀번호가 맞지 않습니다.',
        path: ['passwordConfirm'],
      });
    }
  });

//payload
export type loginPayload = z.infer<typeof loginSchema>;
export type signUpPayload = z.infer<typeof signUpSchema>;
