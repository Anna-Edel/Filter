import PropTypes from 'prop-types';

export default function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="toolbar">
            {filters.map((filter, index) => (
                <div
                    className={filter === selected ? 'toolbar-btn toolbar-btn-current' : 'toolbar-btn'}
                    onClick={() => onSelectFilter(filter)}
                    key={index}
                >
                    {filter}
                </div>
            ))}
        </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
};
