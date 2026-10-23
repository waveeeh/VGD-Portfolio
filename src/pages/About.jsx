export default function About() {
  return (

    <main className="container page-section about-page">

      <header className="about-header">
        <h2 className="page-title">About &amp; Résumé</h2>
      </header>

        <header className="resume-header">
          <h1>Genesis Navarrete Gregorio</h1>
          <p className="resume-role">
            Visual Graphic Design Trainee
          </p>
          <p>
            Nueva Ecija, 3128 | genesis.nav19@gmail.com
          </p>
          <p>
            <a
              href="https://canva.link/krekgzswkuc6yky"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </p>
        </header>

      <section className="ats-section">
        <h2>Education</h2>
        <div className="ats-entry">
          <h3>
            Bachelor of Science in Information Technology
          </h3>
          <p>
            Nueva Ecija University of Science and Technology
          </p>
          <p className="ats-meta">
            Cabanatuan City, Nueva Ecija | 2021–2025
          </p>
          <p>Academic Distinction</p>
        </div>
      </section>

      <section className="ats-section">
        <h2>Training</h2>
        <div className="ats-entry">
          <h3>Visual Graphic Design</h3>
          <p>TESDA Training</p>
          <p className="ats-meta">
            Palayan City | 2026
          </p>
        </div>
      </section>

      <section className="ats-section">
        <h2>Work Experience</h2>

        <div className="ats-entry">
          <h3>Video Editor</h3>
          <p>YOUCANIC | Automotive YouTube Channel</p>
          <p className="ats-meta">June–Present</p>
          <ul>
            <li>
              Edited long-form automotive repair tutorials into
              structured, viewer-friendly instructional videos
              using precise cuts, optimized pacing, and removal
              of unnecessary segments while preserving essential
              technical information.
            </li>
            <li>
              Improved visual clarity using zooms, callouts,
              and on-screen annotations to explain complex repair
              procedures step by step.
            </li>
            <li>
              Maintained consistent branding and publication-ready
              quality by following guidelines for titles,
              typography, logo placement, and video formatting.
            </li>
          </ul>
        </div>

        <div className="ats-entry">
          <h3>Data Entry Specialist</h3>
          <p>
            IT Management Information System (MIS)
          </p>
          <p>
            Bahay-Pamahalaan, Lalawigan ng Nueva Ecija,
            Cabanatuan City
          </p>
          <p className="ats-meta">
            July–December 2025
          </p>
          <ul>
            <li>
              Maintained internal databases and MIS platforms
              by encoding production records, generating IDs,
              and protecting confidential information.
            </li>
            <li>
              Processed large volumes of paperwork and data
              using Google Sheets and Microsoft Excel while
              completing assignments ahead of deadlines.
            </li>
            <li>
              Prepared administrative reports and updated records
              to streamline workflows and support coordination
              between departments.
            </li>
          </ul>
        </div>
      </section>

      <section className="ats-section">
        <h2>Technical Skills</h2>

        <p>
          <strong>Productivity and Administration:</strong>{" "}
          Google Workspace (Docs, Sheets, Drive, Calendar),
          Microsoft 365, Microsoft Teams
        </p>

        <p>
          <strong>Communication:</strong>{" "}
          Zoom, Google Meet
        </p>

        <p>
          <strong>AI and Automation:</strong>{" "}
          ChatGPT, Grammarly, Claude, Kling, Flow
        </p>

        <p>
          <strong>Design and Content:</strong>{" "}
          Canva, CapCut, Figma, Stitch, Adobe Premiere,
          Adobe Illustrator, Adobe Photoshop
        </p>

        <p>
          <strong>Web and Development:</strong>{" "}
          HTML, CSS, WordPress, Angular, PHP, Vercel, React
        </p>
      </section>
    </main>
  )
}
