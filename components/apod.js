import { useState, useEffect} from "react"; // imports useState and useEffect from react

const ApodPage = () => { // creates a function called ApodPage
    const [apod, setApod] = useState(null);

    useEffect(() => { // useEffect is a hook that runs when the page is loaded}
        async function getApod() {
            const response = await fetch("/api/nasa.js");  // fetches the data from the api
            const data = await response.json(); // converts the data to json
            setApod(data); // sets the data to the apod variable
        }

        getApod();
    }, []);

    return (
        <div>
            {apod? (
                <>
                <h1>{apod.title}</h1>
                <Image src = {apod.url} alt = {apod.title} />
                <p>{apod.explanation}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

};

export default ApodPage;

    


    



