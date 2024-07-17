//get /api/vedio/index
import video from "@/database/video"

export default defineEventHandler(() => {
    return video;
})