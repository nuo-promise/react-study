import React frm 'react'
import useArticle from "./useArticle";


const ArticleView: React.FC = ({ id }) => {
  const { data, loading, err } = useArticle(id);
  if (err) return "Falied";
  if (!data || loading) return "Loading...";
  return (
    <div className="exp-09-article-view">
      <h1>
        {id}. {data.title}
      </h1>
      <p>{data.content}</p>
    </div>
  )
}

export default ArticleView;
