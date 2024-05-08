document.addEventListener("DOMContentLoaded", function () {
  fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((orders) => {
      const listElement = document.getElementById("order-summary-list");

      orders.forEach((order) => {
        const element = document.createElement("div");
        element.className = "order-summary-list-item";
        element.innerHTML = `
          <div>
            <span class="list-item-icon">
              <img src="${order.icon}" alt="${order.category} icon">
            </span>
            <span>${order.category}:</span>
          </div>
          <div class="list-item-score">
            <b><span>${order.score}</span> / 100</b>
          </div>
        `;
        listElement.appendChild(element);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
