import './style.css';

async function fetchDataFromAPIEndPoint() {
  const cards = await fetch('api/fetchNotion').then((res) =>
    res.json().then((data) => data.results)
  );
  document.querySelector('.card-container').innerHTML = cards
    .map(
      (card) => `
    <article class="card">
    <img
      src="${card.properties.Image.files[0].external.url}"
      alt="${card.properties.Name.title[0].plain_text}"
      class="card__image"
    />
    <h2 class="card__heading">${card.properties.Name.title[0].plain_text}</h2>
    <div class="card__price">
      <p>${card.properties.Price.rich_text[0].plain_text}</p>
      <a href="${card.properties.Link.url}" class="card__btn">${card.properties.Btb_text.rich_text[0].plain_text}</a>
    </div>
  </article>
  `
    )
    .join('');
}

fetchDataFromAPIEndPoint();
