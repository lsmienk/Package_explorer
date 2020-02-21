import React from 'react'
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

const PackageInfo = ({ packages, url }) => {
    const router = useRouter();

    const { pack } = router.query;

    const packageInfo = packages.find((item) => item.Package === pack);


    return (
        <div className="bc">
            <Head>
                <title>Package Explorer - {pack}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Subpage: {pack}</h1>
             {packageInfo && Object.keys(packageInfo)
                .map((key) => {
                    if (key == 'Depends') {
                        //return (<h4> {key} </h4> )
                        const split = packageInfo[key].split(', ');
                        return split.map((item) => (<a className="items" href={ "http://localhost:3000/" + item.split(' ')[0]}> {item.split(' ')[0]}<br></br></a>));
                    }
                    return (<h4 className="items">{key}: {packageInfo[key]}</h4>);
                })}
        <style jsx>{`
        .items {
          color: black;
        }
        .bc {
            background-color: #EEF5DB;
            width: 100%;
            height: 2000px;
        }
      `}</style>
      </div>
    )
}

PackageInfo.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/packages')
    const json = await res.json();
    return { packages: json }
}

export default PackageInfo
