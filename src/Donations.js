const SampleDonations = [{
    giver_username: "Elon74",
    giver_message: "Thanks for sharing with us your knowledge!",
    currency: "CHZ",
    amount: "4",
    animatedGIF: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}, {
    giver_username: "MrBeast",
    giver_message: "I really love your videos! Never stop with this!",
    currency: "ADA",
    amount: "10",
    animatedGIF: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}, {
    giver_username: "BitcoinMAXI",
    giver_message: "Let's talk about Bitcoin!",
    currency: "ETH",
    amount: "0.4",
    animatedGIF: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}, {
    giver_username: "freeGuY",
    giver_message: "Hey, what's up?",
    currency: "BNB",
    amount: "0.1",
    animatedGIF: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}]

export default function SampleDonate() {
    const randomIndex = Math.floor(Math.random() * SampleDonations.length);
    return SampleDonations[randomIndex];
}