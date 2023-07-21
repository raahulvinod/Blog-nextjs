'use client';
import { useSession } from 'next-auth/react';
// import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';

const Dashborard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  //  Fetch data client-side using a third-party library SWR (stale-while-revalidate)

  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );
  // console.log(data);

  return <div className={styles.container}></div>;
};

export default Dashborard;
