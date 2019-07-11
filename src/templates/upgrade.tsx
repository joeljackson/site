import * as React from 'react';

export function Modality(page) {
  const upgrade = page.pageContext.upgrade;
  console.log(upgrade);
  return(
    <div>
      <h1>{upgrade.name}</h1>
      <p>{upgrade.description.description}</p>
    </div>
  );
}

export default Modality;
