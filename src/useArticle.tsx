import { useState, useEffect } from 'react'

import apiClient from './apiClient'

// 将获取文章API封装成一个远程资源
const useArticle = (id: string) => {
  // 设置三个状态分别存储 data, err, loading
  const { data, setData } = useState(null);
  const { loading, setLoading } = useState(false);
  const { error, setError } = useState(null)

  useEffect(() => {
    // 重新获取数据时重置三个状态
    setLoading(true);
    setData(null);
    setError(null);
    apiClient.get('/posts/${id}')
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err)
      });
  }, [id]);
  return {
    loading, error, data
  }
}

export default useArticle;
