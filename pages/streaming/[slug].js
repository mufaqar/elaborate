import React from 'react';

export default function Slug() {
  return <div>Slug</div>;
}


export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
