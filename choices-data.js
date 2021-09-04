const cassiopeia = {
    id: 'cassiopeia',
    title: 'Who is the Most beautiful?',
    img: 'cassiopeia_lg.jpg',
    description: 'You are out for your daily swim and come across the Nereids. You stop to flirt with the stunning sea nymphs. Just then Cassiopeia shows up and starts an argument with the Nereids about who is the most beautiful. Cassiopeia claims that she has no equal. They look to you to settle the argument.',

    choices: [{
        id: 'constellation-choice1',
        description: 'You agree with Cassiopeia, as she is just wow, I mean, WOW.',
        shyness: 10,
        danger: 0
    },
    {
        id: 'constellation-choice2',
        description: 'You tell Cassiopeia the Nereids just edge her out in the beauty department, but she has many other fine qualities.',
        shyness: 20,
        danger: 10
    },
    {
        id: 'constellation-choice3',
        description: 'Your self esteem is on-point and you calmly explain to everyone involved that you are obviously the most beautiful.',
        shyness: -10,
        danger: 20
    }]

};

const ursaMajor = {
    id: 'ursaMajor',
    title: 'Woodland Stroll',
    img: 'ursa_major_lg.jpg',
    description: 'You are out in the woods and come across a scary bear. Before you can decide to do anything dumb, the bear speaks. "I am Callisto, changed into a bear by the jealous Hera." The bear then asks for your help.',
    choices: [{
        id: 'constellation-choice1',
        description: 'You find Hera and demand that she change Callisto back or you are going to narc on her to Zeus. ',
        shyness: -20,
        danger: 20
    },
    {
        id: 'constellation-choice2',
        description: 'You ask Hera to turn you into a bear and go live out your days in the forest with Callisto-bear. ',
        shyness: 10,
        danger: -10
    },
    {
        id: 'constellation-choice3',
        description: 'You capture the bear and post tik-tok & youtube vids of the talking animal. The ad revenue makes you rich beyond compare.',
        shyness: -20,
        danger: 10,
    }]

};

const virgo = {
    id: 'virgo',
    title: 'Danger Fruit',
    img: 'virgo_lg.jpg',
    description: `It’s spring time and you are walking through the fields. All the plants are starting to wither and it’s over 100 degrees out. You come across a stump with an apple and a pomegranate sitting on top. The pomegranate has a note next to it that reads “Eat the pomegranate and all will be well”. The apple has a note next to it that reads “Eat the apple and cool the day. Also, the pomegranate is poison.”`,
    choices: [{
        id: 'constellation-choice1',
        description: 'You eat the apple cause you are allergic to poison.',
        shyness: 0,
        danger: 10,
    },
    {
        id: 'constellation-choice2',
        description: 'You eat the pomegranate because you don’t trust apples.',
        shyness: 0,
        danger: 20
    },
    {
        id: 'constellation-choice3',
        description: 'You keep walking because you don’t eat random fruits and like the hot weather.',
        shyness: 10,
        danger: -10,
    }]

};

const constellation = [
    cassiopeia,
    ursaMajor,
    virgo
];

export default constellation;

