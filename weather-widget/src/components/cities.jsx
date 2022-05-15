const data = ["Seleziona una città", "Milano", "Roma", "Palermo", "Trieste", "Domodossola", "Catania"];

const Cities = (props) => {
  /**
   * Callback per onChange su <select>
   * @param {*} event
   */
  const cityChange = (event) => {
    const selected = event.target.value;
    props.notify(selected);
  };

  return (
    <section className="città">
      <select className="seleziona-città" onChange={cityChange}>
        {data.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>{item}
          </option>
        ))}
      </select>
    </section>
  );
};

export { Cities };