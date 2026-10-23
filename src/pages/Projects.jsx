import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projectPages } from '../data/portfolio.js'

const categories = [
  {
    title: 'Logo Design',
    slug: 'logo-design',
    image: 'https://drive.google.com/thumbnail?id=1nIrlRscRzkTGzdrNaPFTtToBQrA7mzL0&sz=w1200',
  },
  {
    title: 'Print Media',
    slug: 'print-media',
    image: 'https://drive.google.com/thumbnail?id=10L9OmcEAaLwyEnmUkUbraLa4DP-d0YF9&sz=w1200',
  },
  {
    title: 'UI Design',
    slug: 'ui-design',
    image: 'https://drive.google.com/thumbnail?id=1BfttqHm4fYf79samKTqxiMjwTQPdHU5o&sz=w1200',
  },
  {
    title: 'UX Design',
    slug: 'ux-design',
    image: 'https://drive.google.com/thumbnail?id=1XQ7Eps9z5WxJl49nJfKFjhiga9tjLUp3&sz=w1200',
  },
  {
    title: 'Product Packaging',
    slug: 'product-packaging',
    image: 'https://drive.google.com/thumbnail?id=15ffI0vNmvpzf7nUJTta6XeVfvjnp3vFp&sz=w1200',
  },
  {
    title: 'Booth Design',
    slug: 'booth-design',
    image: 'https://drive.google.com/thumbnail?id=1qwNrOPdLqanks4RRn7lqsMqmhAVyNfQX&sz=w1200',
  },
]

export default function Projects() {
  return (
    <section className="container page-section">
      <h1 className="page-title">Ideas, made visible.</h1>

      <p className="page-subtitle">
        An exploration of visual communication, from a single mark to a complete experience.
      </p>

      <p className="project-note">
        Explore my design projects and creative work.
      </p>

      <div className="project-grid project-grid--three">
        {categories.map((item) => (
          <article className="project-card" key={item.slug}>
            <Link
              className="artwork-link"
              to={`/projects/${item.slug}`}
              aria-label={`Open ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="project-image"
              />
            </Link>

            <h2>
              <Link to={`/projects/${item.slug}`}>
                {item.title} <ArrowUpRight size={15} />
              </Link>
            </h2>

            <p>{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="more-collections">
        <p className="eyebrow">MORE DESIGN STUDIES</p>

        <div className="collection-links">
          {projectPages
            .filter(
              (project) =>
                !categories.some((category) => category.slug === project.slug)
            )
            .map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
              >
                {project.title} <ArrowUpRight size={14} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
