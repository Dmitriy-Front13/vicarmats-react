
import '../assets/styles/warranty&delivery.scss';

const Warranty = () => {
  return (
    <main>
      <section className="warranty">
        <div className="container">
          <div className="warranty__inner">
            <h2 className="warranty__title">Warranty and Refund</h2>
            <p className="warranty__desc">At Evatech, we provide a warranty card and a 6-month warranty on all our car mats.
              Returns are possible within 7 days if the mats are not damaged.</p>
            <div className="warranty__items-box">
              <p className="delivery__items-desc">Dear customers, if you are not satisfied with the product purchased in our
                online store, and you decide to return your funds, we will tell you in detail how to do it.</p>
              <p className="delivery__items-desc">We would like to draw your attention to the fact that return of the goods is
                possible if the following conditions are met:</p>
              <ul>
                <li>Make sure that you have installed the mats correctly in the car interior. In most cases, our
                  specialists should tell customers the correct installation method and the problem is solved by itself;
                </li>
                <li>The product must have a proper appearance: its packaging has been preserved, there should be no traces
                  of use on the mats, in addition, You must have a warranty card confirming the fact of purchase and the
                  possibility of a return/warranty</li>
              </ul>
              <p className="delivery__items-desc">If you are sure that all of the above conditions are met, please fill out
                the form and attach all the necessary data to make a refund.
              </p>
              <p className="delivery__items-desc">Important! If you have received an item with a defect, Evatech will exchange
                it as soon as possible and deliver it at its own expense.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Warranty;