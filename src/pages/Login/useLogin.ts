import { useForm } from "vee-validate";
import { loginSchema } from "@/schema";
import { loginValues as initialValues } from "@/helpers";

const useLogin = () => {
  const { handleSubmit } = useForm({
    validationSchema: loginSchema,
    initialValues,
  });

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return {
    onSubmit,
  };
};

export default useLogin;
