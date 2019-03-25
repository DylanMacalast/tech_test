getData = async () => {
    const result =  await fetch("data/shows.JSON");
    const resultJson = await result.json();
    return resultJson;
}

createList = async () => {
    const data = await getData();
    const theEvents = data.map(event => {
        return (
            `<li> ${event.date.dayOfWeek} ${event.location}  </li> 
            <li> ${event.date.dayOfMonth} ${event.date.month}</li> <br>
            `
        );

    });
    attachedToBody(theEvents);
};

attachedToBody = (data) => {
    const body = document.querySelector('.list');
    body.insertAdjacentHTML('beforeend', data);
};


createList();



getGenre = async () => {
    const data = await getData();
    const getGenre = data.map(e => {
        return e.genre;
    });

    console.log(getGenre);
};

getGenre();

