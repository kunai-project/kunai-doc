import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';
import EuFundLogo from '@site/static/img/eu-funded-en.svg'; // Adjust the path as needed

export default function CopyrightWrapper(props) {
  return (
    <>
      <section>
        <EuFundLogo style={{ height: '5em', background: 'white', paddingTop: '5px', paddingBottom: '5px', borderRadius: '8px', alignItems: 'center' }} />
      </section>

      <Copyright {...props} />

    </>
  );
}
