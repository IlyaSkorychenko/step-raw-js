function main() {
  const newElement = document.createElement('h1');
  newElement.textContent = 'New element';

  document.getElementById('custom-root').appendChild(
    newElement
  );

  let counter = 0;

  document.getElementById('btn-to-click').addEventListener('click', (event) => {
    counter += 1;
    const colorChanger = counter * 10000;
    const maxHexColorAmount = 16777215;

    event.target.textContent = `Clicked ${counter}`;
    event.target.style.backgroundColor = '#' + colorChanger.toString(16).padStart(6, '0');
    event.target.style.color = '#' + (maxHexColorAmount - colorChanger).toString(16).padStart(6, '0');
  });
}

main()