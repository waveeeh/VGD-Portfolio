
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'


const certifications = [
  {
    title: 'Logo Design Certificate',
    image: 'https://drive.google.com/thumbnail?id=1HhQGysJhO_pkwa28R2wYIPr26_Y6lx4e&sz=w1200',
  },
  {
    title: 'Print Media Certificate',
    image: 'https://drive.google.com/thumbnail?id=1HMhMUAuvpirQAxbxoNDF7kCO4T_-C-kD&sz=w1200',
  },
  {
    title: 'User Interface Design Certificate',
    image: 'https://drive.google.com/thumbnail?id=1h6GaTW1ARF4Xx6ivWcWXWsdaT-LFN102&sz=w1200',
  },
  {
    title: 'User Experience Design Certificate',
    image: 'https://drive.google.com/thumbnail?id=1o8YL5I0U1Jm4Dadu2GmD5cBl1rf5VjGN&sz=w1200',
  },
  {
    title: 'Product Packaging Certificate',
    image: 'https://drive.google.com/thumbnail?id=1TGN4zqzI_nq3WqYmvr51d9bSfMa-j0oU&sz=w1200',
  },
  {
    title: 'Booth and Product/Window Display Certificate',
    image: 'https://drive.google.com/thumbnail?id=1diEqtAiPkf1f4rocIeJWyurSvJDLSAPv&sz=w1200',
  },
  {
    title: 'Introduction to Visual Graphic Design Certificate',
    image: 'https://drive.google.com/thumbnail?id=1a15roqmi0HjY7UX-aKWufYE4QtZf9-RT&sz=w1200',
  },
]


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="home-hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            TESDA · VISUAL GRAPHIC DESIGN
          </p>

          <h1>
            Genesis,
            <br />
            exploring the art
            <br />
            of visual design.
          </h1>

          <p className="lead">
            From a hobby to a growing passion, my interest in design has led me to pursue TESDA Visual Graphic Design training alongside my studies in Information Technology.
          </p>

          <p className="body-copy">
            This portfolio is a glimpse into my creative process, the work I’ve created, and the skills I continue to build along the way.
          </p>

          <div className="text-actions">
            <Link className="text-link" to="/projects">
              Explore projects <ArrowUpRight size={15} />
            </Link>

            <Link
              className="text-link text-link--dark"
              to="/about"
            >
              About me <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="portrait-column">
          <img
            className="portrait-image"
            src="https://drive.google.com/thumbnail?id=1stEVkyAKxaY_Ym_xECGPDyx8XBzd-fXY&sz=w1200"
            alt="Portrait of the designer"
          />
        </div>

        <div className="interest-strip">
        </div>
      </section>

      {/* NEWSPAPER-STYLE TRAINING STORY */}
      <section className="learning-section">
        <div className="container">
          <p className="eyebrow">
            MY TRAINING JOURNEY
          </p>

          <article className="training-story">
            <p className="story-label">
              EDUCATION · CREATIVITY · DESIGN
            </p>

            <h2>
              Turning a Hobby into a Skill.
            </h2>

            <div className="story-columns">
              <p>
               As an Information Technology (IT) student, I have always been interested in technology and creativity. What started as a hobby in exploring designs and visual ideas became an opportunity to improve my skills through TESDA Visual Graphic Design (VGD) training. This course allows me to learn more about typography, color theory, layout, and visual communication while discovering how creativity and technology can work together.
              </p>

              <p>
                Through this training, I continue to develop my design skills, explore new techniques, and gain experience in creating meaningful and visually appealing designs. This portfolio showcases my learning journey, selected projects, and progress as an IT student aspiring to grow in the field of graphic design.
              </p>
            </div>
          </article>
        </div>
      </section>

      
        {/* CERTIFICATION GALLERY */}
        <section className="certifications-section container">
          <div className="certifications-heading">
            <p className="eyebrow">
              DOCUMENTATION
            </p>

            <h2>Certificates and Achievements</h2>

            <p className="certifications-intro">
              A visual collection of training documents,
              certificates, and achievements.
            </p>
          </div>

          <div className="certification-grid">
            {certifications.map((certificate) => (
              <article
                className="certification-card"
                key={certificate.title}
              >
                <div className="certificate-image-wrapper">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                  />
                </div>

                <div className="certificate-info">
                  <h3>{certificate.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

    </>
  )
}
  