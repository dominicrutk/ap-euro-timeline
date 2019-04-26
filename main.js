let sidebarEventOpen = false;
let sidebarEvents = [];
let filter = 'all';

function passesFilter(event) {
    if (filter === 'all') {
        return true;

    } else if (filter === 'political-diplomatic') {
        return event.category.includes('political-diplomatic');
    } else if (filter === 'centralization') {
        return event.category.includes('centralization');
    } else if (filter === 'sovereignty') {
        return event.category.includes('sovereignty');

    } else if (filter === 'economic-social') {
        return event.category.includes('economic-social');
    } else if (filter === 'economic-systems') {
        return event.category.includes('economic-systems');
    } else if (filter === 'gender') {
        return event.category.includes('gender');

    } else if (filter === 'cultural-intellectual') {
        return event.category.includes('cultural-intellectual');
    } else if (filter === 'church-decline') {
        return event.category.includes('church-decline');
    } else if (filter === 'innovation') {
        return event.category.includes('innovation');

    } else {
        const startYear = 100 * Number(filter.substring(0, 2)) - 100;
        const endYear = 100 * Number(filter.substring(0, 2));
        return event.startYear <= endYear && event.endYear > startYear && event.startYear <= event.endYear;
    }
}

// Map initialization
const map = L.map('map', {
    center: [52.516278, 13.377683],
    zoom: 4
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZG9taW5pY3J1dGtvd3NraSIsImEiOiJjanV2dzd0a2QwNjU5NGVvMHBub3VnZzVlIn0.6EpbiGYYfhtZkC4xMwV9Xw'
}).addTo(map);

const refreshMap = function () {
    for (let eventName in events) {
        let event = events[eventName];
        event.marker.removeFrom(map);
        if (passesFilter(event)) {
            event.marker.addTo(map);
        }
    }
};

const goToEvent = function (eventTitle) {
    for (let eventName in events) {
        let event = events[eventName];
        if (event.title === eventTitle) {
            document.getElementById('event-name').innerHTML = event.title;
            document.getElementById('event-description').innerHTML = event.parsedDescription;
            document.getElementById('back-button').addEventListener('click', () => {
                goBack(true);
            });
            map.flyTo([event.latitude, event.longitude], 8);
            sidebarEventOpen = true;
            break;
        }
    }
};

// Go back event handler
const goBack = function (flyToEurope) {
    sidebarEventOpen = false;
    document.getElementById('event-name').innerHTML = 'Event Selection';
    let eventsList = `
        <p>Show these events: <select id="filter">
        <option value="all" ${filter === 'all' ? 'selected' : ''}>All</option>
        
        <option value="political-diplomatic" ${filter === 'political-diplomatic' ? 'selected' : ''}>Political/Diplomatic</option>
        <option value="centralization" ${filter === 'centralization' ? 'selected' : ''}>P/D: Centralization of Power</option>
        <option value="sovereignty" ${filter === 'sovereignty' ? 'selected' : ''}>P/D: Popular Sovereignty</option>
        
        <option value="economic-social" ${filter === 'economic-social' ? 'selected' : ''}>Economic/Social</option>
        <option value="economic-systems" ${filter === 'economic-systems' ? 'selected' : ''}>E/S: Economic Systems</option>
        <option value="gender" ${filter === 'gender' ? 'selected' : ''}>E/S: Gender Inequality</option>
        
        <option value="cultural-intellectual" ${filter === 'cultural-intellectual' ? 'selected' : ''}>Cultural/Intellectual</option>
        <option value="church-decline" ${filter === 'church-decline' ? 'selected' : ''}>C/I: Decline of the Church</option>
        <option value="innovation" ${filter === 'innovation' ? 'selected' : ''}>C/I: Innovation</option>
        
        <option value="15th" ${filter === '15th' ? 'selected' : ''}>15th Century</option>
        <option value="16th" ${filter === '16th' ? 'selected' : ''}>16th Century</option>
        <option value="17th" ${filter === '17th' ? 'selected' : ''}>17th Century</option>
        <option value="18th" ${filter === '18th' ? 'selected' : ''}>18th Century</option>
        <option value="19th" ${filter === '19th' ? 'selected' : ''}>19th Century</option>
        <option value="20th" ${filter === '20th' ? 'selected' : ''}>20th Century</option>
        <option value="21st" ${filter === '21st' ? 'selected' : ''}>21st Century</option>
    </select></p>
    <p>Timeline themes can be found <a href="https://docs.google.com/document/d/1XmG3uO-n-qxAQYAGZHESUo6aX1_EKoxSLX5ZDOhmS7I/edit?usp=sharing" target="_blank">here</a>.</p>`;
    let tempEventsList = [];
    for (let event of sidebarEvents) {
        if (passesFilter(event)) {
            tempEventsList.push(event);
        }
    }
    tempEventsList.sort((a, b) => {
        if (a.startYear !== b.startYear) {
            return a.startYear - b.startYear;
        } else if (a.endYear !== b.endYear) {
            return a.endYear - b.endYear;
        } else {
            if (a.name < b.name) return -1;
            if (a.name === b.name) return 0;
            if (a.name > b.name) return 1;
        }
    });
    for (let event of tempEventsList) {
        eventsList += `<button class="event-list-item">${event.title}</button>`;
    }
    document.getElementById('event-description').innerHTML = eventsList;
    document.querySelectorAll('#event-description > button.event-list-item').forEach(element => {
        element.addEventListener('click', () => {
            goToEvent(element.innerHTML);
        });
    });
    const filterSelect = document.getElementById('filter');
    filterSelect.addEventListener('change', () => {
        filter = filterSelect.options[filterSelect.selectedIndex].value;
        refreshMap();
        goBack(false);
    });
    if (flyToEurope) {
        map.flyTo([52.516278, 13.377683], 4);
    }
};

// Event initialization
for (let eventName in events) {
    let event = events[eventName];

    // Parse event title (name + date)
    event.title = `${event.name} (${event.startYear}` + (event.startYear !== event.endYear ? `-${event.endYear}` : '') + ')';

    // Parse event description (paragraphs + images + captions)
    event.parsedDescription = '<p id="back-button">&lt;&lt; Back</p>';
    for (let element of event.description) {
        if (element.type === 'p') {
            event.parsedDescription += `<p>${element.text}</p>`;
        } else if (element.type === 'img') {
            event.parsedDescription += `<figure><img src="${element.image}" alt="The image failed to load."><figcaption>${element.caption}</figcaption></figure>`;
        }
    }

    // Display marker on map
    event.marker = L.marker([event.latitude, event.longitude]);

    // Display event info when marker is clicked
    event.marker.on('click', () => {
        goToEvent(event.title);
    });

    // Display popup when marker is hovered over
    event.marker.bindPopup(event.title, {
        closeButton: false
    });
    event.marker.on('mouseover', () => {
       event.marker.openPopup();
    });
    event.marker.on('mouseout', () => {
        event.marker.closePopup();
    });

    sidebarEvents.push(event);
}

refreshMap();
goBack(true);
