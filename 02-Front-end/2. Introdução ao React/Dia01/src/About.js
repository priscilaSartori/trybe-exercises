import React from 'react';
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          { 'Priscila Sartori' }
        </h1>
        <p>
          { 'Complicada e perfeitinha' }
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{ 'Organizada' }</li>
          <li>{ 'Atenciosa' }</li>
          <li>{ 'Raciocínio Lógico' }</li>                    
        </ul>
      </div>
    );
  }
}
export default About;