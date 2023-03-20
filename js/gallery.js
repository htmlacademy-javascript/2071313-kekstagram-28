const pictureTemplate = document
  .querySelector('#picture').
  content.querySelector('.picture');

const container = document.querySelector('.pictures');

const crearePicture = ({ comments, description, likes, url }) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

export const createGallery = (picturesData) => {
  const fragment = document. createDocumentFragment();

  picturesData.forEach((pictureData) => {
    const picture = crearePicture(pictureData);
    fragment.append(picture);
  });

  container.append(fragment);
};

