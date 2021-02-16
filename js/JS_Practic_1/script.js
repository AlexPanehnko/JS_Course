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