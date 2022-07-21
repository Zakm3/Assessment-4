const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune')
const motivationBtn = document.getElementById('three')
const display = document.querySelector('.display')
const userInput = document.querySelector('input')
const submitBtn = document.querySelector('.submitBtn')

const deleteItem = id => {
    axios.delete(`http://localhost:4000/api/motivation/${id}`)
    .then(res => {
        createDisplay(res.data)
    })
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
           alert(data)
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
        const data = res.data;
       alert(data)
    // console.log(data)
    })
}

const createDisplay = (list) => {
    let newList = list.map((x, i) => `<div><p id='${i}'>${x}</p><span onClick="deleteItem(${i})">DELETE</span></div>`)
    // console.log(newList)
    display.innerHTML = ''
    display.innerHTML = newList.join('')
}

const getMotivated = () => {
    axios.get('http://localhost:4000/api/motivation')
    .then(res=> {
        const data = res.data
       createDisplay(data)
    })
}
const submitMotivated = () => {
    const userValue = userInput.value
    // console.log(userValue)
    axios.post(`http://localhost:4000/api/motivation`, {userValue})
    .then(res => {
        createDisplay(res.data)
    })
}




submitBtn.addEventListener('click', submitMotivated)
motivationBtn.addEventListener('click', getMotivated)
fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)