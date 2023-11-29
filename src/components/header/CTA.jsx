import CV from "../../assets/portfolio.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        자기소개서 다운
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Tallk
      </a>
    </div>
  );
};

export default CTA;
