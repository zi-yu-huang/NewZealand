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
        text: "您好，關於紐西蘭的問題都可以問我！我太久沒被問，正在努力喚醒中😥，這次會等比較久喔！",
      },
    ],
  },
]);

const closeModal = () => {
  emit("close");
};

const onSubmit = async (event) => {
  event.preventDefault(); 
  if (input.value) {
    if (event.isComposing) return; //判斷中文字
    userInput.value = input.value;
    input.value = "";
    await putMessage("user");
    await GetAiChatApi();
  }
};

const chatRef = ref();
// 自動滾動
watch(
  () => messages.value.length,
  async () => {
    await nextTick();
    if (chatRef.value) {
      chatRef.value.scrollTop = chatRef.value.scrollHeight;
    }
  }
);
// AI chat API
const GetAiChatApi = async () => {
  const res = await AiChatApi({ message: userInput.value });
  aiAnswer.value = res;
  await putMessage("aichat");
  return res;
};
</script>
<template>
  <div
    class="form-style bg-[#fffdf0] rounded-lg grid grid-rows-[auto_1fr_auto]"
  >
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
    <div ref="chatRef" class="py-4 px-2 overflow-y-scroll">
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
      placeholder="問問關於紐西蘭🥰"
      v-model="input"
      class="bg-[#dfd9ba]"
      @keydown.enter="onSubmit"
      :ui="{ root: 'rounded-none rounded-b-lg' }"
    >
      <UChatPromptSubmit
        @click="onSubmit"
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
