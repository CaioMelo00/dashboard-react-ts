import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { useAuth } from "../../../contexts/AuthContext";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

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

        <ul>
          <li>
            <NavLink onClick={logout} to="/login">
              <h3>Logout</h3>
            </NavLink>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Sidebar;
