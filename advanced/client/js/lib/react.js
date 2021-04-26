class ReactDOM {
  component = null;
  target_element = null;

  render(component, target_element) {
    this.component = component;
    this.target_element = target_element;
  }

  renderRecursive(target_dom, react_dom) {
    if (!(react_dom instanceof Array)) {
      target_dom.appendChild(react_dom);
    } else {
      for (const child_react_dom of react_dom) {
        this.renderRecursive(target_dom, child_react_dom);
      }
    }
  }
  doRender() {
    if (this.component === null || this.target_element === null) return;
    this.target_element.innerHTML = '';
    this.renderRecursive(this.target_element, this.component());
  }
}

const react_dom = new ReactDOM();
export default react_dom;
