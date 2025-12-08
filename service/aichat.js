import axios from "axios";

export const AiChatApi = async (data) => {
  console.log(data)
  try {
    const response = await axios.post(
      "https://newzealand-backend.onrender.com/chat",
      data
    );
    return response.data.reply;
  } catch (error) {
    console.error("AI 請求失敗：", error);

    return 
      "目前系統發生錯誤，請稍後再試 🙏"
    
  }
};
export default AiChatApi;
