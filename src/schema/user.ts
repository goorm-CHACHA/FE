import { z } from 'zod';

//schema
const idSchema = z
  .string()
  .min(6, '아이디는 최소 6글자 이상이어야 합니다.')
  .max(20, '아이디는 최대 20글자까지 가능합니다.')
  .regex(/^[a-z|A-Z|0-9]+$/, '아이디에는 영문과 숫자만 사용할 수 있습니다.');

const passwordSchema = z
  .string()
  .min(6, '비밀번호는 최소 6글자 이상이어야 합니다.')
  .max(20, '비밀번호는 최대 20글자까지 가능합니다.');

// const passwordConfirmSchema = z.string();

const koreanNameSchema = z
  .string()
  .min(2, '이름은 최소 2글자 이상이어야 합니다.')
  .max(20, '이름은 최대 20글자까지 가능합니다.')
  .regex(/^[가-힣]+$/, '이름 형식이 올바르지 않습니다.');

const englishNameSchema = z
  .string()
  .min(2, '이름은 최소 2글자 이상이어야 합니다.')
  .max(30, '이름은 최대 30글자까지 가능합니다.')
  .regex(/^[a-zA-Z]+$/, '이름 형식이 올바르지 않습니다.');

const nameSchema = z.union([koreanNameSchema, englishNameSchema]);

const emailSchema = z
  .string()
  .email({ message: '이메일 형식이 올바르지 않습니다.' })
  .min(1, '이메일을 입력해주세요');

const phoneSchema = z
  .string()
  .regex(/^(\d{3}-\d{3,4}-\d{4})$/, '전화번호 형식이 유효하지 않습니다.');

export const loginSchema = z.object({
  id: idSchema,
  password: passwordSchema,
});

export const signUpSchema = z.object({
  name: nameSchema,
  id: idSchema,
  email: emailSchema,
  password: passwordSchema,
  phone: phoneSchema,
});
// .superRefine(({ password, passwordConfirm }, ctx) => {
//   if (password !== passwordConfirm) {
//     ctx.addIssue({
//       code: 'custom',
//       message: '비밀번호가 맞지 않습니다.',
//       path: ['passwordConfirm'],
//     });
//   }
// });

export const findIdSchema = z.object({
  name: nameSchema,
  email: emailSchema,
});

export const findPasswordSchema = z.object({
  id: idSchema,
  email: emailSchema,
});

export const updateProfileSchema = z.object({
  name: nameSchema, // 이름 유효성 검사 (한글/영어)
  email: emailSchema, // 이메일 유효성 검사
  phone: phoneSchema, // 전화번호 유효성 검사
});


//payload
export type loginPayload = z.infer<typeof loginSchema>;
export type signUpPayload = z.infer<typeof signUpSchema>;
export type findIdPayload = z.infer<typeof findIdSchema>;
export type findPasswordPayload = z.infer<typeof findPasswordSchema>;
