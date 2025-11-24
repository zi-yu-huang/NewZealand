<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

const runSequenceAnimation = () => {
  const tl = gsap.timeline();
  // 獲取視窗寬度
  const vw = window.innerWidth;

  // -------------------------
  // 移動 - 初始動畫
  // -------------------------
  tl.to([".img01"], {
    duration: 1.5,
    x: "-20vw",
    ease: "power2.inOut",
  });
  tl.to(
    [".img02"],
    {
      duration: 1.5,
      x: "10vw",
      ease: "power2.inOut",
    },
    "<"
  );
  tl.to(
    [".img03"],
    {
      duration: 1.5,
      x: "-10vw",
      ease: "power2.inOut",
    },
    "<"
  );

  // 假設原程式碼中 pic1 為 img01，如果 pic1 真的存在，請自行調整
  // tl.to( ".pic1", { ... } );

  tl.to(
    ".title_new",
    {
      duration: 2,
      x: 0.595 * vw,
      ease: "power2.inOut",
    },
    "<"
  );

  tl.to(
    ".title_zealand",
    {
      duration: 2,
      x: -0.595 * vw,
      ease: "power2.inOut",
    },
    "<"
  );

  // -------------------------
  // 縮放與透明度 - 第二組動畫
  // -------------------------
  tl.to([".img02", ".img03"], {
    filter: "grayscale(35%)",
    duration: 0.9,
    scale: 1,
    opacity: 0.9,
  });
  tl.to(
    [".title_my", ".title_journey"],
    {
      duration: 1,
      // 直接使用 opacity 屬性
      opacity: 1,
      ease: "power2.inOut",
    },
    "<"
  );
};

onMounted(() => {
  runSequenceAnimation();
});

</script>

<template>
  <div class="overflow-x-hidden">
    <div class="relative overflow-hidden w-screen h-[95vh]">
      <img
        class="img01 absolute w-[150vw] h-full max-w-none object-cover"
        style="top: -9%"
        src="/images/banner_img/newImg01.jpg"
        alt="Picture 1"
      />

      <img
        class="img02 absolute w-[150vw] h-full object-cover max-w-none"
        style="top: 56%; left: -35%; transform: translateY(-50%); scale: 120%"
        src="/images/banner_img/newImg02.png"
        alt="Picture 2"
      />

      <img
        class="img03 absolute w-[150vw] h-full max-w-none lawn"
        src="/images/banner_img/newImg03.png"
        alt="Picture 3"
      />

      <div
        class="relative flex justify-center flex-col items-center h-full font-serif text-white"
      >
        <p class="title-all title_my">My</p>
        <div class="flex title-font gap-[120vw]">
          <p class="title_new">New</p>
          <p class="title_zealand">Zealand</p>
        </div>
        <p class="title-all title_journey">Journey</p>
      </div>
    </div>
  </div>
</template>

<style>
.lawn {
  height: 100vh;
  right: -35%;
  transform: translateY(-50%);
  scale: 120%;
}
@media screen and (min-width: 820px) {
  .lawn {
    top: 58%;
  }
  .title-all {
    font-size: 100px;
    /* 初始設置透明度為 0 */
    opacity: 0;
  }
  .title-font {
    font-size: 190px;
    margin: -85px 0 -90px 0;
  }
}
@media screen and (max-width: 480px) {
  .lawn {
    top: 50%;
  }
  .title-font {
    font-size: 60px;
    margin: 0;
  }
  .title-all {
    font-size: 30px;
  }
}

@media screen and (min-width: 481px) and (max-width: 820px) {
  .lawn {
    top: 50%;
    /* display: none; */
  }
  .title-font {
    font-size: 80px;
    margin: -30px 0 -40px 0;
  }
  .title-all {
    font-size: 60px;
  }
}
</style>
