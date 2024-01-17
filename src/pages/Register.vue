<script setup lang="ts">
import { AuthLayout } from "@/layouts";
import { GoogleIcon, FacebookIcon, AuthInput } from "@/components";
import { RouterLink } from "vue-router";
</script>

<template>
  <AuthLayout>
    <div class="border-b-normal border-b-black pb-2">
      <h2 class="text-3xl text-center">რეგისტრაცია</h2>
      <p class="text-center mt-1 auth-mid:mt-2">დაუკავშირდი პროფესიონალებს.</p>
      <p class="text-center mt-1">თქვენი პრობლემების გამოსავალი იცდის!</p>
    </div>
    <div
      class="grid grid-cols-2 auth-very-sm:grid-cols-1 gap-4 p-4 auth-sm:py-2 auth-sm:px-0 border-b-normal border-b-black"
    >
      <button
        class="auth-mid:text-sm flex items-center justify-center gap-2 border-2 transition-colors border-black hover:bg-red-500 hover:bg-opacity-5 py-3 px-1 rounded"
      >
        <FacebookIcon /> Facebook რეგისტრაცია
      </button>
      <button
        class="auth-mid:text-sm flex items-center justify-center gap-2 border-2 transition-colors border-black hover:bg-red-500 hover:bg-opacity-5 py-3 px-1 rounded"
      >
        <GoogleIcon /> Google რეგისტრაცია
      </button>
    </div>
    <form class="py-4 pt-2">
      <AuthInput
        type="text"
        id="name"
        label="სახელი"
        placeholder="თქვენი სახელი, გვარი(ნებაყოფლობითია)"
      />
      <AuthInput
        type="tel"
        id="tel"
        label="ტელეფონი"
        placeholder="მიუთითეთ თქვენი ტელეფონი"
      />
      <div class="flex w-full gap-6 auth-mid:flex-col auth-mid:gap-0">
        <AuthInput
          type="password"
          id="password"
          label="პაროლი"
          placeholder="შეიყვანეთ რთული პაროლი"
        />
        <AuthInput
          type="password"
          id="c_password"
          label="გაიმეორეთ პაროლი"
          placeholder="გაიმეორეთ პაროლი"
        />
      </div>
      <button
        class="py-2 w-full text-center text-white bg-blue-400 rounded mt-3"
      >
        რეგისტრაცია
      </button>
      <p class="text-sm text-center mt-0.5">
        უკვე გაქვთ ანგარიში?
        <RouterLink to="/login" class="text-blue-500">შესვლა</RouterLink>
      </p>
    </form>
  </AuthLayout>
</template>
