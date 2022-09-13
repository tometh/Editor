/**
 * @description svg tag
 * @author wangfupeng
 */

/**
 * 【注意】svg 字符串的长度 ，否则会导致代码体积过大
 * 尽量选择 https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=20293
 * 找不到再从 iconfont.com 搜索
 */

// 缩进 right
export const INDENT_RIGHT_SVG =
  '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>'

// 左对齐
export const JUSTIFY_LEFT_SVG =
  '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>'

// 图片
export const IMAGE_SVG = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9C6.5 8.44771 6.94771 8 7.5 8H24.5C25.0523 8 25.5 8.44771 25.5 9V23C25.5 23.5523 25.0523 24 24.5 24H7.5C6.94771 24 6.5 23.5523 6.5 23V9Z" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 13C11.6642 13 12 12.6642 12 12.25C12 11.8358 11.6642 11.5 11.25 11.5C10.8358 11.5 10.5 11.8358 10.5 12.25C10.5 12.6642 10.8358 13 11.25 13Z" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M11.5 16L14 18L17 14.5L25.5 21V23C25.5 23.5523 25.0523 24 24.5 24H7.5C6.94771 24 6.5 23.5523 6.5 23V21L11.5 16Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </svg>
`
// plus
export const MORE_SVG =
  '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>'

// 视频
export const VIDEO_SVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.5 7H8.5C7.67158 7 7 7.67158 7 8.5V23.5C7 24.3285 7.67158 25 8.5 25H23.5C24.3285 25 25 24.3285 25 23.5V8.5C25 7.67158 24.3285 7 23.5 7Z" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M14.25 18.0001V14.969L16.875 16.4845L19.5 18.0001L16.875 19.5156L14.25 21.0312V18.0001Z" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M7 11.5H25" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M20.5 7L17.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 7L11.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
