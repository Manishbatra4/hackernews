import { useState, useEffect } from 'react';
import { STORY_INCREMENT, MAX_STORIES } from './config';
import { debounce } from './debounce';

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = debounce(() => {
        const body = document.body;
        const html = document.documentElement;
        const elHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        const scrollTop = Math.max(body.scrollTop, html.scrollTop);
        const winHeight = window.innerHeight;

        const fromBottom = elHeight - (scrollTop + winHeight);
        if (fromBottom > 200 || loading) {
            return false;
        }

        setLoading(true);
    }, 500);

    useEffect(() => {
        if (!loading) return;

        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES);
        } else {
            setCount(count + STORY_INCREMENT);
        }

        setLoading(false);
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { count, loading };
};