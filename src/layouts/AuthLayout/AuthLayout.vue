<template>
  <div class="grid grid-cols-[20%_60%_20%] auth-mid:grid-cols-1 p-2 h-screen">
    <div class="auth-mid:hidden block"></div>
    <div class="px-8 py-2 auth-sm:px-2">
      <slot />
    </div>
    <div class="auth-mid:hidden block"></div>
  </div>
</template>
