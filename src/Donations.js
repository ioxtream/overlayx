const SampleDonations = [{
    username: "Dichlorodifluoromethanes",
    message: "This overlayx contains the maximum characters in nickname and message --------------------------------------------------------------------------",
    currency: "CHZ",
    amount: "4",
    animated_gif: "https://i.pinimg.com/originals/d6/6b/9c/d66b9cd46e19093e06e3edabdf21e1da.gif",
}]

export default function SampleDonate() {
    const randomIndex = Math.floor(Math.random() * SampleDonations.length);
    return SampleDonations[randomIndex];
}