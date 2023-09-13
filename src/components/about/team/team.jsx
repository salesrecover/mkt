const MEMBERS = [
  {
    name: "Daniel",
    designation: "Engineer",
    image: "/images/team/1.jpg",
    image_alt: "Team member: Anh Le",
  },
  {
    name: "Viet",
    designation: "Marketer",
    image: "/images/team/3.jpg",
    image_alt: "Team member: Viet",
  },
  {
    name: "Thao",
    designation: "Product Manager",
    image: "/images/team/4.jpg",
    image_alt: "Team member: Thao",
  },
];

export default function AboutTeam() {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-7 mx-auto">
            <div className="section-header">
              <h2>Our team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {MEMBERS.map((member, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="team-member">
                <div className="team-member-thumb rounded-box">
                  <img
                    src={member.image}
                    alt={member.image_alt}
                    loading="lazy"
                  />
                </div>
                <div className="team-member-details">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
