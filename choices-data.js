const cassiopeia = {
    id: 'cassiopeia',
    title: 'Who is the Most beautiful?',
    img: 'cassiopeia_lg.jpg',
    description: 'You encounter Cassiopeia, who is arguing with the Nereids, they are sea nymphs, about who is the most beautiful, Cassiopeia claims she has no equal. You intervene and:',

    choices: [{
        id: 'constellation-choice1',
        description: 'Agree with Cassiopeia as, just wow, I mean, wow.',
        shyness: 10,
        danger: 0
    },
    {
        id: 'constellation-choice2',
        description: 'Tell Cassiopeia the Nereids just edge her out in the beauty department, but she has many other fine qualities.',
        shyness: 20,
        danger: 10
    },
    {
        id: 'constellation-choice3',
        description: 'Your self esteem is on-point enough that you calmly explain to everyone involved that you are obviously the most beautiful in the land.',
        shyness: -10,
        danger: 20
    }]

};

const ursaMajor = {
    id: 'ursaMajor',
    title: 'Woodland Stroll',
    img: 'ursa_major_lg.jpg',
    description: 'You are out in the woods and come across a bear. Before you can decide to do anything dumb, the bear says that they are Callisto, changed into a bear by a jealous Hera. The bear asks for your help.',
    choices: [{
        id: 'constellation-choice1',
        description: 'You find Hera and demand that she change Callisto back or you are going to narc on her to Zeus. ',
        shyness: -20,
        danger: 20
    },
    {
        id: 'constellation-choice2',
        description: 'You ask Hera to turn you into a bear and live with Callisto-bear in the forest. ',
        shyness: 10,
        danger: -10
    },
    {
        id: 'constellation-choice3',
        description: 'You capture the bear and make tons of videos of the talking bear for tikt-ok and youtube. Your ad revenue makes you rich beyond compare ',
        shyness: -20,
        danger: 10,
    }]

};

const virgo = {
    id: 'virgo',
    title: 'Plant Eater',
    img: 'virgo_lg.jpg',
    description: 'It’s spring time and you are walking through the fields, but the plants are starting to wither and it’s over 100 degrees out. You come across a stump with an apple and a pomegranate sitting on top. The pomegranate has a note next to it that says “eat the pomegranate and all will be well”. The apple has a note next to it that reads “eat the apple to cool the day, the pomegranate is poison.”',
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

