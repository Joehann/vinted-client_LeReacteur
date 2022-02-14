import "./content.scss";
const Content = ({ publish, setPublish }) => {
  return (
    <div className="publish">
      <h2>Vends ton article</h2>
      <form>
        <div className="block block-picture">
          <input type="file" class="custom-file-input" />
        </div>
        <div className="block block-article">
          <div className="input">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              name="title"
              placeholder="ex: Chemise Sézane verte"
            />
          </div>
          <div className="input">
            <label htmlFor="description">Décris ton article</label>
            <textarea
              name="description"
              placeholder="ex : porté quelquefois, taille correctement"
            ></textarea>
          </div>
        </div>
        <div className="block block-details">
          <div className="input">
            <label htmlFor="title">Marque</label>
            <input type="text" name="title" placeholder="ex: Zara" />
          </div>
          <div className="input">
            <label htmlFor="title">Taille</label>
            <input type="text" name="title" placeholder="ex: ex L / 40 / 12" />
          </div>
          <div className="input">
            <label htmlFor="title">Couleur</label>
            <input type="text" name="title" placeholder="ex: Fushia" />
          </div>
          <div className="input">
            <label htmlFor="title">Etat</label>
            <input
              type="text"
              name="title"
              placeholder="ex: Neuf avec étiquette"
            />
          </div>
          <div className="input">
            <label htmlFor="title">Lieu</label>
            <input type="text" name="title" placeholder="ex: Paris" />
          </div>
        </div>
        <div className="block block-price">
          <div className="input">
            <label htmlFor="title">Prix</label>
            <input type="text" name="title" placeholder="0.00 €" />
          </div>
        </div>
        <button type="submit" value="">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Content;
