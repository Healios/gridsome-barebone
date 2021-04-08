import VueRouter from "vue-router";
import { MetaInfo, } from "vue-meta";

export interface IClientContext {
    appOptions : object;
    router : VueRouter;
    head : MetaInfo;
}