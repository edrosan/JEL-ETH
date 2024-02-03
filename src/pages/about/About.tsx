// import { Header } from "components/layout";

// import { JelDescription, Member, Members } from "components/layout";
import { ReactElement } from "react";

function Badge({ children }: { children: string }) {
  return (
    <div>
      <span className=" p-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800">
        {children}
      </span>
    </div>
  );
}

function Member({
  name,
  description,
  children,
}: {
  name: string,
  description: string,
  children?: ReactElement ,
}) {
  return (
      <div className="flex gap-4">
          <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
              <img
                  src="https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={name}
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-medium">{name}</h3>
              {children}
              <p>{description}</p>
          </div>
      </div>
  );
}

function Members() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Members</h2>
      <Member
        name="Jonathan"
        description="Jonathan is a computer science student at the University of Havana. He
        is passionate about programming and technology. He is the front-end
        developer of the team."
      >
        <Badge>Front-end developer</Badge>
      </Member>
      <Member
        name="Luis"
        description="Jonathan is a computer science student at the University of Havana. He
        is passionate about programming and technology. He is the front-end
        developer of the team."
      >
        <Badge>Front-end developer</Badge>
      </Member>
      <Member
        name="Eduardo"
        description="Jonathan is a computer science student at the University of Havana. He
        is passionate about programming and technology. He is the front-end
        developer of the team."
      >
        <Badge>Front-end developer</Badge>
      </Member>
    </div>
  )
}

function JelDescription() {
  return (
      <>
          <div className="w-[800px] rounded-3xl overflow-hidden">
              <img
                  src="/recursos/logo-shot-2.png"
                  alt="JEL"
                  className="w-full h-full object-cover"
              />
          </div>
          <p className="text-2xl">
              The name <strong>JEL</strong> comes from the acronyms of our names{" "}
              <strong>J</strong>onathan, <strong>E</strong>duardo and{" "}
              <strong>L</strong>uis.
          </p>
      </>
  )
}

function About() {
  return (
    <div className="w-[1200px] mx-auto flex flex-col  gap-4 items-center">
      <JelDescription />

      <Members />
    </div>
  );
}

export { About };
