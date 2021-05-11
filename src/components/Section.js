export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const renderedItem = this._renderer(item);
      this.addItem(renderedItem);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
