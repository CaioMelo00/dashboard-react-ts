import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to="/">
              <h3>Home</h3>
            </NavLink>
          </li>
        </ul>

        <h3 className={styles.subtitle}>Currículo</h3>
        <ul>
          <li>
            <NavLink to="/resume/infos/register">
              Cadastrar Informações
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume/experiences/register">
              Cadastrar Experiência
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume/experiences/listing">
              Lista de Experiências
            </NavLink>
          </li>
        </ul>

        <h3 className={styles.subtitle}>Portfólio</h3>
        <ul>
          <li>
            <NavLink to="/portfolio/register">
              Cadastrar Portfólio
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio/listing">
              Lista de Portfólios
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
