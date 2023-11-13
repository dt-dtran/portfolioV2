import profile from "../assets/images/profile.png";

const people = [
  {
    name: "Diana Tran",
    role: "Full-stack Developer",
    image: profile,
  },
];

export default function Profile() {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.name} className="py-4 flex">
          <img className="h-12 w-12 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-md font-medium text-gray-300">{person.name}</p>
            <p className="text-md header-bg">{person.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
