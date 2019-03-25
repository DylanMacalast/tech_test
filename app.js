const document = document.querySelector('body');

getData = () => {
    fetch(./data.json);
}


createGenres = () => {
    const data = getData();

    const theEvents = data.map(events => {
        <li>
            ${events.name}
            ${events.name}
        </li>        
    });
}