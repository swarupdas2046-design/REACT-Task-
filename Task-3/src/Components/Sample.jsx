import Card from "./Card";

const Sample = () => {
  const users = [
    {
      id: 3,
      username: "sneha_uiux",
      name: "Sneha Kapoor",
      position: "UI/UX Designer",
      skills: ["Figma", "Adobe", " Research"],
      description: "29-year-old UI/UX designer with a strong eye for detail. ",
      image:
        "https://i.pinimg.com/736x/4d/5d/11/4d5d1137ce8e873454dc4938027f2c89.jpg",
    },

    {
      id: 5,
      username: "neha_cpp",
      name: "Neha Sharma",
      position: "Software Engineer",
      skills: ["C", "C++", "DSA"],
      description:
        "27-year-old software engineer with strong fundamentals in C and C++.",
      image:
        "https://i.pinimg.com/1200x/a8/89/3d/a8893d84704934a62793ef704e7cd1bb.jpg",
    },
  ];

  return (
    <div className="h-full w-full bg-black p-8 flex justify-evenly ">
      {users.map((elem) => (
        <Card lolo={elem} />
      ))}
    </div>
  );
};

export default Sample;
