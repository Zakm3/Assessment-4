module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.','A dubious friend may be an enemy in camouflage', 'A faithful friend is a strong defense.','A feather in the hand is better than a bird in the air. (2)', 'A fresh start will put you on your way.'];
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    },  getMotivated: (req, res) => {
        motivation = ['you can do it', 'keep trying', 'javaScript is hard but you will get it eventually.', 'I know you can do it']
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * motivation.length);
        let randomMotivation = motivation[randomIndex];
      
        res.status(200).send(randomMotivation);
    }


}