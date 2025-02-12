import PropTypes from "prop-types";

function PortfolioItem({ imgUrl, title, stack, github, link }) {
  return (
    <div className="border rounded-md p-4">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{stack}</p>
      <div className="mt-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
        {" | "}
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Live Demo</a>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
  
  export default PortfolioItem;