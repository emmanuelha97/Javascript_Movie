import {debounce} from "./utils";

const fetchData = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com`, {
        params: {
            apikey: '43a191a9',
            s: searchTerm
        }
    });

    console.log(response.data)
}

const input = document.querySelector('input')

const onInput = debounce(event => {
        fetchData(event.target.value);
}, 750);
input.addEventListener('input', onInput)