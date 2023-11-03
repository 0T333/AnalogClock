const numberHours = document.querySelector('.number-hours');

const numberElement = [];

//creat numberhours
for (let i = 1;i<=12; i++ ){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
    
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
