export default function(data) {
  return `
    <div class="person">
      <button class="back-button" data-to="people">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="imageDiv">
        <img class="image" src="${data.ImgSrc}">
      </div>
      <h3>${data.FirstName} ${data.LastName}</h3>
      <h3>${data.Phone}</h3>
      <h3>${data.Email}</h3>
      <h3>${data.Location}</h3>
    </div>
  `;
}

