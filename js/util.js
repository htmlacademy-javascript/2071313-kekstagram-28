import { PICTURE_COUNT, AVATAR_COUNT, LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENT_COUNT, COMMENTS, DESCRIPTIONS, NAMES } from './data.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createCommetsMocks = () => {
  const randomCount = getRandomInteger(1, COMMENT_COUNT); // например 8
  const result = [];

  for (let i = 0; i < randomCount; i++) {
    const avatar = `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`;
    const id = i + 1;
    const message = getRandomElement(COMMENTS);
    const name = getRandomElement(NAMES);

    const comment = {
      id,
      avatar,
      message,
      name,
    };

    result.push(comment);
  }

  return result;
};


const createPhotosMocks = (count) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const url = `photos/${getRandomInteger(1, PICTURE_COUNT)}.jpg`;
    const description = getRandomElement(DESCRIPTIONS);
    const comments = createCommetsMocks();
    const likes = getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT);

    const comment = {
      id,
      url,
      description,
      likes,
      comments,
    };

    result.push(comment);
  }

  return result;
};

export { getRandomInteger, getRandomElement, createCommetsMocks, createPhotosMocks };
