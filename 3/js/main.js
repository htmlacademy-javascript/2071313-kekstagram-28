const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Санаторий у побережья моря',
  'Дорога на пляж',
  'Голубая лагуна',
  'Красотка',
  'Время перекусить',
  'Тачка мечты',
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
];

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

createPhotosMocks(PICTURE_COUNT);
// console.log(createPhotosMocks(PICTURE_COUNT));
