<script setup lang="ts">
defineProps({
  label: String,
  id: String,
  type: String,
  placeholder: String,
});
</script>

<template>
  <div class="flex flex-col my-2 w-full">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      class="border-2 py-1 px-2 mt-1 border-black outline-none rounded-sm"
    />
  </div>
</template>
