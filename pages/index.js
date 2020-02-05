import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

const Home = ({ packages }) => (
  <div className="bc">
    <Head>
      <title>Package Explorer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="title"> Package Explorer </h1>
    <div className="items">
    {packages && packages
        .map((item, key) => {
          return (
            <a href={ "http://localhost:3000/" + item.Package }>
              <h2 className="row">  {item.Package} </h2>
            </a>
          );
        })}
        </div>
        <style jsx>{`
        .title{
          text-align: center;
          color: #FE5F55;
        }
        .row {
          padding: 18px 18px 24px;
          display: cent;
          width: 220px;
          height: 125px;
          text-align: center;
          text-decoration: none;
          color: black;
          background-color: #7a9e9f;
          border: 10px solid #EEF5DB;
        }
        .items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        .bc {
          background-color: #EEF5DB;
        }
      `}</style>
  </div>
);

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/packages')
  const json = await res.json();
  return { packages: json }
}

export default Home
