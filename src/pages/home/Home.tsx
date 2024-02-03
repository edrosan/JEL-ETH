import { Bento, Jumbotron } from "components/layout";



function Home() {
  return (
    <div className="w-full mb-4 flex flex-col gap-4">
      <Jumbotron />
      <Bento />
    </div>
  );
}

export { Home };
