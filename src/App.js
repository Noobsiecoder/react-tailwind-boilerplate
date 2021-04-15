import TailwindMarkLogo from "./svg/twcss.svg";
import ReactLogo from "./svg/react.svg";

const Link = ({ url, name }) => (
  <a
    className="font-semibold text-blue-500 underline"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {name}
  </a>
);

const Button = ({ url, text }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full px-3 py-2 text-center text-blue-400 border border-blue-400 rounded hover:bg-blue-400 hover:text-white hover:border-opacity-0 focus:outline-none"
  >
    <span className="font-medium">{text}</span>
  </a>
);

const Card = ({ svg, title, type }) => (
  <section className="w-full p-6 space-y-8 border rounded">
    <div className="flex items-center justify-center">
      <img className="w-36 h-36" src={svg} alt="" />
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-base font-light">
        To know how to work with{" "}
        <strong className="capitalize">{type} file</strong> for your{" "}
        <strong>React</strong> + <strong>Tailwind</strong> project, please click
        the below link.
      </p>
      <div className="">
        <Button
          url={`${
            type === "Tailwind CSS"
              ? "https://github.com/Noobsiecoder/react-tailwind-boilerplate/doc/react-app.md"
              : "https://github.com/Noobsiecoder/react-tailwind-boilerplate/doc/tailwind.md"
          }`}
          text={`${
            type === "Tailwind CSS" ? "View Tailwind MD" : "View React MD"
          }`}
        />
      </div>
    </div>
  </section>
);

const App = () => (
  <div className="flex h-screen text-gray-800 px-72">
    <article className="p-8 m-auto space-y-6 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-light">
        Welcome to <strong className="font-medium">React</strong> +{" "}
        <strong className="font-medium">Tailwind</strong> Boilerplate
      </h1>
      <div className="space-y-4">
        <h3 className="text-xl font-light">Documentation</h3>
        <div className="flex gap-x-4">
          <Card
            svg={TailwindMarkLogo}
            title="Using Tailwind"
            type="Tailwind CSS"
          />
          <Card svg={ReactLogo} title="Using React" type="React.js" />
        </div>
      </div>
      <p className="font-light">
        <strong>Note:</strong> In no way this page is related to the Official{" "}
        <Link url="https://reactjs.org/" name="React" /> and{" "}
        <Link url="https://tailwindcss.com/" name="Tailwind" />
      </p>
    </article>
  </div>
);

export default App;
