
const readAllMovies = async ()  => {
    const response = await fetch(`${process.env.API_BASE_URL}/films`)
    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const value = await response.json()
    return value;
}

const readOneMovie = async (id) =>{
    const response = await fetch(`${process.env.API_BASE_URL}films/${id}`);

    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const movie = await response.json();
    return movie;
}

const addOneMovie = async (movie) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify({
            "title": movie.title,
            "duration": Number(movie.duration),
            "budget": Number(movie.budget),
            "link": movie.link
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

    const response = await fetch(${process.env.API_BASE_URL}/films', options);
    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const movies = await response.json();
    console.log(`My new movies ${movies}`);
} 



const removeOneMovie = async (id) =>{
    const response = await fetch(`${process.env.API_BASE_URL}/films/${id}`, {method: 'DELETE'});

    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const movie = await response.json();
    return movie
}

const updateOneMovie = async (id, movie) =>{
    const cMovie = await readOneMovie(id);
    if(cMovie.title !== movie.title && 
        cMovie.link !== movie.link &&
        cMovie.duration !== movie.duration &&
        cMovie.budget !== movie.duration){

            const options = {
                method: 'PUT',
                body: JSON.stringify({
                    "title": movie.title,
                    "duration": Number(movie.duration),
                    "budget": Number(movie.budget),
                    "link": movie.link
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              }; 
            const response = await fetch(`${process.env.API_BASE_URL}/films/${id}`, options);
            if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

            return response.json();
            
        }

        const options = {
            method: 'PATCH',
            body: JSON.stringify({
                "title": movie.title,
                "duration": Number(movie.duration),
                "budget": Number(movie.budget),
                "link": movie.link
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          };
        const response = await fetch(`${process.env.API_BASE_URL}/films/${id}`, options);

        if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);    
        return response.json();

    
    
}


export { readAllMovies, addOneMovie, removeOneMovie,updateOneMovie };