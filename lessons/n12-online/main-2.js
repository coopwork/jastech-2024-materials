

const news = [
  {
    image: 'https://picsum.photos/200/200',
    title: 'news title dwadwa dwad wad wawa aw',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  {
    image: 'https://picsum.photos/201/201',
    title: 'news title dwaaw dwad awd awdaw dawd awd awdawdaw dwa',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  {
    image: 'https://picsum.photos/202/202',
    title: 'news title',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  {
    image: 'https://picsum.photos/203/203',
    title: 'news title',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
];


const newsBlock = document.querySelector('.news__block');


news.forEach(({ image, title, description }) => {
  const newsCard = renderNewsCard({ image, title, description })
  newsBlock.appendChild(newsCard)
});


function renderNewsCard({ image, title, description }) {
  const articleBlock = document.createElement('article');
  const aLink = document.createElement('a');
  const cardImgWrapper = document.createElement('div');
  const newsImage = document.createElement('img');
  const cardContentBlock = document.createElement('div');
  const titleBlock = document.createElement('h4');
  const paragraph = document.createElement('p');

  articleBlock.className = 'news__card'

  aLink.setAttribute('href', '#');
  aLink.className = 'card__link';

  cardImgWrapper.className = 'card__image__wrapper';

  newsImage.setAttribute('src', image);
  newsImage.setAttribute('alt', title);
  newsImage.className = 'card__image';

  cardContentBlock.className = 'card__content';

  titleBlock.className = 'card__title';
  titleBlock.textContent = title;

  paragraph.className = 'card__description'
  paragraph.textContent = description;

  articleBlock.appendChild(aLink)
  articleBlock.appendChild(cardImgWrapper)
  cardImgWrapper.appendChild(newsImage)
  articleBlock.appendChild(cardContentBlock)
  cardContentBlock.appendChild(titleBlock)
  cardContentBlock.appendChild(paragraph)


  return articleBlock
}