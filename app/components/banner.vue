<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

const runSequenceAnimation = () => {
  const vw = window.innerWidth;
  const isMobile = window.innerWidth < 768;
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
      force3D: true,
    },
  });
  if (!isMobile) {
    // 圖片
    tl.to(".img01", { x: "-20vw", duration: 1.5 })
      .to(".img02", { x: "10vw", duration: 1.5 }, "<")
      .to(".img03", { x: "-10vw", duration: 1.5 }, "<");
  } else {
    tl.to(".img02", { x: "10vw", duration: 1.5 });
  }
  // 標題
  tl.to(".title_new", { x: 0.595 * vw, duration: 2 }, "<").to(
    ".title_zealand",
    { x: -0.595 * vw, duration: 2 },
    "<"
  );

  // 文字
  tl.to([".title_my", ".title_journey"], { opacity: 1, duration: 1 }, "-=0.8");

  // 圖片縮放（移除 filter）
  tl.to([".img02", ".img03"], { scale: 1, opacity: 0.9, duration: 0.9 }, "<");
  tl.to(
    ".hero",
    {
      style:
        "height:100%;  background: linear-gradient(to top, rgba(230, 217, 212, 0.4), transparent);",
    },
    "<"
  );
  // class 切換
  tl.add(() => {
    document
      .querySelectorAll(".title_new, .title_zealand, .title_my, .title_journey")
      .forEach((el) => el.classList.add("text-shadow"));

    document.querySelector(".hero")?.classList.add("hero-expand");
  }, "<");
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
        src="/images/banner_img/newImg01.webp"
        alt="Picture 1"
      />

      <img
        class="img02 absolute w-[150vw] h-full object-cover max-w-none"
        style="top: 56%; left: -35%; transform: translateY(-50%); scale: 120%"
        src="/images/banner_img/newImg02.webp"
        alt="Picture 2"
      />

      <img
        class="img03 absolute w-[150vw] h-full max-w-none lawn"
        src="/images/banner_img/newImg03.webp"
        alt="Picture 3"
      />
      <div class="hero"></div>
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

<style scoped>
/* GPU 提示 */
.img01,
.img02,
.img03,
.title_new,
.title_zealand {
  will-change: transform, opacity;
}

/* 文字陰影 */
.text-shadow {
  text-shadow: rgb(17 17 17) 8px 10px 10px;
}

/* hero 展開 */
.hero-expand {
  height: 100%;
}

.lawn {
  height: 100vh;
  right: -35%;
  transform: translateY(-50%);
  scale: 120%;
}
.hero {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10%;
  background: linear-gradient(to top, #e6d9d4, transparent);
}
@media screen and (min-width: 1025px) {
  .lawn {
    top: 58%;
  }
  .title-all {
    font-size: 80px;
    /* 初始設置透明度為 0 */
    opacity: 0;
  }
  .title-font {
    font-size: 170px;
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

@media screen and (min-width: 821px) and (max-width: 1024px) {
  .lawn {
    top: 50%;
  }
  .title-all {
    font-size: 60px;
    /* 初始設置透明度為 0 */
    opacity: 0;
  }
  .title-font {
    font-size: 140px;
    margin: -60px 0 -65px 0;
  }
}
</style>
