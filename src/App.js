import React, {useEffect, useState} from "react";
import {getStoriesId} from "./api"
import StoriesIndex from "./components/Stories";
import { useInfiniteScroll } from "./helper/InfinityScroll";

const App = () => {
    const { count, loading } = useInfiniteScroll();
    const [storiesId, setStoriesId] = useState([]);

    useEffect(() => {
        getStoriesId().then(storiesIds => setStoriesId(storiesIds))
        console.log(count)
    }, [count]);

    return (
        <div className="App">
            <h1 className="text-center mb-4 font-lato font-semibold text-6xl text-red-500">Hacker News</h1>
            <div className="bg-newgray mx-12 p-5">
                {storiesId.slice(0,count).map(story =>
                    <StoriesIndex key={story} storyId={story}/>
                )}
                {loading ? <p>Loading... </p> : null}
            </div>
        </div>
    );
}

export default App;
