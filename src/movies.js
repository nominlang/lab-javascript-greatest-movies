// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayOfDirectors = moviesArray.map((movie) => {
        return movie.director;
    });
        return arrayOfDirectors;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const ssMovies = moviesArray.filter(function(movie){

if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
 return movie;
    }
 } )

 return ssMovies.length;

}

    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const average = moviesArray.reduce(function(acc, movie){
        if (movie.score){
            return acc + movie.score;
        } else {
            return acc;
        }
}, 0)/ moviesArray.length

return + average.toFixed(2)

}


 /* let sum = 0;
for (let i = 0 ; i< moviesArray.length;i++) {
    if(moviesArray[i] .score){
sum += moviesArray[1] .score;
}}
let average = sum / moviesArray.length;

console.log(average);
return + average.toFixed(2);
}
else {return 0};
  */


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
    let score = 0;
    for(let i = 0; i < moviesArray.length; i++) {
         if(moviesArray[i].genre === 'drama') {
            score = moviesArray[i].score;
            break;
        }
    }
    return score;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    console.log(
        newArr
        .filter((moviesArray) => typeof moviesArray === "number")
        .sort((a, b)) => {
          if (a < b) {
            return -1;
          }
          if (a > b {
              return 1;
           }
           return 0;
        }); 
}
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
