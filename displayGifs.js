export default (urls) => {
    console.log('hi');
   let elem = document.querySelector('#app');
    console.log(elem);
    elem.innerHTML = urls.map(url => `<img src=${url}>`).join("\n");
}