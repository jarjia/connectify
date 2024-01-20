import { dial_codes } from "@/helpers";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useForm } from "vee-validate";
import { registrationSchema } from "@/schema";
import { registerValues as initialValues } from "@/helpers";
import { useMutation } from "@tanstack/vue-query";
import { postCreateUser } from "@/services";

const useRegister = () => {
  const phone = ref("+995");
  const showSideBar = ref(false);

  const { mutate: createUserMutation, isPending } = useMutation({
    mutationFn: postCreateUser,
    onSuccess() {
      sessionStorage.setItem("auth-status", "code-sent");
    },
  });

  const { handleSubmit } = useForm({
    validationSchema: registrationSchema,
    initialValues,
  });

  const onSubmit = handleSubmit((values) => {
    values.phone = phone.value + values.phone;

    createUserMutation(values);
  });

  const handleDropDown = () => {
    showSideBar.value = !showSideBar.value;
  };

  const close = (e: MouseEvent) => {
    const targetElement = e.target as Element;

    if (!targetElement.closest(".dropdown-container")) {
      showSideBar.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener("click", close);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", close);
  });

  return {
    close,
    showSideBar,
    dial_codes,
    onSubmit,
    handleDropDown,
    status,
    phone,
    isPending,
  };
};

export default useRegister;
