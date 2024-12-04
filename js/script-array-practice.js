//STEP 1
// let favmovies = ['Inception', 'Jurrasic Park', 'Kiki\'s Delivery Service', 'Lord of the Rings', 'Matrix'];
// console.log(favmovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'Inception';
// movies[1] = '5th Element';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'Jurassic Park';
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies.splice(2, 0, 'The Dark Knight');
// console.log(movies.length);

//STEP 4
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// delete movies[0];
// movies.shift();
// console.log(movies);

//STEP 5
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'The Dark Knight';
// movies[6] = 'The Fifth Element';
// for (movie in movies) {
//     console.log(movies[movie]);
// }

//STEP 6
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'The Dark Knight';
// movies[6] = 'The Fifth Element';
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'The Fifth Element';
// movies[5] = 'The Dark Knight';
// movies[6] = 'Matrix';

// movies.sort();

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 8
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'The Dark Knight';
// movies[6] = 'The Fifth Element';

// let leastFavMovies = ['The Fifth Element', 'Inception', 'The Dark Knight'];

// console.log('Movies I like:');
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }

// console.log('');
// console.log('Movies I regret watching:');   
// console.log('');
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

//STEP 9
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'The Dark Knight';
// movies[6] = 'The Fifth Element';

// let leastFavMovies = ['The Fifth Element', 'Inception', 'The Dark Knight'];

// console.log('Movies I like:');
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }

// console.log('');
// console.log('Movies I regret watching:');   
// console.log('');
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse()

// console.log('');
// console.log('Movies sorted and reversed');   
// console.log('');
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 10
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'The Dark Knight';
// movies[6] = 'The Fifth Element';

// let leastFavMovies = ['The Fifth Element', 'Inception', 'The Dark Knight'];

// console.log('Movies I like:');
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }

// console.log('');
// console.log('Movies I regret watching:');   
// console.log('');
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse()

// console.log('');
// console.log('Movies sorted and reversed');   
// console.log('');
// for (let movie of movies) {
//     console.log(movie)
// }

// let lastItem = movies.pop();
// console.log('');
// console.log('Last item of array: ' + lastItem);

//STEP 11
// let movies = []
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'The Dark Knight';
// movies[6] = 'The Fifth Element';

// let leastFavMovies = ['The Fifth Element', 'Inception', 'The Dark Knight'];

// console.log('Movies I like:');
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }

// console.log('');
// console.log('Movies I regret watching:');   
// console.log('');
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

// movies = movies.concat(leastFavMovies).filter((item, index, array) => array.indexOf(item) === index);
// movies.sort().reverse()

// console.log('');
// console.log('Movies sorted and reversed');   
// console.log('');
// for (let movie of movies) {
//     console.log(movie)
// }

// let firstItem = movies.shift();
// console.log('');
// console.log('First item of array: ' + firstItem);s

//STEP 12
// let movies = [];
// movies[0] = 'Inception';
// movies[1] = 'Jurassic Park';
// movies[2] = 'Kiki\'s Delivery Service';
// movies[3] = 'Lord of the Rings';
// movies[4] = 'Matrix';
// movies[5] = 'The Dark Knight';
// movies[6] = 'The Fifth Element';

// let leastFavMovies = ['The Fifth Element', 'Inception', 'The Dark Knight'];

// console.log('Movies I like:');
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }

// console.log('');
// console.log('Movies I regret watching:');   
// console.log('');
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

// movies = movies.concat(leastFavMovies).filter((item, index, array) => array.indexOf(item) === index);
// movies.sort().reverse();

// console.log('');
// console.log('Movies sorted and reversed:');   
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }

// let lastItem = movies.pop();
// console.log('');
// console.log('Last item of array: ' + lastItem);

// let firstItem = movies.shift();
// console.log('');
// console.log('First item of array: ' + firstItem);

// console.log('');

// let indexLeastFavMovies = [];
// for (let i = 0; i < movies.length; i++) {
//     if (leastFavMovies.indexOf(movies[i]) !== -1) {  // Use .indexOf to find the position in leastFavMovies
//         indexLeastFavMovies.push(i);
//         console.log('Least favorite movie found at index: ' + i + ' - ' + movies[i]);
//     }
// }

// console.log('');
// console.log('Index of least favorite movies: ' + indexLeastFavMovies);

// let replaceLeastFavMovie = ['Spirited Away', '12 Monkeys', 'Stargate'];
// for (let i = 0; i < indexLeastFavMovies.length; i++) {
//     movies[indexLeastFavMovies[i]] = replaceLeastFavMovie[i];
// }

// console.log('');
// console.log('Movies with least favorite movies replaced:');
// console.log('');
// for (let movie of movies) {
//     console.log(movie);
// }


//STEP 13
// let movies = [
//     ['Inception', 1],
//     ['Jurassic Park', 2],
//     ['Kiki\s Delivery Service', 3],
//     ['Lord of the Rings', 4],
//     ['Matrix', 5]
// ];

// let movieNames = movies.map(movie => movie.filter(item => typeof item === 'string'));

// movieNames = movieNames.flat();

// console.log('Filtered Movie Names:');
// console.log(movieNames);


//STEP 14
// let employees = ['Zak', 'Yolanda', 'Jane', 'Susie', 'Bob'];
// function showEmployee(employees) {
//     console.log('Employees:');
//     console.log('');
//     for (let employee of employees) {
//         console.log(employee.toUpperCase());
//     }
// }

//STEP 15
// function filterValues(array, value) {
//     return array.filter(item => item !== value && item !== null && item !== false && item !== 0 && item !== '');
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0], null));

//STEP 16
// let arr = [1,40,39,21,4,0,89,11,5,10]
// let random = arr[Math.floor(Math.random() * arr.length)];
// console.log(random);

//STEP 17
// let arr = [1,40,39,21,4,0,89,11,5,10]
// let largest = Math.max(...arr);
// console.log(largest);