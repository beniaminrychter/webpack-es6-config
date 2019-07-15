class App {
  constructor() {
    this.app = document.getElementById("app");
    this.renderText();
  }

  renderText() {
    const $h1 = document.createElement("h1");
    $h1.innerText = "Hello World!";
    this.app.appendChild($h1);
  }
}

export default App;
