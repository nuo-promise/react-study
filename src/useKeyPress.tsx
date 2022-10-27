import { useEffect, useState } from 'react';

//使用 document.body 作为默认的监听节点
const useKeyPress = (domNode = document.body) => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    const handleKeyPress = (evt) => {
      console.log(evt.keyCode);
      setKey(evt.keyCode);
    };
    // 监听按键事件
    domNode.addEventListener('keypress', handleKeyPress);
    // 通过 effect 的 return 事件 注册 组件释放时候处理的事情
    return () => {
      domNode.removeEventListener('keypress', handleKeyPress);
    };
  }, [domNode]);
  return key;
};

export default useKeyPress;
