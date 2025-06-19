import React from 'react';

const cards = [
  {
    image: '/src/assets/images/img1.jpg',
    title: 'Lorem ipsum dolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    sub: 'Lorem ipsum dolor sit amet,'
  },
  {
    image: '/src/assets/images/img2.jpg',
    title: 'Lorem ipsum dolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    sub: 'Lorem ipsum dolor sit amet,'
  },
  {
    image: '/src/assets/images/img3.jpg',
    title: 'Lorem ipsum dolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    sub: 'Lorem ipsum dolor sit amet,'
  },
  {
    image: '/src/assets/images/img4.jpg',
    title: 'Lorem ipsum dolor sit amet,',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    sub: 'Lorem ipsum dolor sit amet,'
  },
];

const Card = () => {
  return (
    <section className="section-container section-padding bg-white">
      <div className="card-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="card-item">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-extrabold text-2xl mb-2">
                Lorem ipsum<br />dolor sit amet,
              </h3>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
              </p>
              <span className="text-gray-300 text-base mt-auto">{card.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;