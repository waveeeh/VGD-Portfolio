
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const gestaltDetails = {
  continuation: [
    { title: 'FreshFork' },
    { title: 'Pelane' },
    { title: 'TechPath' },
    { title: 'Paurielle' },
    { title: 'Peloura' },
  ],
  closure: [
    { title: 'Fresh Box' },
    { title: 'Tech Box' },
    { title: 'Pastry Time' },
  ],
  similarity: [
    { title: 'Cremeora' },
    { title: 'Verdelle' },
    { title: 'Tessera' },
  ],
  proximity: [
    { title: 'Harvestra' },
    { title: 'Pixora' },
    { title: 'Lumiere' },
  ],
  symmetry: [
    { title: 'Solara' },
    { title: 'Luminex' },
    { title: 'Pattishia' },
  ],
  'figure-ground': [
    { title: 'Bite Well' },
    { title: 'Facerex' },
    { title: 'Sugara' },
  ],
}

export default function ProjectDetail({ project }) {
  const details = gestaltDetails[project.slug]
  const isGestalt = Boolean(details)
  const isLogoCategory = project.slug === 'logo-design'
  const isUIDesign = project.slug === 'ui-design'
  const isUXDesign = project.slug === 'ux-design'
  const isUIUXDesign = isUIDesign || isUXDesign

  const items = isGestalt
    ? project.items.flatMap((item) =>
        (item.images || [item.image])
          .filter(Boolean)
          .map((image, index) => ({
            ...item,
            image,
            title:
              details[index]?.title ||
              `${project.title} Logo ${index + 1}`,
          }))
      )
    : project.items

  const gridClass = isLogoCategory
    ? 'project-grid logo-category-grid'
    : isGestalt
      ? 'project-grid gestalt-grid'
      : 'project-grid project-grid--two'

  const imageCount = isUIUXDesign
    ? project.items.reduce(
        (total, item) =>
          total + (item.images?.length || (item.image ? 1 : 0)),
        0
      )
    : items.length

  return (
    <section className="container page-section detail-page">
      <h1 className="page-title">{project.title}</h1>

      <p className="section-kicker">
        {imageCount} PROJECTS
      </p>

      {isUIUXDesign ? (
        <div className="ui-project-groups">
          {project.items.map((item) => {
            const images =
              item.images || (item.image ? [item.image] : [])

            return (
              <section
                className="ui-project-group"
                key={item.title}
              >
                <div className="ui-image-grid">
                  {images.map((image, index) => (
                    <div
                      className="ui-image-frame"
                      key={`${item.title}-${index}`}
                    >
                      <img
                        src={image}
                        alt={`${item.title} screen ${index + 1}`}
                        className="project-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <h2 className="ui-project-title">
                  {item.title}
                </h2>
              </section>
            )
          })}
        </div>
      ) : (
        <div className={gridClass}>
          {items.map((item, index) => {
            const itemSlug = item.title
              .toLowerCase()
              .replaceAll(' ', '-')

            return (
              <article
                className="project-card"
                key={`${project.slug}-${index}`}
              >
                {isLogoCategory ? (
                  <Link
                    to={`/projects/${itemSlug}`}
                    className="artwork-link"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <div className="artwork-link">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                )}

                <h2>
                  {isLogoCategory ? (
                    <Link to={`/projects/${itemSlug}`}>
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h2>
              </article>
            )
          })}
        </div>
      )}

      <div className="detail-pagination">
        <Link to="/projects">
          <ArrowLeft size={14} />
          {' '}All projects
        </Link>
      </div>
    </section>
  )
}
