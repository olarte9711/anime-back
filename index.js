import express from 'express';
import { getAnimeRecommendation } from './services/animeService.js';

const app = express();

app.get('/anime', async(req, res) => {
    res
      .status(200)
      .json(
        await getAnimeRecommendation(req.query.name)
        )
})

app.listen(3000, () => {
    console.log("listening in 3000 port")
});