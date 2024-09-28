import { useState, useRef } from "react";
import { useSpring, animated } from 'react-spring';
import './faq.scss';



const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const animation = useSpring({
    height: isOpen ? contentRef.current.scrollHeight : 0 
  });
  return (
    <div className="faq__item" onClick={() => setIsOpen(!isOpen)}>
      <h5 className={`faq__item-title ${isOpen ? 'opened' : ''}`}>{title}</h5>
      <animated.div style={animation} className='faq__item-text'>
        <p ref={contentRef}>{content}</p>
      </animated.div>
    </div>
  )
}


const FAQ = () => {
  const items = [
    { title: 'DO THE MATS HAVE A WARRANTY PERIOD?', content: 'The service life of EVA products largely depends on their owner, his driving style, and the conditions in which they are used. If you have not had any problems with these accessories made of textiles or rubber, then ours can serve you for many years.' },
    { title: 'DO THE MATS DIFFER FROM THE ORIGINAL ONES?', content: 'Our products may differ from the original ones. The reason for this is that we cut them out according to our own patterns. But this is not a disadvantage, and in some cases even an advantage.' },
    { title: 'WHICH MATS ARE BETTER SUITED FOR FALL SEASON?', content: ' All EVA accessories are perfect for use in the fall season. They will not soften from water (unlike textile mats), which will be a lot from frequent rains, and will not harden in the cold, which happens with rubber.' },
    { title: 'HOW TO TAKE CARE OF MATS?', content: 'The mats are designed for washing with a jet of water under pressure. Under its pressure, all accumulated dirt in the cells is instantly washed away. They are not afraid of auto shampoos and detergents. They can be washed every time you come to the car wash.' },
    { title: 'WHEN WILL YOU HAVE MATS FOR MY MODEL? CAN I CONTRIBUTE IN ANY WAY?', content: 'Our product range is constantly expanding.' },
    { title: 'WHAT MATERIAL ARE THE MATS MADE OF?', content: 'For the manufacture of mats, we use an innovative material with a cellular structure – Ethylene Vinyl Acetate (EVA or sevylene). It is very light and at the same time durable, functional and stylish, convenient and at the same time inexpensive. Among the advantages of this material are: the ability to retain a large amount of liquid, odorless, resistant to chemical reagents, absolute safety for health and the environment, preservation of all characteristics both in the heat of +50 ° C and in the.' },
    { title: 'ARE MATS AFRAID OF SHARP HEELS?', content: 'The wear resistance of EVA mats is quite high. However, due to the relative softness and elasticity of the material (which gives comfort underfoot), the structure can be damaged by sharp heels and other sharp objects.' },
    { title: 'DO THE MATS HAVE A SMELL?', content: 'They can have a smell, like any other products, only if they are new. But it fades quickly and will not reappear. EVA material (savylene) is made of environmentally friendly components and in further operation will not smell even at very high temperatures (+50 ° C).' },
    { title: 'DO THE MATS HAVE A SMELL?', content: 'They not only do not spoil shoes, but even, on the contrary, help to keep them clean. The surface of EVA mats has cells that reliably retain moisture, dust, sand and other dirt until they are removed and shaken out. In addition, car mats do not erase the sole. The EVA material itself is even used in the production of sports shoes.' },
    { title: 'HOW IS THE FASTENING OF THE MATS CARRIED OUT?', content: 'Fastening is mainly carried out with the help of "Velcro". But for car models that are equipped with factory holders, we make mats with the appropriate fasteners.' },
    { title: 'EVA MATS DO NOT HAVE SIDES, WILL THE WATER OVERFLOW OVER THE EDGE?', content: 'This question is asked very often. Many draw an analogy with rubber mats in the form of baths, which really need bumpers.' },
    { title: 'WHICH COLOR GETS DIRTY THE LEAST?', content: 'The most practical colors for car mats are gray and beige. The most popular color combination is a gray mat with black edging. It is great for dark interiors. Beige ones are ideal for light interiors, but they also look very original in dark ones, especially if there are light elements there. The edging for beige is better to choose either exactly in color or black. If we compare gray and beige colors in terms of practicality, then dry dust, debris and sand are less noticeable on beige, which by their nature have a light beige (sandy) hue and visually merge with the rugs. And in wet weather, on the contrary, gray ones will be more practical, since wet dirt is less noticeable on them.' },
  ]
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">F&Q</h2>
        <div className="faq__items">
          {items.map((item, index) => (
            <FAQItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;