import { GOOGLE_API_KEY } from "./config";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&regionCode=US&key=${GOOGLE_API_KEY}`