import * as React from 'react';

export function Modality(page) {
  const modality = page.pageContext.modality;
  console.log(modality);
  return(
    <div>
      {modality.name}
      <h2>Upgrades</h2>
      {modality.upgrades && modality.upgrades.map(upgrade => {
        return (
          <div>
            <a href={`/upgrades/${upgrade.slug}`}>{upgrade.name}</a>
          </div>
        )
      })

      }
    </div>
  );
}

export default Modality;
