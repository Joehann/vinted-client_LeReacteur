import "./content.scss";
import { useState } from "react";
import Cross from "../../../assets/img/cross.svg";
const Content = ({ setPublish }) => {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  let src = "";
  if (picture.name) {
    src = URL.createObjectURL(picture);
    // console.log(src);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObj = {};
    newObj.title = title;
    description.length > 0 && (newObj.description = description);
    newObj.price = price;
    condition.length > 0 && (newObj.condition = condition);
    city.length > 0 && (newObj.city = city);
    brand.length > 0 && (newObj.brand = brand);
    size.length > 0 && (newObj.size = size);
    color.length > 0 && (newObj.color = color);
    newObj.picture = picture;

    //set the state only if title, price and picture are defined
    newObj.title && newObj.price && newObj.picture && setPublish(newObj);
  };

  const removeImage = () => {
    setPicture({});
  };
  return (
    <div className="publish">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div className="block block-picture">
          {!picture.name ? (
            <input
              type="file"
              className="custom-file-input"
              onChange={(event) => setPicture(event.target.files[0])}
            />
          ) : (
            <div className="preview">
              <img src={src} alt="" />
              <div className="cross">
                <img src={Cross} alt="" onClick={removeImage} />
              </div>
            </div>
          )}
        </div>
        <div className="block block-article">
          <div className="input">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              name="title"
              placeholder="ex: Chemise Sézane verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="description">Décris ton article</label>
            <textarea
              name="description"
              placeholder="ex : porté quelquefois, taille correctement"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="block block-details">
          <div className="input">
            <label htmlFor="brand">Marque</label>
            <input
              type="text"
              name="brand"
              placeholder="ex: Zara"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="size">Taille</label>
            <input
              type="text"
              name="size"
              placeholder="ex: ex L / 40 / 12"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="color">Couleur</label>
            <input
              type="text"
              name="color"
              placeholder="ex: Fushia"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="condition">Etat</label>
            <input
              type="text"
              name="condition"
              placeholder="ex: Neuf avec étiquette"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="city">Lieu</label>
            <input
              type="text"
              name="city"
              placeholder="ex: Paris"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="block block-price">
          <div className="input">
            <label htmlFor="price">Prix</label>
            <input
              type="text"
              name="price"
              placeholder="0.00 €"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
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
