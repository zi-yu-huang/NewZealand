<script setup>
import AiChatApi from "../../service/aichat.js";
import { defineEmits } from "vue";
const userInput = ref("");
const aiAnswer = ref("");
const input = ref("");

const emit = defineEmits(["close"]);

const putMessage = (state) => {
  const setId = Math.random() * 50000;
  if (state == "user") {
    const newMessage = {
      id: setId,
      role: "user",
      parts: [
        {
          type: "text",
          text: userInput.value,
        },
      ],
    };
    messages.value.push(newMessage);
  }
  if (state == "aichat") {
    const newMessage = {
      id: setId,
      role: "assistant",
      parts: [
        {
          type: "text",
          text: aiAnswer.value,
        },
      ],
    };
    messages.value.push(newMessage);
  }
};
const messages = ref([
  {
    id: "6045235a-a435-46b8-989d-2df38ca2eb47",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "您好，關於紐西蘭的問題都可以問我！初次問答需要等比較久ＱＱ",
      },
    ],
  },
]);

const closeModal = () => {
  emit("close");
};

const onSubmit = async (event) => {
  if (event.isComposing) return; //判斷中文字
  userInput.value = input.value;
  input.value = "";
  await putMessage("user");
  await GetAiChatApi();
};
// AI chat API
const GetAiChatApi = async () => {
  const res = await AiChatApi({ message: userInput.value });
  aiAnswer.value = res;
  await putMessage("aichat");
  return res;
};
</script>
<template>
  <div class="form-style bg-[#fffdf0] rounded-lg">
    <div
      class="grid grid-cols-[1fr_auto] items-center h-[65px] bg-[#8e8869] p-4 rounded-t-lg"
    >
      <p class="text-xl text-white font-bold">旅遊小幫手</p>
      <UButton
        class="text-white"
        icon="i-lucide-chevron-down"
        size="xl"
        color="neutral"
        variant="link"
        @click="closeModal"
      />
    </div>
    <div class="py-4 px-2 h-[500px] overflow-y-scroll">
      <UChatMessages
        :assistant="{
          side: 'left',
          variant: 'subtle',
          avatar: {
            icon: 'i-lucide-bot',
          },
        }"
        :messages="messages"
      />
    </div>
    <UChatPrompt
      variant="soft"
      v-model="input"
      class="bg-[#dfd9ba]"
      @keydown.enter="onSubmit"
      :ui="{ root: 'rounded-none rounded-b-lg' }"
    >
      <UChatPromptSubmit
        class="bg-[#8e8869] hover:bg-[#fffdf0] hover:text-[#8e8869] active:bg-[#fffdf0]"
      />
    </UChatPrompt>
  </div>
</template>
<style scoped>
.form-style {
  width: 100%;
  height: 100%;
}
</style>
