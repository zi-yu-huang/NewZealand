<script setup>
import chatForm from "./chat-form.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const isDesktop = ref(true);

const OpenModel = () => {
  isVisible.value = !isVisible.value;
};

</script>

<template>
  <div v-if="isDesktop">
    <div class="ai-style" @click="OpenModel">
      <UButton
        class="text-white"
        icon="i-lucide-bot"
        size="xl"
        color="neutral"
        variant="link"
      />
    </div>
    <div class="form-container" :class="{ 'is-open': isVisible }">
      <chatForm @close="OpenModel" />
    </div>
  </div>
</template>
<style scoped>
.ai-style {
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 40px;
  height: 45px;
  width: 45px;
  background-color: #8e8869;
  border-radius: 100px;
  cursor: pointer;
}
.form-container {
  z-index: 99;
  width: 400px;
  height: 550px;
  position: fixed;
  bottom: 80px;
  right: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(120%);
  transition: transform 1s ease;
  pointer-events: none;
}

.form-container.is-open {
  transform: translateY(0);
  pointer-events: auto;
}
@media screen and ( max-width: 768px){
  .form-container{
    width: 90%;
  height: 85%;
    bottom: 80px;
  right: 10px;
  }
}
</style>
