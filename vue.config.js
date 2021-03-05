
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/ui/assets/styles/tokens/tokens.scss";
          @import "@/ui/assets/styles/abstracts/mixin.responsive.scss";
          @import "@/ui/assets/styles/abstracts/mixin.flexbox.scss";
          @import '@/ui/assets/styles/abstracts/mixin.color-dot.scss';
          @import '@/ui/assets/styles/base/typography.scss';
        `
      }
    }
  }
}
