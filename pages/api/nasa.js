import axios from 'axios'; // using the axios library for getting https from nasa API

export default async (req, res) => {

    const API_KEY = "iY5KEyYHw0uWTWSXIiVJynr95pdpR1zl51OuzYUa"
    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

    res.status(200).json(data);
}


