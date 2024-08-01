import { object, ref, string } from "yup";

const validations = object({
  email: string().email("Geçerli bir email giriniz").required("Zorunlu alan"),
  password: string()
    .min(6, "Parolanız en az 6 karakter olmalıdır")
    .required("Zorunlu alan"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Parolalar uyuşmuyor")
    .required("Zorunlu alan"),
});

export default validations;
