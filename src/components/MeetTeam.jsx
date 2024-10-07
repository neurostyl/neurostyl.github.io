import React from "react";
import "../components/css/team.css";

function MeetTeam() {
  const teamMembers = [
    {
      name: "Ishan Madhuranga",
      role: "Game Developer / AI Expert",
      bio: "Ishan is a seasoned game developer and AI expert with a passion for blending creativity with cutting-edge technology",
      imgSrc:
        "https://media.licdn.com/dms/image/v2/D4E03AQFVSb1t963fQg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726227235812?e=1733961600&v=beta&t=gsyCx3P1L5q8lkcDK7cvZovda_HHLmOFpKQWdJ1Me5I",
    },
    {
      name: "Alen Mathew",
      role: "Web / Software Dev",
      bio: "Alen is an experienced web developer with a strong focus on building dynamic, user-friendly websites and applications",
      imgSrc:
        "https://media.licdn.com/dms/image/v2/D5603AQHDOcF5RnWA7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718310946441?e=1733961600&v=beta&t=9ctp4fU_NgCK1176FrDj1nUbpXtXTJtHB-FfDbGyulo",
    },
    {
      name: "Maheesha Nimsara",
      role: "Video Expert",
      bio: "Maheesha is a skilled video expert specializing in creating visually captivating content across various media platforms",
      imgSrc:
        "https://mir-s3-cdn-cf.behance.net/user/138/cb2d981752514949.66cf67a7df3e1.jpg",
    },
  ];
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetTeam;
