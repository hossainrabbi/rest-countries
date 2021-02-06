const countryContent = document.getElementById('country-content');
fetch('https://restcountries.eu/rest/v2/all')
  .then((res) => res.json())
  .then((data) => {
    data.map((country) => {
      const listItem = document.createElement('div');
      listItem.className = 'col-md-4';
      listItem.innerHTML = `
            <div class="country-list">
              <h3>${country.name}</h3>
              <p>${country.capital}</p>
              <button 
                onclick="countryDetails('${country.name}')" 
                class="btn btn-primary">Details
              </button>
            </div>
            `;
      countryContent.appendChild(listItem);
    });
  });

function countryDetails(name) {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.json())
    .then((data) => {
      const detailsArea = document.getElementById('details-area');
      const countryDetails = document.createElement('div');
      countryDetails.className = 'country-details';
      countryDetails.innerHTML = `
            <div class="container text-center country-content text-white">
                <h2 class="mb-0">${data[0].name}</h2>
                <h5 class="mb-0">Region: ${data[0].region}</h5>
                <p class="mb-0">Capital: ${data[0].capital}</p>
                <p class="mb-0">Population: ${data[0].population}</p>
                <p class="mb-0">Area: ${data[0].area}</p>
                <div>
                    <img
                    class="w-25"
                    src="${data[0].flag}"
                    alt="${data[0].name}-flag"
                    />
                </div>
                <button onclick="closeBtn()" class="btn btn-danger mt-3">Close</button>
            </div>
            `;
      detailsArea.appendChild(countryDetails);
      detailsArea.className = 'd-block';
    });
}

function closeBtn() {
  document.getElementById('details-area').className = 'd-none';
  document.querySelector('.country-details').style.display = 'none';
}
