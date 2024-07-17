//get /api/channel
import chnnel from "@/database/chnnel";

//通过 defineEventHandler 定义接口
export default defineEventHandler(() => {
    return chnnel
})