import Image from "next/image";
import "@/styles/app.scss";

export default function Home() {
  return (
    <div>
      <h1 className="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
      </h1>
      <h2 className="h2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
      </h2>
      <h3 className="h3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
      </h3>
      <h4 className="h4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
      </h4>
      <h5 className="h5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
      </h5>
      <h6 className="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
      </h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, delectus.
      </p>
      <br />
      <hr />
      <div className="flex flex-col w-[200px] gap-[10px]">
        <a className="action">button</a>
        <a className="action-outline">button</a>
        <a className="ghost">button</a>
        <a className="link">button</a>
        <a className="is-external">button</a>
      </div>
    </div>
  );
}
