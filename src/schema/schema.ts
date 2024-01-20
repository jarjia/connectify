import zod from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const georgianAndEnglishRegex = /^[\u10A0-\u10FFA-Za-z0-9\s.,;:]+$/u;

const isValidEnglishOrGeorgian = (value: string) =>
  georgianAndEnglishRegex.test(value);

export const registrationSchema = toTypedSchema(
  zod
    .object({
      name: zod
        .string()
        .min(1, { message: "მიუთითეთ სახელი" })
        .refine((value) => isValidEnglishOrGeorgian(value), {
          message: "მხოლოდ ქართული ან ინგლისური ასოები",
        }),
      phone: zod.string().min(1, { message: "მიუთითეთ ტელეფონი" }),
      password: zod
        .string()
        .min(8, { message: "მინიმუმ 8 ასო" })
        .max(32, { message: "მაქსიმუმ 32 ასო" }),
      c_password: zod.string().min(1, { message: "დაადასტურეთ პაროლი" }),
    })
    .refine((schema) => schema.c_password === schema.password, {
      message: "პაროლები არ ემთხვევა",
      path: ["c_password"],
    })
);

export const loginSchema = toTypedSchema(
  zod.object({
    phone_number: zod.string().min(1, { message: "მიუთითეთ ტელეფონი" }),
    password: zod.string().min(1, { message: "მიუთითეთ თქვენი პაროლი" }),
  })
);
