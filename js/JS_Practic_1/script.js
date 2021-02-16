"use strict";

const answer = [];

answer[0] = prompt('Сколько фильмов вы уже посмотрели?', '');

let numberOfFilms = answer;

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов', ''),
        b = prompt ('На сколько оцените его?', ''),
        c = prompt('Один из просмотренных фильмов', ''),
        d = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);