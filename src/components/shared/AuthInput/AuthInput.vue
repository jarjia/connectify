<script setup lang="ts">
import { ErrorMessage, useField } from "vee-validate";
import { DropDownIcon } from "@/components";

const props = defineProps({
  label: String,
  id: String,
  type: String,
  placeholder: String,
  isLogin: Boolean,
  name: {
    type: String,
    default: true,
  },
  showSideBar: Boolean,
  phone: String,
  handleDropDown: {
    type: Function,
    default: () => {},
  },
});

const { errors, value } = useField(() => props.name);
</script>

<template>
  <div class="flex flex-col my-1 w-full">
    <label :for="id">{{ label }}</label>
    <div :class="name === 'phone' ? 'flex w-full' : ''">
      <div
        v-if="name === 'phone'"
        @click="handleDropDown()"
        class="dropdown-container flex items-center justify-center gap-1 cursor-pointer border-2 select-none min-w-24 text-center py-1 mt-1 border-black outline-none rounded-r-none rounded-sm"
      >
        {{ phone }}
        <DropDownIcon
          class="transition-all"
          :class="showSideBar ? 'rotate-180' : 'rotate-0'"
        />
      </div>
      <input
        :type="type"
        :id="id"
        :name="name"
        v-model="value"
        :placeholder="placeholder"
        class="border-2 py-1 px-2 mt-1 w-full border-black outline-none rounded-sm"
        :class="{
          'border-red-500': errors[name as any],
          'border-black': !errors[name as any],
          'rounded-l-none border-l-0': name === 'phone',
        }"
        :autocomplete="!isLogin ? 'new-password' : 'current-password'"
      />
    </div>

    <ErrorMessage :name="name" class="text-red-500 font-sans text-sm" />
  </div>
</template>
