<script setup lang="ts">
import { AuthLayout } from "@/layouts";
import { GoogleIcon, FacebookIcon, AuthInput } from "@/components";
import { RouterLink } from "vue-router";
import useLogin from "./useLogin";

const { onSubmit } = useLogin();
</script>

<template>
  <AuthLayout>
    <div class="border-b-normal border-b-black pb-2">
      <h2 class="text-3xl text-center">შესვლა</h2>
      <p class="text-center mt-1 auth-mid:mt-2">
        გთხოვთ შეიყვანოთ თქვენი დეტალები.
      </p>
    </div>
    <div
      class="grid grid-cols-2 auth-mid:px-0 auth-mid:py-2 auth-very-sm:grid-cols-1 gap-4 p-4 border-b-normal border-b-black"
    >
      <button
        class="flex items-center justify-center gap-2 border-2 transition-colors border-black hover:bg-red-500 hover:bg-opacity-5 py-3 rounded"
      >
        <FacebookIcon /> შესვლა Facebook-ით
      </button>
      <button
        class="flex items-center justify-center gap-2 border-2 transition-colors border-black hover:bg-red-500 hover:bg-opacity-5 py-3 rounded"
      >
        <GoogleIcon /> შესვლა Google-ით
      </button>
    </div>
    <form @submit="onSubmit" class="py-4 pt-2">
      <AuthInput
        type="text"
        name="phone_number"
        id="phone_number"
        label="ტელეფონი"
        placeholder="თქვენი სრული ტელეფონის ნომერი (მაგ: +995 *** ** ** **)"
      />
      <AuthInput
        type="password"
        name="password"
        id="password"
        label="პაროლი"
        :isLogin="true"
        placeholder="შეიყვანეთ თქვენი პაროლი"
      />
      <button
        type="submit"
        class="py-2 w-full text-center text-white bg-blue-400 rounded mt-3"
      >
        შესვლა
      </button>
      <p class="text-sm text-center mt-0.5">
        არ გაქვთ ანგარიში?
        <RouterLink to="/register" class="text-blue-500"
          >რეგისტრაცია</RouterLink
        >
      </p>
    </form>
  </AuthLayout>
</template>
