import PropTypes from 'prop-types';

export default function ProjectList({ projects }) {
    return (
        <div className='projectList'>
            {projects.map((project, index) => (
                <div key={project.id || index}> {/* Используем id, если есть, иначе индекс */}
                    <img className='img' src={project.img} alt={project.category} />
                </div>
            ))}
        </div>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            img: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};
