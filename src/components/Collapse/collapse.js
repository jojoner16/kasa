import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import '../../styles/Components/collapses.css';

function Collapse({ title, content }) {
  //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(false); // je definie le state du toggle (et false par défaut)

  //fonction pour gérer l'afichage du contenu des collapses
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const chevronClasses = classNames('chevron', {
    'chevron-rotate': isOpen,
  });

  const dropdownContentClasses = classNames('dropdownContent', {
    'dropdownContent-open': isOpen,
  });

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
    <div className="dropdownContainer">
      <div className="dropdownTitle" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <p className={chevronClasses}>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="chevron"
          />
        </p>
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div className={dropdownContentClasses}>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
