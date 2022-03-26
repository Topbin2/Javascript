const form = document.querySelector("#searchForm");
const input = document.querySelector("#input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let value = input.value;
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${value}`);
  
  
makeImages(res.data);
  

  input.value = "";
  input.focus();
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.setAttribute("class", "show");
      img.src = result.show.image["medium"];
      document.body.append(img);
    }
  }
};
