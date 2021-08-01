import axios from "axios";

const baseURL = "https://hacker-news.firebaseio.com/v0/"
const newStoriesId = `${baseURL}newstories.json`
const storyURL = `${baseURL}item/`

const getStoriesId = async () => {
    const result = await axios.get(newStoriesId).then(data => data);

    return result;
}

export  { baseURL, newStoriesId, storyURL, getStoriesId }