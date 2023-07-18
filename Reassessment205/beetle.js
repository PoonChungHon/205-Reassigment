const form = document.querySelector('form');
const commentsList = document.querySelector('#comments-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const comment = event.target.comment.value;

  const commentDiv = document.createElement('div');
  commentDiv.innerHTML = `<p><strong>${name}:</strong> ${comment}</p>`;
  commentsList.appendChild(commentDiv);

  event.target.reset();
});