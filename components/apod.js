import fetch from "isomorphic-unfetch";

const apiKey = "iY5KEyYHw0uWTWSXIiVJynr95pdpR1zl51OuzYUa";
const apiEndpoint = "https://api.nasa.gov/planetary/apod";

async function getApod() {
    try {
      const res = await fetch(`${apiEndpoint}?api_key=${apiKey}`)
      const data = await res.json()
      console.log(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }
getApod();

export default getApod;


    



