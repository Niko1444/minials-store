export const fetchApi = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
};

const products = document.querySelector("#ProductList__Wrap");

fetchApi("http://localhost:3000/products").then((data) => {
  let htmls = data.map((item) => {
    console.log(item);
    return `
      <div class="ProductList__Item">
        <div class="ProductList__Item__Image">
          <img src="${item.thumbnail}" alt="${item.title}" />
        </div>
        <div class="ProductList__Item__Info">
          <div class="ProductList__Item__Info__Name">${item.title}</div>
          <div class="ProductList__Item__Info__Price">${item.price}$</div>
          <div class="ProductList__Item__Info__Button">
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>`;
  });
  products.innerHTML = htmls.join("");
});
