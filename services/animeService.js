
export const getAnimeRecommendation = async(anime) => {

    const url = `https://api.jikan.moe/v4/anime?q=${ anime }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const animes = data.map( anime => ({
        id: anime.mal_id,
        title: anime.title,
        img: anime.images.jpg.image_url,
        score: anime.score,
        another_link: anime.genres[0].url,
        recommendation : addRecommendation(anime.score)
    }));
    
    return animes;
}

const addRecommendation = (score) =>  {
    if(score < 4) {
        return "I do not recommend it"
    } else if(score < 7) {
        return "You may have fun"
    } else
        return "Great, this is one of the best anime"
}
