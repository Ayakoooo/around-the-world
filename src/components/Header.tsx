import { NavLink } from "react-router";
import { Container } from "../shared/Container";

export const Header = () => {
  return (
    <header>
      <Container>
        <nav className="flex items-center justify-between">
          <NavLink
            to={"/"}
            className="header-title font-serif text-base sm:text-2xl"
          >
            Around the World
          </NavLink>

          <ul className="flex items-center gap-4 text-xs text-gray-800 sm:text-base">
            <li>
              <NavLink to={"/"}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "font-semibold text-black"
                        : "text-gray-500 transition hover:text-black"
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "font-semibold text-black"
                        : "text-gray-500 transition hover:text-black"
                    }
                  >
                    About
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
