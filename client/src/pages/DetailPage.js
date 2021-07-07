import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { LinkCard } from '../components/LinkСard';

export const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;
  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/app/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
      console.log('ошибка в дитайл до сетлинк');
      setLink(fetched);
      console.log('ошибка в дитайл после сетлинк');
    } catch (e) {
      console.log('ошибка в дитайл пейдж');
    }
  }, [token, linkId, request]);
  useEffect(() => {
    getLink();
  }, [getLink]);
  if (loading) {
    console.log('загрузился лоадинг');
    return <Loader />;
  }
  return <>{!loading && link && <LinkCard link={link} />}</>;
};
