const cassiopeia = {
    id: 'cassiopeia',
    title: 'Was there ever any doubt?',
    img: 'cassiopeia_lg.jpg',
    description: 'You are out for your daily swim and come across the Nereids.\nYou stop to flirt with the stunning sea nymphs. Just then Cassiopeia\nshows up and starts an argument with the Nereids about who\nis the most beautiful. Cassiopeia claims that she has no equal.\nThey look to you to settle the argument.',
    audio: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Waves.ogg',
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
        description: 'Your self esteem is on-point and you calmly explain to everyone that you are obviously the most beautiful.',
        shyness: -10,
        danger: 20
    }]

};

const ursaMajor = {
    id: 'ursaMajor',
    title: 'Your fears laid bear',
    img: 'ursa_major_lg.jpg',
    description: 'You are out in the woods and come across a giant scary bear.\nBefore you can decide to do anything dumb, the bear speaks.\n"I am Callisto, changed into a bear by the jealous Hera."\nThe bear then pleads with you to help with this awkward situation.',
    audio: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Walking_through_woods.ogg',
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
    title: 'Fruit of the Doom',
    img: 'virgo_lg.jpg',
    description: `It’s spring time and you are walking through the fields. All the plants\nare starting to wither and it’s over 110˚. You come across a stump\nwith an apple and a pear sitting on top. Under the pear is a note:\n“Eat the pear and all will be well."\nThe apple also has a note:\n“Eat the apple and save the day. Also, the pear is poison.”`,
    audio: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Nature_sounds_ambience_in_a_Dordogne_pond.ogg',
    choices: [{
        id: 'constellation-choice1',
        description: 'You eat the apple cause you are allergic to poison.',
        shyness: 0,
        danger: 10,
    },
    {
        id: 'constellation-choice2',
        description: 'You eat the pear because you don’t trust apples.',
        shyness: 0,
        danger: 20
    },
    {
        id: 'constellation-choice3',
        description: 'You keep walking because you don’t eat random fruits and you like hot weather.',
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

