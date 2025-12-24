import Card from "./Card";

const Ok = () => {
  const users = [
    {
      id: 1,
      username: "biru_pajji",
      name: "Biru Pajji",
      position: "Software Developer",
      skills: ["UI", "UX", "PHP"],

      description:
        "32-year-old software developer with strong experience in UI/UX design and backend development",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },

    {
      id: 2,
      username: "rohan_dev",
      name: "Rohan Mehta",
      position: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript"],

      description:
        "26-year-old frontend developer specializing in modern JavaScript frameworks. ",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    },
  ];

  return (
    <div className="h-full w-full flex  items-center justify-evenly p-8 bg-black">
      {users.map((elem) => (
        <Card key={elem.id} lolo={elem} />
      ))}
    </div>
  );
};

export default Ok;
