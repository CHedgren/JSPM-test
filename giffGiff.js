export default (posts) => {
 return posts
        .map(post => post.data.url)
        .filter(url => /gifv?$/.exec(url))
        .map(url => url.replace(/v$/, ''));

}
