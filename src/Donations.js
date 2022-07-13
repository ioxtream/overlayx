const SampleDonations = [{
    username: "Kverk0 Kverk0 Kverk0 aaaa",
    message: "Thanks for sharing with us your knowledge!Thanks for sharing with us your knowledge!Thanks for sharing with us your knowledge! aaaaaaaaaaaaaaaaa",
    currency: "CHZ",
    amount: "4",
    animated_gif: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}]

export default function SampleDonate() {
    const randomIndex = Math.floor(Math.random() * SampleDonations.length);
    return SampleDonations[randomIndex];
}