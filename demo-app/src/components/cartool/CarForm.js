import { useState } from 'react';

export default function CarForm({ onSave }) {
  const emptyCarForm = {
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  };
  let [carForm, setCarForm] = useState(emptyCarForm);

  function handleChange(e) {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.value,
    });
  }

  function save(carForm) {
    onSave(carForm);
    setCarForm(emptyCarForm);
  }

  console.log(carForm);

  return (
    <form>
      <div>
        <label htmlFor="make">Make</label>
        <input
          type="text"
          name="make"
          value={carForm.make}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          value={carForm.model}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="year">Year</label>

        <input
          type="text"
          name="year"
          value={carForm.year}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color">Color</label>

        <input
          type="text"
          name="color"
          value={carForm.color}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="price">Price</label>

        <input
          type="text"
          name="price"
          value={carForm.price}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={() => save(carForm)}>
        Save Car
      </button>
    </form>
  );
}
