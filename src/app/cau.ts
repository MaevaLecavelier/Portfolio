import { Project } from './project';

export const CAU: Project[] = [
    {
        id: 1,
        name: "Linux optimisation",
        language: "C",
        description: "Optimisation de modules kernel, en utilisant le multi-threading.",
        link: "https://github.com/MaevaLecavelier/CAU-Linux"
    },

    {
        id: 2,
        name: "Parser et analyzer",
        language: "Bison, Flex",
        description: "Mise en pratique du fonctionnement d'un parser et analyzer basique.",
        link: "https://github.com/MaevaLecavelier/CAU-ProgrammingLanguage"
    },
    {
        id: 3,
        name: "NLP et IR",
        language: "Python, Java",
        description: "Différents projets réalisés sur la récupération et l'analyse de data. Exemple: différence de champs lexicaux entre différents genres cinématographiques, traitement requête sur une base de données...",
        link: "https://github.com/MaevaLecavelier/CAU-NaturalLanguage"
    },
    {
        id: 4,
        name: "Programmation multicore",
        language: "Java, C",
        description: "Différents projets qui mettent en pratique le multi-threading.",
        link: "https://github.com/MaevaLecavelier/CAU-Multicore"
    },
    {
        id: 5,
        name: "Programmation socket (UDP, TCP)",
        language: "Python",
        description: "Projets pour comprendre le fonctionnement de la communication réseau au niveau d'une application.",
        link: "https://github.com/MaevaLecavelier/CAU-Network"
    },
];
