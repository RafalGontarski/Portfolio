import React from "react";
import Work1 from '../../assets/img/polishdraughts.png';
import Work2 from '../../assets/img/snake.png';
import Work3 from '../../assets/img/roguelike.png';
import Work4 from '../../assets/img/hangman.png';
import Work5 from '../../assets/img/tictactoe2.png';
import Work6 from '../../assets/img/dungeoncrawl.png';
import Work7 from '../../assets/img/battleship.png';
import Work8 from '../../assets/img/myshop.png';
import Work9 from '../../assets/img/dentflow1.png';
import Work10 from '../../assets/img/securityJwt.png';

import Giff1 from '../../assets/giffs/dentflowbackend.gif';

import Movie1 from '../../assets/movies/dentflowbackend.mov';
import Movie2 from '../../assets/movies/battleship.mov';
import Movie3 from '../../assets/movies/dungeoncrawl.mov';
import Movie4 from '../../assets/movies/hangman.mov';
import Movie5 from '../../assets/movies/myshop.mov';
import Movie6 from '../../assets/movies/roguelike.mov';
import Movie7 from '../../assets/movies/polishdraughts.mov';
import Movie8 from '../../assets/movies/snake.mov';
import Movie9 from '../../assets/movies/tictactoe.mov';


export const projectsData = [
    {
        id: 1,
        image: Work9,
        movie: Movie1,
        title: 'DentFlow',
        category: 'web',
        url: 'https://github.com/RafalGontarski/DentFlow-frontend',
        description: 'Dental clinic management app - frontend.',
        technologies: 'Java, TypeScript',
        libraries: 'styled-component, mui, bootstrap, toastfy',
        frameworks: 'React, Spring Boot, Security, Hibernate, RESTApi',
        database: 'PostgreSQL',

    },
    {
        id: 2,
        image: Work10,
        giff: Giff1,
        movie: Work10,
        title: 'Spring Security + JWT',
        category: 'microservice',
        url: 'https://github.com/RafalGontarski/Spring-Security-JWT',
        description: 'Spring Boot 3 + Spring Security 6 - JWT Authentication and Authorisation',
        technologies: 'Java',
        frameworks: 'Spring Boot, Security, Hibernate, RESTApi, Swagger, Postman',
        database: 'PostgreSQL',
    },
    {
        id: 3,
        image: Work6,
        movie: Movie3,
        title: 'Dungeon Crawl',
        category: 'game',
        url: 'https://github.com/RafalGontarski/DungeonCrawl-game/tree/development',
        description: 'A dungeon crawl is a type of scenario in fantasy role-playing games in which heroes navigate a labyrinth environment (a "dungeon"), battling various monsters, avoiding traps, solving puzzles, and looting any treasure they may find. Video games and board games which predominantly feature dungeon crawl elements are considered to be a genre.',
        technologies: 'JavaFx',
        libraries: '-',
        frameworks: '-',
        database: '-',
    },
    {
        id: 4,
        image: Work3,
        movie: Movie6,
        title: 'Roguelike',
        category: 'game',
        url: 'https://github.com/RafalGontarski/Roguelike',
        description: 'Roguelike (or rogue-like) is a subgenre of role-playing computer games traditionally characterized by a dungeon crawl through procedurally generated levels, turn-based gameplay, grid-based movement, and permanent death of the player character. Most roguelikes are based on a high fantasy narrative, reflecting their influence from tabletop role playing games such as Dungeons & Dragons.',
        technologies: 'Python',
        libraries: '-',
        frameworks: '-',
        database: '-',
    },
    // {
    //     id: 5,
    //     image: Work5,
    //     title: 'AskMate',
    //     category: 'web',
    // },
    {
        id: 6,
        image: Work2,
        movie: Movie8,
        title: 'Snake',
        category: 'game',
        url: 'https://github.com/RafalGontarski/Snake',
        description: 'Snake is a sub-genre of action video games where the player maneuvers the end of a growing line, often themed as a snake. The player must keep the snake from colliding with both other obstacles and itself, which gets harder as the snake lengthens.',
        technologies: 'JavaScript, HTML, CSS',
        libraries: '-',
        frameworks: '-',
        database: '-',
    },
    {
        id: 7,
        image: Work7,
        movie: Movie2,
        title: 'Battleship',
        category: 'game',
        url: 'https://github.com/RafalGontarski/Battleship-game',
        description: 'Battleship (also known as Battleships or Sea Battle) is a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player\'s fleet of warships are marked.',
        technologies: 'Java',
        libraries: '-',
        frameworks: '-',
        database: '-',
    },
    {
        id: 8,
        image: Work8,
        movie: Movie5,
        title: 'My Shop',
        category: 'web',
        url: 'https://github.com/RafalGontarski/MyShop',
        description: 'CodeCool Shop web app - my team implementation.',
        technologies: 'Java, JavaScript, HTML, CSS',
        libraries: '-',
        frameworks: '-',
        database: 'JDBC',
    },
    {
        id: 9,
        image: Work4,
        movie: Movie4,
        title: 'Hangman',
        category: 'game',
        url: 'https://github.com/RafalGontarski/Hangman-game',
        description: 'Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.',
        technologies: 'Python',
        libraries: '-',
        frameworks: '-',
        database: '-',
    },
    {
        id: 10,
        image: Work5,
        movie: Movie9,
        title: 'Tic Tac Toe',
        category: 'game',
        url: 'https://github.com/RafalGontarski/TicTacToe-game',
        description: 'Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os (Canadian or Irish English) is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O.',
        technologies: 'Python',
        libraries: '-',
        frameworks: '-',
        database: '-',
    },
    {
        id: 11,
        image: Work1,
        movie: Movie7,
        title: 'Polish Draughts',
        category: 'game',
        url: 'https://github.com/RafalGontarski/Polish-Draughts-game',
        description: 'International draughts (also called international checkers or Polish draughts) is a strategy board game for two players, one of the variants of draughts.',
        technologies: 'Java',
        libraries: '-',
        frameworks: '-',
        database: '-',
    },
]

export const projectNav = [
    {
        id: 1,
        name: 'all',
    },
    {
        id: 2,
        name: 'web',
    },
    {
        id: 3,
        name: 'game',
    },
    {
        id: 4,
        name: 'microservice',
    },
    // {
    //     id: 5,
    //     name: 'backend',
    // },
]

export const translationMapping = {
    all: 'all',
    web: 'web',
    game: 'game',
    microservice: 'microservice',
    backend: "backend",
    fullStack: "fullStack",
    wszystkie: 'all',
    strony: 'web',
    gry: 'game',
    mikroserwis: 'microservice',
};
