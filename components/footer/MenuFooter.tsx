export default function MenuFooter() {
  return (
    <div className="grid grid-cols-4 px-6 py-10 bg-purple gap-10 font-bebas_neue">
      {/* Mieux nous connaître */}
      <div className="grid-cols-auto gap-x-10">
        <ul className="flex list-none flex-col gap-3">
          <li>
            {/* Title */}
            <p
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current md:text-body-2 xl:text-body-1 font-bold no-underline text-caption uppercase border-solid border-b-2"
              title="Mieux nous connaître"
            >
              Mieux nous connaître
            </p>
          </li>
          {/* Links */}
          <li>
            <a
              href="#"
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-body-3 hover:opacity-dim-1 no-underline text-caption hover:underline "
              title="Nous contacter"
            >
              Nous contacter
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-body-3 hover:opacity-dim-1 no-underline text-caption hover:underline "
              title="Mon compte"
            >
              Mon compte
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-body-3 hover:opacity-dim-1 no-underline text-caption hover:underline "
              title="Favoris"
            >
              Favoris
            </a>
          </li>
        </ul>
      </div>
      {/* Liens Utils */}
      <div className="grid-cols-6 gap-x-10">
        <ul className="flex list-none flex-col gap-3">
          {/* Title */}
          <li>
            <p
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current md:text-body-2 xl:text-body-1 font-bold hover:opacity-dim-1 no-underline text-caption uppercase border-b-2"
              title="Emploi"
            >
              Solutions pros
            </p>
          </li>
        </ul>
      </div>
      <div className="grid-cols-auto gap-x-10">
        <ul className="flex list-none flex-col gap-3">
          {/* Title */}
          <li>
            <p
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current md:text-body-2 xl:text-body-1 font-bold hover:opacity-dim-1 no-underline text-caption uppercase border-b-2"
              title="Redirection"
            >
              informations légales
            </p>
          </li>
          <li>
            <a
              href="#"
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current text-body-3 hover:opacity-dim-1 no-underline text-caption hover:underline "
              title="Conditions générales d'utilisation"
            >
              Conditions générales d'utilisation
            </a>
          </li>
        </ul>
      </div>
      <div className="grid-cols-auto gap-x-10">
        <ul className="flex list-none flex-col gap-3">
          {/* Title */}
          <li>
            <p
              className="inlinde-flex items-center focus-visible:ring focus-visible:outline-none text-current md:text-body-2 xl:text-body-1 font-bold hover:opacity-dim-1 no-underline text-caption uppercase border-b-2"
              title="Redirection"
            >
              des questions ?
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
