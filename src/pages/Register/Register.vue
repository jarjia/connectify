<script setup lang="ts">
import { AuthLayout } from "@/layouts";
import { RouterLink } from "vue-router";
import { GoogleIcon, FacebookIcon, AuthInput, Spinner } from "@/components";
import useRegister from "./useRegister";

const { dial_codes, onSubmit, phone, showSideBar, handleDropDown, isPending } =
  useRegister();
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
    <form @submit="onSubmit" class="py-4 pt-2">
      <AuthInput
        type="text"
        id="name"
        name="name"
        label="სახელი"
        placeholder="თქვენი სახელი, გვარი(ნებაყოფლობითია)"
      />
      <div class="flex flex-col mt-2 w-full">
        <div class="flex w-full">
          <AuthInput
            type="tel"
            id="tel"
            name="phone"
            label="ტელეფონი"
            placeholder="თქვენი ტელეფონის ნომერი"
            :handleDropDown="handleDropDown"
            :phone="phone"
          />
        </div>
      </div>
      <div v-if="showSideBar" class="dropdown-container">
        <div class="relative">
          <ul
            class="absolute max-h-52 overflow-y-scroll scrollbar bg-white shadow-2xl"
          >
            <li
              v-for="item in dial_codes"
              @click="
                () => {
                  showSideBar = !showSideBar;
                  phone = item.dial_code;
                }
              "
              class="cursor-pointer hover:bg-blue-400 hover:text-white px-2 py-[1px]"
            >
              {{ item.name }} {{ item.dial_code }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full gap-6">
        <AuthInput
          type="password"
          id="password"
          name="password"
          label="პაროლი"
          placeholder="შეიყვანეთ რთული პაროლი"
        />
        <AuthInput
          type="password"
          id="c_password"
          name="c_password"
          label="გაიმეორეთ პაროლი"
          placeholder="გაიმეორეთ პაროლი"
        />
      </div>
      <button
        type="submit"
        class="py-2 w-full text-center h-10 text-white bg-blue-400 rounded mt-3"
      >
        <Spinner v-if="isPending" />
        <span v-else>შემოგვიერთდით!</span>
      </button>
      <p class="text-sm text-center mt-0.5">
        უკვე გაქვთ ანგარიში?
        <RouterLink to="/login" class="text-blue-500">შესვლა</RouterLink>
      </p>
    </form>
  </AuthLayout>
</template>
