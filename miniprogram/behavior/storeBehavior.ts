import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { appStore } from "../store/index";

export const storeBehavior = BehaviorWithStore({
  storeBindings: [
    {
      namespace: 'app',
      store: appStore,
      fields: ['token', 'currentUser'],
      actions: ['login', 'logout']
    }
  ]
});
