import RedditApi from 'reddit-api.js';
import giffGiff from 'giffGiff.js';
import displayGifs from 'displayGifs.js';

RedditApi.load()
    .then(giffGiff)
    .then(displayGifs);
