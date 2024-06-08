type IInitOptions = { text: string };

const title = (
  options: IInitOptions,
): {
  container: HTMLHeadElement;
  render: () => void;
} => {
  const { text } = options;

  const container = document.createElement("h2");
  container.className = "mb-5";
  container.innerText = text;

  const render = () => {};

  return {
    container,
    render,
  };
};

export default title;
