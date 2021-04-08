import { VueConstructor, } from "vue";
import { IClientContext, } from "./IClientContext";

export type ClientApiConstructor = (Vue : VueConstructor, context : IClientContext) => void;
