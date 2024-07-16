export default function MenuFooter() {
  
    return (
        <div className="grid grid-cols-4 px-6 py-10 bg-purple gap-10 font-bebas_neue">
          {/* Left part */}
          <div className="grid-cols-auto gap-x-10">
            <ul className="flex list-none flex-col gap-3">
              <li>
                <p
                  className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-body-1 font-bold hover:opacity-dim-1 no-underline text-caption hover:underline uppercase"
                  title="Redirection"
                >
                  Redirection
                </p>
              </li>
              <li>
                <a
                  href="/"
                  className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-body-2 hover:opacity-dim-1 no-underline text-caption hover:underline uppercase"
                  title="Emploi"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-base hover:opacity-dim-1 no-underline text-caption hover:underline uppercase"
                  title="Emploi"
                >
                  Mon compte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-base hover:opacity-dim-1 no-underline text-caption hover:underline uppercase"
                  title="Emploi"
                >
                  Favoris
                </a>
              </li>
            </ul>
          </div>
          {/* Right part */}
          <div className="grid-cols-6 gap-x-10">
            <ul className="flex list-none flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-lg font-bold hover:opacity-dim-1 no-underline text-caption hover:underline uppercase"
                  title="Emploi"
                >
                  Liens Utils
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
  }