import CardStep from './CardStep';

import set1 from '../../assets/images/priceConstructor/sets/set-1.jpg';
import set2 from '../../assets/images/priceConstructor/sets/set-2.jpg';
import set3 from '../../assets/images/priceConstructor/sets/set-3.jpg';

const SetForm = () => {
  return (
    <form className={'price-constructor__step price-constructor__step--active constructor-step'}>
      <h3 className="constructor-step__title">Choose a set</h3>
      <CardStep
        discount="-40%"
        title="Economy"
        imageUrl={set1}
        totalPrice={59}
        originalPrice="100"
        firstProperty="Front or rear"
      />
      <CardStep
        discount="-15%"
        title="Standart"
        imageUrl={set2}
        totalPrice={119}
        originalPrice="140"
        firstProperty="Front and rear"
      />
      <CardStep
        discount="-10%"
        title="Premium"
        imageUrl={set3}
        totalPrice={199}
        originalPrice="220"
        firstProperty="Front and rear + trunk mat"
      />
    </form>
  )
}

export default SetForm;