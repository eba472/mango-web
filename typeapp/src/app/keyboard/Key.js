import './keyboard.css'

function Key({ keyVal }) {
  const createIconHTML = (icon_name) => {
    return `<i class="material-icons">${icon_name}</i>`;
  };
  console.log(`keyVal`, keyVal)
  return <div className="keyboard__key">{keyVal}</div>;
}

export default Key;
