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
  src
}: {
  name: string,
  description: string,
  children?: ReactElement ,
  src : string
}) {
  return (
      <div className="flex gap-4">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-3xl">
              <img
                  src={src}
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
    <div className="flex flex-col gap-4 mb-2">
      <h2 className="text-3xl font-bold">Members</h2>
      <Member
        name="Jonathan Tellez"
        description="Team leader and backend developer."
        src="/recursos/img/members/joni.png"
      >
        <Badge>Backend</Badge>
      </Member>
      <Member
        name="Luis Alcantar"
        description="Computer science student at BUAP. He is passionate about programming and technology. He is the backend developer of the team."
        src="/recursos/img/members/luis.png"
      >
        <Badge>Backend</Badge>
      </Member>
      <Member
        name="Eduardo Rodriguez"
        description="Computer science student at BUAP. He
        is passionate about programming and technology. He is the frontend
        developer of the team."
        src="/recursos/img/members/lalo.jpeg"
      >
        <Badge>Frontend</Badge>
      </Member>
    </div>
  )
}

function JelDescription() {
  return (
      <>
          <div className="w-[800px] rounded-3xl overflow-hidden">
              <img
                  src="/recursos/221shots_so.png"
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
