let userConnected = false;

export default function Header() {
  return (
    <>
      <header>
        <nav>
          {userConnected ? (
            <ul>
              {" "}
              <li>coucou</li>
              <li>coucou</li>
              <li>coucou</li>
              <li>coucou</li>
            </ul>
          ) : (
            <ul>
              {" "}
              <li>coucou</li>
              <li>coucou</li>
              <li>coucou</li>
              <li>coucou</li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}
