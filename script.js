import axios from 'axios';

const url = "https://api-consumet-org-one.vercel.app/anime/gogoanime/info/spy-x-family";

async function getData() {
    try {
      const response = await axios.get(url, {});
      return response.data
    } catch (error) {
      return error.message
    }
}

const data = getData()

//const userCardTemplate = document.querySelector("[data-user-template]")
//const userCardContainer = document.querySelector("[data-user-cards-container]")
//var entry = document.getElementById("search");
//console.log(entry)
console.log(data.episodes[0])