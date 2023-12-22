export const fetchApi = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
};

const productsContainer = document.querySelector("#ProductList__Wrap");

fetchApi("https://6585ac26022766bcb8c9202c.mockapi.io/products").then(
  (data) => {
    let htmls = [];
    const productsToShow = data.slice(0, 8);

    productsToShow.forEach((item, index) => {
      htmls.push(`
      <div class="ProductList__Item">
        <div class="ProductList__Item__Image">
          <img src="${item.thumbnail}" alt="${item.title}" />
        </div>
        <div class="ProductList__Item__Info">
          <div class="ProductList__Item__Info__Name">${item.title}</div>
          <div class="ProductList__Item__Info__Price">${item.price}$</div>
        </div>
      </div>
    `);

      if ((index + 1) % 4 === 0) {
        htmls.push("</div>");
      }
    });
    htmls.push("</div>");

    productsContainer.innerHTML = htmls.join("");
  }
);
