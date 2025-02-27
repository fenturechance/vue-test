<template>
  <div class="flex flex-col h-screen">
    <div class="bg-blue-900">☰</div>
    <div class="flex flex-1 relative">
      <div
        class="md:w-[30%] bg-blue-500 absolute md:relative h-full w-full left-[-100%] md:left-0"
      >
        sidebar
      </div>
      <div class="md:w-[70%] bg-gray-300 w-full">
        <div class="flex p-5 h-100 flex-wrap">
          <div class="bg-red-100 h-full lg:w-1/3 md:w-1/2 w-full"></div>
          <div class="bg-purple-100 h-full lg:w-1/3 md:w-1/2 w-full"></div>
          <div class="bg-orange-100 h-full lg:w-1/3 md:w-full w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>
