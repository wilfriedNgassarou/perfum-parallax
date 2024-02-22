import { useEffect } from "react";
import { useState } from "react"

export default function Section () {
  const [botleOpen, setBotleOpen] = useState(false) ;
  const [botleDown, setBotleDown] = useState(false) ;

  useEffect(() => {
    setTimeout(() => {
      setBotleOpen(true) ;

      setTimeout(() => {
        setBotleDown(true) ;
        
        setTimeout(() => {
          setBotleOpen(false);
          setBotleDown(false)
        }, 2000);
      }, 2000);
    }, 2000);
  }, [])

  let className ;

  if(botleOpen) {
    className = 'botle-open' ;
  }

  if(botleDown) {
    className = 'botle-down' ;
  }

  return (

    <section>
      <article className= { botleDown ? 'article-1 article-1-hide' : 'article-1' }>
        <div id="botle-container" className={ className }>
          <div className="up">
            <img src="/up.svg" alt="" />
          </div>
          <div className="text-container">
            <div className='text'>
              <h1>
                Parfum elegant immersion de luxe <br />
                pour vous détendre en toute elegance
              </h1>
              <p>Hydratation Elevated: Sip Excellence with Every Drop</p>
              <div>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="down">
            <img src="/down.svg" alt="" />
          </div>
        </div>
      </article>
      <article className={ botleDown ? 'article-2 article-2-show' : 'article-2' }>
        <div className="details">
          <div className="details-header">
            <h2>immersion perfume</h2>
            <p>
              <b>180,00 €</b>
              Le prix inclut la TVA <br />
              Prix de base 90,00 €/100 ml
            </p>
          </div>
          <div className="card">
            <p>
              Les Conditions Générales de Vente s'appliquent. Les politique de confidentialité et les
              Conditions d´utilisation peuvent être récupérées ici.
            </p>
            <h3>Disponibilité en magasin</h3>
            <div className="list">
              <div className="list-item">
                <div className="list-img-container">
                  <img src="/bus.svg" alt="" />
                </div>
                  <span>
                    Livraison standard offerte et retours gratuits dans les 30 jours
                  </span>
              </div>
              <div className="list-item">
                <div className="list-img-container">
                  <img src="/lock.svg" alt="" />
                </div>
                  <span>
                    Click & Collect gratuit en magasin
                  </span>
              </div>
              <div className="list-item">
                <div className="list-img-container">
                  <img src="/user.svg" alt="" />
                </div>
                  <span>
                    Vous avez besoin de conseils au niveau des tailles et du style ?Contactez-nous !
                  </span>
              </div>
              <div className="list-item">
                <div className="list-img-container">
                  <img src="/package.svg" alt="" />
                </div>
                  <span>
                    Offrez un cadeau qui a du style : ajoutez un emballage cadeau BOSS
                  </span>
              </div>
            </div>
            <div className="accordeon">
              <div>
                <h5>Détails</h5>
                <img src="/arrow-down.svg" alt="" />
              </div>
              <div>
                <h5>Qualité & Instructions d’entretien</h5>
                <img src="/arrow-down.svg" alt="" />
              </div>
              <div>
                <h5>Traçabilité</h5>
                <img src="/arrow-down.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}