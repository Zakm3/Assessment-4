const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortune')
const motivationBtn = document.getElementById('three')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
        const data = res.data;
        alert(data);
    })
}
const getMotivated = () => {
    axios.get('http://localhost:4000/api/motivation')
    .then(res=> {
        const data = res.data
        alert(data)
    })
}






motivationBtn.addEventListener('click', getMotivated)
fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)