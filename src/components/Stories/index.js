import React, {useEffect, useState} from 'react';
import {getStory} from "../../api/index";
import moment from "moment"


const StoriesIndex = ({storyId}) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [])
    return story && story.url ? (
        <div key={story.id} className="flex flex-col gap-1 mb-4">
            <a target="_blank" className="text-2xl text-orange font-nunito font-semibold" href={story.url}>{story.title}</a>
            <div className="flex flex-row gap-2 text-xs -mt-1">
                <span>By: {story.by}</span>
                <span>Posted: {moment(story.time * 1000).fromNow()}</span>
            </div>
        </div>
    ) : null
}

export default StoriesIndex;