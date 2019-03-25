const jazz = document.getElementById('jazz');
const rock = document.getElementById('rock');
const folk = document.getElementById('folk');
const all = document.getElementById('all');

jazz.addEventListener('click', () => createList('jazz'));
rock.addEventListener('click', () => createList('rock'));
folk.addEventListener('click', () => createList('folk'));
all.addEventListener('click', () => createList(''));


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
            `<li class="genre__item"> 
            <span class="genre__item--day">${event.date.dayOfWeek}</span> 
            <span class="genre__item--location">${event.location}</span> 
             <span class="genre__item--date">${event.date.dayOfMonth}</span> 
              <span class="genre__item--month">${event.date.month} </span>
              <a href="#"class="genre__item--next"><img class="genre__item--arrow" src="./img/arrow.svg"></a>
              </li> 
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
