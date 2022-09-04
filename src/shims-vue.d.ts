// declare module '*.vue' {
//     import type {DefineComponent} from 'vue'
//     const component: DefineComponent<{}, {}, any>
//     export default component
// }
declare module "*.vue" {
  import { ComponentPublicInstance } from "vue";
  const Component: ComponentPublicInstance | {};
  export default Component;
}