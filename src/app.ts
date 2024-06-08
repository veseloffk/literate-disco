import { title } from "src/components/common";

const init = (): {
  render: () => void;
} => {
  const body = document.body;

  const container = document.createElement("div");
  container.className = "container py-5";

  const inner = document.createElement("div");
  inner.className =
    "d-flex flex-column align-items-center w-100 text-center mx-auto";

  const { container: titleContainer, render: titleRender } = title({
    text: "literate-disco",
  });

  inner.append(titleContainer);
  container.append(inner);
  body.append(container);

  const render = () => {
    titleRender();
  };

  return { render };
};

export default init;
