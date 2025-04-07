const recordList = document.querySelector('#recordings-list');
const seenBirds = new Set(); 

const displayMsg = document.querySelector(".msg");
const displayError = function (msg) {
    displayMsg.insertAdjacentText("beforeend", msg);
};

const displayRecordings = function(data) {
    let displayedCount = 0; 

    data.recordings.forEach(bird => {
        
        if (displayedCount >= 50) return; 

        const birdId = `${bird.gen} ${bird.sp}`;
        
        if (!seenBirds.has(birdId)) {
            seenBirds.add(birdId);
            displayedCount++; 

            const html = `
                <li class="birds">
                    <h2 class="birds-common-name">${bird.en}</h2> 
                    <h2 class="birds-scientific-name">${bird.gen} ${bird.sp}</h2>
                    <audio controls preload="auto">
                        <source src="${bird.file}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </li>`;

            recordList.insertAdjacentHTML('beforeend', html);
        }
    });
};


const getBirdRecordings = async function () {
    try {
        const res = await fetch(`https://xeno-canto.org/api/2/recordings?query=grp:birds`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        
        const data = await res.json();
        console.log(data);
        displayRecordings(data);
    } catch (error) {
        displayError('Error fetching bird recordings: '+ error.message);
    }
};
    getBirdRecordings();



