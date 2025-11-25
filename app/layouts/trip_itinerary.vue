<script setup>
import tripList1 from "../../mock/tripList1";
import tripList2 from "../../mock/tripList2";
</script>

<template>
  <div class="flex flex-col items-center">
    <p class="text-5xl text-white font-serif">Trip Itinerary</p>
    <div class="grid lg:grid-cols-[1fr_2fr_1fr]">
      <div class="flex flex-col justify-center items-center">
        <UButton
          trailing-icon="i-lucide-arrow-right"
          class="bg-[#794948] hover:bg-[#af8483] active:bg-[#c18382]"
          to="https://www.google.com.tw/maps/dir/%E5%9F%BA%E7%9D%A3%E5%9F%8E%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4+%E7%B4%90%E8%A5%BF%E8%98%AD+Christchurch,+Harewood,+Durey+Rd,+%E9%83%B5%E5%8D%80%E7%B7%A8%E8%99%9F:+8053/Oamaru,+%E7%B4%90%E8%A5%BF%E8%98%AD/%E6%91%A9%E6%8B%89%E5%A5%87%E5%9C%93%E7%9F%B3+9482%E7%B4%90%E8%A5%BF%E8%98%AD+Hampden,+Moeraki+Boulders+Rd/%E5%8D%A1%E6%8F%90%E5%A5%87%E7%87%88%E5%A1%94+9482%E7%B4%90%E8%A5%BF%E8%98%AD+Moeraki,+Lighthouse+Rd/Dunedin+Botanic+Garden+Lookout,+4+Lovelock+Avenue,+Dunedin+North,+Dunedin+9016%E7%B4%90%E8%A5%BF%E8%98%AD/Lovelock+Avenue,+Dunedin+North,+Dunedin+9016%E7%B4%90%E8%A5%BF%E8%98%AD/Queenstown+Mall,+Queenstown+9300%E7%B4%90%E8%A5%BF%E8%98%AD/Arrowtown+Bakery,+14+Buckingham+Street,+Arrowtown+9302%E7%B4%90%E8%A5%BF%E8%98%AD/Skydive+W%C4%81naka,+14+Mustang+Lane,+W%C4%81naka+9382%E7%B4%90%E8%A5%BF%E8%98%AD/Hawea+Motor+Camp+Road,+Albert+Town+9382%E7%B4%90%E8%A5%BF%E8%98%AD/Pukaki,+7999%E7%B4%90%E8%A5%BF%E8%98%AD/Mount+Cook+Airport,+Mount+Cook+Road,+Canterbury+Region+7999%E7%B4%90%E8%A5%BF%E8%98%AD/Twizel,+%E7%B4%90%E8%A5%BF%E8%98%AD/Lake+Tekapo,+7999%E7%B4%90%E8%A5%BF%E8%98%AD/Castle+Hill+%2F+Kura+Tawhiti+Conservation+Area,+West+Coast+Road,+Castle+Hill+7580%E7%B4%90%E8%A5%BF%E8%98%AD/%E6%A0%BC%E9%9B%B7%E8%8C%85%E6%96%AF+%E7%B4%90%E8%A5%BF%E8%98%AD/Castle+Hill+%2F+Kura+Tawhiti+Conservation+Area,+West+Coast+Road,+Castle+Hill+7580%E7%B4%90%E8%A5%BF%E8%98%AD/Hanmer+Springs,+%E7%B4%90%E8%A5%BF%E8%98%AD/Kaik%C5%8Dura+Peninsula+Walkway,+Canterbury+Region+7300%E7%B4%90%E8%A5%BF%E8%98%AD/Christchurch+City+Hotel,+699+Colombo+Street,+Christchurch+Central+City,+Christchurch+8011%E7%B4%90%E8%A5%BF%E8%98%AD/@-43.9954267,169.9888688,7.87z/data=!4m121!4m120!1m5!1m1!1s0x6d31f496835f93a3:0xf00ef876559b180!2m2!1d172.5374026!2d-43.48763!1m5!1m1!1s0xa82975f754500679:0x500ef868479efe0!2m2!1d170.9714456!2d-45.0965979!1m5!1m1!1s0xa82971a0e340bcc3:0xa8c650c6cbd5adc8!2m2!1d170.8267945!2d-45.3480025!1m5!1m1!1s0xa8296d8c7b5d02cf:0xde54ce3cfa46c8f1!2m2!1d170.8662093!2d-45.3918729!1m5!1m1!1s0xa82ead1a4bf92f41:0xe87f534106cc1f46!2m2!1d170.519166!2d-45.8611978!1m5!1m1!1s0xa82eac5decc2dce5:0x18784f0209694686!2m2!1d170.5219006!2d-45.8596611!1m5!1m1!1s0xa9d51d814cb92e39:0xac6cb8bf0998cdf7!2m2!1d168.6610831!2d-45.0321524!1m5!1m1!1s0xa9d5187e73a308f7:0xf4b9e2b5916303c9!2m2!1d168.8308169!2d-44.9384402!1m5!1m1!1s0xa9d54b832144f737:0xc0fe8f44db87dd93!2m2!1d169.2475545!2d-44.725259!1m5!1m1!1s0xa9d55180598c28d3:0xc769b31559e62c72!2m2!1d169.2459286!2d-44.6059294!1m5!1m1!1s0x6d2b1a1ea84bd6a5:0x500ef868479f1f0!2m2!1d170.1126254!2d-44.2548757!1m5!1m1!1s0x6d2bb30cfb6e9b53:0x491ca4402a6b47e4!2m2!1d170.1327253!2d-43.7664762!1m5!1m1!1s0x6d2ae07328bbedbf:0x500ef868479bb00!2m2!1d170.0876398!2d-44.2614837!1m5!1m1!1s0x6d2b991ac131ac99:0x500ef86847982c0!2m2!1d170.4762369!2d-44.0039685!1m5!1m1!1s0x6d2e68f2ffab4131:0xebf8ac378d1fd1e!2m2!1d171.7162282!2d-43.2295617!1m5!1m1!1s0x6d2f3fd94dd51053:0x500ef86847972a0!2m2!1d171.1985024!2d-42.4614253!1m5!1m1!1s0x6d2e68f2ffab4131:0xebf8ac378d1fd1e!2m2!1d171.7162282!2d-43.2295617!1m5!1m1!1s0x6d3063796f545947:0x500ef86847973f0!2m2!1d172.8289005!2d-42.5255877!1m5!1m1!1s0x6d3756eddf4f8b21:0xfb5bf3dd60e6a6e3!2m2!1d173.691563!2d-42.4256297!1m5!1m1!1s0x6d318a3d20c6ab11:0x696fbae131b1fd44!2m2!1d172.6364637!2d-43.5323841?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          >點我看完整Google Map行程</UButton
        >
        <img
          src="/images/newZealand.webp"
          loading="lazy"
          alt="newZealand"
          class="order-0 md:order-0"
        />
      </div>
      <div class="flex flex-col justify-evenly md:order-first">
        <div v-for="i in tripList1" class="py-2 flex justify-center">
          <UBlogPost
            :title="i.title"
            :description="i.dis"
            :image="i.src"
            :date="i.city"
            class="h-full w-[95%]"
          />
        </div>
      </div>
      <div class="flex flex-col justify-evenly order-0 md:order-0">
        <div v-for="j in tripList2" class="py-2 flex justify-center">
          <UBlogPost
            :title="j.title"
            :description="j.dis"
            :image="j.src"
            :date="j.city"
            class="h-full w-[95%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
