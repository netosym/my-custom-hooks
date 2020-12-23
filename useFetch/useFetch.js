import { useEffect, useRef, useState } from 'react';

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState((s) => ({
      ...s,
      // data: null,
      loading: true,
    }));

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch((error) => {
        setState({
          data: null,
          loading: false,
          error: 'could not fetch data',
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
