import { Project } from './project';

export const PROJECTS: Project[] = [
    {
        id: 0,
        project:"matchsticks",
        img: ['assets/img/projets/matchsticks.jpg'],
        genre: "PeiP",
        name: "Jeu des allumettes",
        language: "Python",
        description: "Projet Python avec turtle. Le but était de faire un jeu des allumettes avec une IA.",
        link: "https://github.com/MaevaLecavelier/PeiP-Matchsticks"
    },
    {
        id: 0,
        project:"Arduino",
        img: [
            'assets/img/projets/arduino.jpg',
            'assets/img/projets/arduino.png',
            'assets/img/projets/distributeur.jpg',
        ],
        genre: "PeiP",
        name: "Distributeur de snack",
        language: "C++",
        description: "Projet Arduino de l'idée à la conception (modélisation 3D, électronique, programmation...). Réalisé en Bac+2 à Polytech'Nice.",
        link: "https://github.com/MaevaLecavelier/PeiP-ArduinoProject"
    },
    {
        id: 0,
        project:"battleship",
        img: ['assets/img/projets/battleship.jpg'],
        genre: "PeiP",
        name: "Bataille Navale",
        language: "PhP, JS, HTML, CSS",
        description: "Jeu de la bataille navale sur navigateur, réalisé en PeiP2 à Polytech'Nice.",
        link:"https://github.com/MaevaLecavelier/PeiP-WEB_Project"
    },
    {
        id: 1,
        project:"Pico",
        img: [
            'assets/img/projets/pico8.jpeg',
            'assets/img/projets/eatnslide.jpg',
        ],
        genre: "Personnel",
        name: "Eat'n'Slide",
        language: "Lua",
        description: "Jeu réalisé avec le logiciel Pico8 en Lua. Réalisé à 2 pour le concours CGI.",
        link: "https://github.com/MaevaLecavelier/Pico8_EatnSlide"
    },
    {
        id: 1,
        project:"website",
        img:['assets/img/projets/angular.jpg'],
        genre: "Personnel",
        name: "Portfolio",
        language: "Angular",
        description: "Ce site là :)",
        link: ""
    },
    {
        id: 1,
        project:"Rover",
        img: [
            'assets/img/projets/rover2.jpg',
            'assets/img/projets/presrover.jpeg',
            'assets/img/projets/rover.jpg',
        ],
        genre: "Personnel",
        name: "Rover Marsien",
        language: "Modélisation 3D, C++",
        description: "Projet initié par d'autres étudiants",
        link: "http://users.polytech.unice.fr/~pmasson/rover-team-2016.php"
    },
    {
        id: 2,
        project:"linux",
        img:['assets/img/projets/linux.jpg'],
        genre: "CAU - Echange universitaire",
        name: "Linux optimisation",
        language: "C",
        description: "Optimisation de modules kernel, en utilisant le multi-threading.",
        link: "https://github.com/MaevaLecavelier/CAU-Linux"
    },

    {
        id: 2,
        project:"ppl",
        img: ['assets/img/projets/ppl.jpg'],
        genre: "CAU - Echange universitaire",
        name: "Parser et analyzer",
        language: "Bison, Flex",
        description: "Mise en pratique du fonctionnement d'un parser et analyzer basique.",
        link: "https://github.com/MaevaLecavelier/CAU-ProgrammingLanguage"
    },
    {
        id: 2,
        project: "nlp",
        img: ['assets/img/projets/nlp.jpg'],
        genre: "CAU - Echange universitaire",
        name: "NLP et IR",
        language: "Python, Java",
        description: "Différents projets réalisés sur la récupération et l'analyse de data. Exemple: différence de champs lexicaux entre différents genres cinématographiques, traitement requête sur une base de données...",
        link: "https://github.com/MaevaLecavelier/CAU-NaturalLanguage"
    },
    {
        id: 2,
        project: "multicore",
        img: ['assets/img/projets/multicore.jpg'],
        genre: "CAU - Echange universitaire",
        name: "Programmation multicore",
        language: "Java, C",
        description: "Différents projets qui mettent en pratique le multi-threading.",
        link: "https://github.com/MaevaLecavelier/CAU-Multicore"
    },
    {
        id: 2,
        project: "network",
        img: ['assets/img/projets/network.jpg'],
        genre: "CAU - Echange universitaire",
        name: "Programmation socket (UDP, TCP)",
        language: "Python",
        description: "Projets pour comprendre le fonctionnement de la communication réseau au niveau d'une application.",
        link: "https://github.com/MaevaLecavelier/CAU-Network"
    },
];
