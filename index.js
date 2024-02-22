import express from 'express';
import { getAnimeRecommendation } from './services/animeService.js';

const app = express();

const port = process.env.PORT || 3000;

app.get('/anime', async(req, res) => {
    res
      .status(200)
      .json(
        await getAnimeRecommendation(req.query.name)
        )
})

app.listen(port, () => {
    console.log(`runing in http://localhost:${port}`)
});