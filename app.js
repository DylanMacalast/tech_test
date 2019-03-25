const jazz = document.getElementById('jazz');
const rock = document.getElementById('rock');
const folk = document.getElementById('folk');
const all = document.getElementById('all');

jazz.addEventListener('click', () => createList('jazz'));
rock.addEventListener('click', () => createList('rock'));
folk.addEventListener('click', () => createList('folk'));
all.addEventListener('click', () => createList(''));



activeLink = () => {

}

getData = async () => {
    const result =  await fetch("data/shows.JSON");
    const resultJson = await result.json();
    return resultJson;
}


clearData = () => {
    document.querySelector('.list').innerHTML = '';
  
}




// genre as a parameter.
createList = async (genreToFilterBy) => {
    clearData();
    const data = await getData();
    const filteredData = data.filter(event => event.genre === genreToFilterBy);
    console.log(filteredData);
    
    const dataToBeMapped = filteredData.length > 0 ? filteredData : data;

    const theEvents = dataToBeMapped.map(event => {
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


createList("");






// loop through all the data
    // grab the unique genres
        // loop over the unique genres
            // generating button that has an id / data param with it's genre type
