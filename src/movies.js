// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

const newMappedArray = moviesArray.map(function(item){
return item.director ;
})


return newMappedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
if (moviesArray.length===0){
return 0;
}
const dramaSteven = moviesArray.filter(function(item){return item.director === "Steven Spielberg" && item.genre.includes('Drama')})
console.log(dramaSteven)    
return dramaSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === 0) {
    return 0;
}
const newScoresArray = moviesArray.map(function(item){
    return item.score || 0;;
})
const average = newScoresArray.reduce((a, b) => a + b, 0) / newScoresArray.length;
const roundedAverage = +average.toFixed(2);
console.log(roundedAverage);
return roundedAverage;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
const dramaMovies = moviesArray.filter(function(item) {
return item.genre.includes('Drama');
});
    
if (dramaMovies.length === 0) {
return 0;
}
    
const averageDrama = dramaMovies.reduce((sum, movie) => sum + movie.score, 0) / dramaMovies.length;
const roundedDramaAverage = +averageDrama.toFixed(2);  
return roundedDramaAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (moviesArray){
const sortedMovies = [...moviesArray];
sortedMovies.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderAlphabetically = [...moviesArray];
    orderAlphabetically.sort((a, b) => {return a.title.localeCompare(b.title);
});
const titlesArray = orderAlphabetically.map(movie => movie.title);
return titlesArray.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
const updatedMoviesArray = moviesArray.map(movie => {
let hours = 0;
let minutes = 0;    
const durationParts = movie.duration.split(' ');
for (const part of durationParts) {
if (part.includes('h')) {
hours = parseInt(part, 10) * 60;
} else if (part.includes('min')) {
minutes = parseInt(part, 10);
}
}
const totalDuration = hours + minutes;
return { ...movie, duration: totalDuration };
});
return updatedMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
