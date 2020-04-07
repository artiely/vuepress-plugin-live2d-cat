<style >
#vuepress-cat {
  position: relative;
  opacity: 0.9;
  z-index: 99999;
  pointer-events: none;
}
</style>

<template>
  <div
    class="cat-container"
    v-show="isLoaded"
  >
    <canvas
      id="vuepress-cat"
      :width="style.width"
      :height="style.height"
      class="live2d"
    ></canvas>
  </div>
</template>

<script>
import live2dJSString from "./live2d";
export default {
  name: "Cat",
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
      isLoaded: true,
      model: {
        blackCat:
          "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json",
        whiteCat:
          "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json"
      },
      style: {
        width: 280,
        height: 250
      },
    };
  },
  watch: {
    theme: {
      handler(val) {
        this.initCat(val);
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initCat(this.theme);
      }, 500);
    });
  },
  methods: {
    initCat (theme) {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
      if (isMobile) {
        this.isLoaded = false;
        return console.log("mobile do not load model");
      }

      if (!window.loadlive2d) {
        const script = document.createElement("script");
        script.innerHTML = live2dJSString;
        document.body.appendChild(script);
      }

      this.style = {
        width: (150 / 1424) * document.body.clientWidth,
        height: ((150 / 1424) * document.body.clientWidth) / 0.8
      };

      setTimeout(() => {
        window.loadlive2d(
          "vuepress-cat",
          theme === "light" ? this.model.blackCat : this.model.whiteCat
        );
      }, 300);
    }
  }
};
</script>
