export const parseHTML = (html) => {
  const elem = document.createElement('div');
  elem.innerHTML = html.trim();
  return elem.firstChild;
};
