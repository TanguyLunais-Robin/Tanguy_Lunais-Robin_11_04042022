import React from "react";

import Banner from "../components/Banner";

import banner from "../assets/BannerAbout.png"
import Dropdown from "../components/Dropdown";

class About extends React.Component {
  render () {
    return (
      <main>
        <Banner
          src = {banner}
          alt = "Photo de la bannière"
        />
        <section>
          <Dropdown
            title = "Fiabilité"
            content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
        </section>
      </main>
    );
  }
}

export default About;

/*
          <Dropdown
            title = "Respect"
            content = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Dropdown
            title = "Fiabilité"
            content = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Dropdown
            title = "Fiabilité"
            content = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
*/