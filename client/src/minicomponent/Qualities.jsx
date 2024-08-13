import React from 'react'

function Qualities() {

  const qualities = [
    {
      id: 1,
      image: "https://media.licdn.com/dms/image/C4D12AQFbuAk-KCI_tQ/article-cover_image-shrink_720_1280/0/1639391124929?e=2147483647&v=beta&t=Zqzzf8c8tVl42jIOPXfXsSC9MRXisico5PU5U-9H_Q8",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Janseva Hub is committed to fostering sustainable and inclusive growth within communities. We work closely with local organizations, volunteers, and stakeholders to identify needs and implement effective solutions.",
    },
    {
      id: 2,
      image: "https://qph.cf2.quoracdn.net/main-qimg-983a4b475eb571d815088a8cfcc207eb",
      title: "TRANSPARENCY",
      description:
        "Transparency is at the heart of everything we do. We believe in maintaining open and honest communication with our partners, volunteers, and beneficiaries. Our processes, decisions, and financial operations are conducted with the utmost integrity.",
    },
    {
      id: 3,
      image: "https://ssir.org/images/blog/6-leonora-buckland-impact-measurement.592x436.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "Measuring the impact of our initiatives is crucial to understanding our success and areas for improvement. At Janseva Hub, we employ rigorous methods to assess the effectiveness of our programs and projects",
    },
  ];
  return (
    <>
    <div className="qualities">
      <h2 className=''>OUR PILLARS</h2>
      <div className="container">
        {qualities.map((elememt) => {
          return (
            <div className="card" key={elememt.id}>
              <div className="img-wrapper">
                <img src={elememt.image} alt={elememt.title} />
              </div>
              <div className="content">
                <p className="title">{elememt.title}</p>
                <p className="description">{elememt.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
  )
}

export default Qualities
