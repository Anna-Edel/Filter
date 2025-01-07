import uniquid from 'uniquid';
import PropTypes from 'prop-types';

export default function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="toolbar">
            {filters.map((filter) => {
                return (
                    <div className={filter === selected ? 'toolbar-btn toolbar-btn-current' : 'toolbar-btn'}
                        onClick={() => onSelectFilter(filter)} key={uniquid()}>{filter}
                    </div>
                );
            })}
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
}