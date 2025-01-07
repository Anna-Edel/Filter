import { useState } from 'react';
import ProjectList from "./component/ProjectList";
import Toolbar from './component/Toolbar';
import projectsData from './component/data';

export default function Portfolio() {

  const filters = projectsData.reduce((arr, item) => {
    if(!arr.includes(item['category'])){
      arr.push(item['category']);
    }
    return arr
  }, ['All']);

  const [stateFilter, selectFilter] = useState('All');
  
  
  const projectsList = projectsData.filter(project => {
    if (stateFilter === 'All') {
      return true;
    }
    return project.category === stateFilter;
  });

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={stateFilter}
        onSelectFilter={(filter) => selectFilter(filter)}
      />
      <ProjectList projects={projectsList}/>
    </div>
  );
    
}