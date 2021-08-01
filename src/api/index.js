import axios from "axios";
import { newStoriesId, storyURL } from "../helper/config"

const getStoriesId = async () => {
    return await axios.get(newStoriesId).then(({data}) => data);
}

const getStory = async (storyId) => {
    return await axios.get(`${storyURL + storyId}.json`)
        .then(({data}) => data)
        .catch(error => console.log(error));
}

export {getStoriesId, getStory}