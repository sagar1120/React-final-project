import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import css from './Header.module.css';

const Header = () => {

    return(

        <header className={css.header}>
            <div className={css.headerDiv}>
                <h1>PRODUCT ADMIN</h1>

                <div className={css.divUl}
                >
                    <ul className={css.headerUl}>
                        <li><FontAwesomeIcon className={css.icon} 
                                icon={faTachometerAlt} />
                            Dashboard
                        </li>
                        <li><FontAwesomeIcon className={css.icon} 
                                icon={faFileAlt} />
                            <span>Reports
                            <FontAwesomeIcon className={css.arrowIcon}
                                icon={faAngleDown} />
                            </span>
                        </li>
                        <li><FontAwesomeIcon className={css.icon} 
                                icon={faShoppingCart} />
                            Products
                        </li>
                        <li><FontAwesomeIcon className={css.icon} 
                                icon={faUser} />
                            Accounts
                        </li>
                        <li><FontAwesomeIcon className={css.icon} 
                                icon={faCog} />
                            <span>Settings
                            <FontAwesomeIcon className={css.arrowIcon}
                                icon={faAngleDown} />
                            </span>
                        </li>
                    </ul>

                </div>
               
            </div>
        </header>
    );
}

export default Header;