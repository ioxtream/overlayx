const SampleDonations = [{
    username: "Elon74",
    message: "Thanks for sharing with us your knowledge!",
    currency: "CHZ",
    amount: "4",
    animated_gif: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}, {
    username: "MrBeast",
    message: "I really love your videos! Never stop with this!",
    currency: "ADA",
    amount: "10",
    animated_gif: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}, {
    username: "BitcoinMAXI",
    message: "Let's talk about Bitcoin!",
    currency: "ETH",
    amount: "0.4",
    animated_gif: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}, {
    username: "freeGuY",
    message: "Hey, what's up?",
    currency: "BNB",
    amount: "0.1",
    animated_gif: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}]

export default function SampleDonate() {
    const randomIndex = Math.floor(Math.random() * SampleDonations.length);
    return SampleDonations[randomIndex];
}