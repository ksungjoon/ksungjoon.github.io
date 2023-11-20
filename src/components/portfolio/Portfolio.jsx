import "./portfolio.css";
import IMG1 from "../../assets/images/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolio5.jpg";
import IMG6 from "../../assets/images/portfolio6.jpg";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "어울림 v1.0",
    github: "https://github.com/akbari4yaseen",
    demo: "https://github.com/akbari4yaseen/demo",
  },
  {
    id: 2,
    image: IMG2,
    title: "아이조아",
    github: "https://github.com/akbari4yaseen",
    demo: "https://github.com/akbari4yaseen/demo",
  },
  {
    id: 3,
    image: IMG3,
    title: "태산",
    github: "https://github.com/akbari4yaseen",
    demo: "https://github.com/akbari4yaseen/demo",
  },
  {
    id: 4,
    image: IMG4,
    title: "어울림 v2.0",
    github: "https://github.com/akbari4yaseen",
    demo: "https://github.com/akbari4yaseen/demo",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Project</h2>
      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <figure className="portfolio-item-img">
                <img src={image} alt={title} />
              </figure>
              <h3>
                {title} {id}
              </h3>
              <div className="portfolio-item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
