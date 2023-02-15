export const showBookList = () => {
  document.getElementById('id1').style.display = 'block';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
};

export const showForm = () => {
  document.getElementById('id1').style.display = 'none';
  document.getElementById('addBook').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
};

export const showContact = () => {
  document.getElementById('id1').style.display = 'none';
  document.getElementById('addBook').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
};
