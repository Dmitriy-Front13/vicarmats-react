import aboutProduct from '../../assets/images/howWeWork/about_product.jpg';
import aboutUs from '../../assets/images/howWeWork/about_us.jpg';
import delivery from '../../assets/images/howWeWork/delivery.jpg';
import warranty from '../../assets/images/howWeWork/warranty.jpg';

import './howWeWork.scss'

const HowWeWork = () => {
  const items = [
    { title: 'About the product', images: aboutProduct, link: 'about-product' },
    { title: 'About us', images: aboutUs, link: 'about-us' },
    { title: 'Warranty and refund', images: delivery, link: 'warranty' },
    { title: 'Delivery', images: warranty, link: 'delivery' }
  ];
  return (
    <section className="how-we-work section">
      <div className="container">
        <div className="how-we-work__items">
          {items.map((item, index) => (
            <div className="how-we-work__item" key={index}>
              <a className="how-we-work__link"
                style={{ backgroundImage: `url(${item.images})` }}
                href={item.link}>
                <div className="how-we-work__link-items">
                  <h4 className="how-we-work__link-title">{item.title}</h4>
                  <span>More {'>'}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork;