export default (container) => {
  const home = () => {
    container.textContent = "This is Home page";
  };

  const list = () => {
    container.textContent = "This is List page";
  };

  const detail = (params) => {
    const { id } = params;

    container.textContent = `This is Detail Page with Id ${id}`;
  };

  const anotherDetail = (params) => {
    const { id, anotherId } = params;

    container.textContent = `This is another Detail Page with Id ${id} and AnotherId ${anotherId}`;
  };

  const notFound = () => {
    container.textContent = "Page not found";
  };

  return {
    home,
    list,
    detail,
    anotherDetail,
    notFound,
  };
};
