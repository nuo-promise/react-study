import React, { useState, useCallback } from 'react';

type timerProps = {
  title: string;
};

const Timer: React.FC<timerProps> = (props) => {
  const { title } = props;
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState<number>(-1);

  // 定义类似Class成员变量,存储缓存数据.
  //const timer = useRef(-1);

  // 开始计时的事件处理函数
  const handleStart = useCallback(() => {
    if (timer === -1) {
      const tmpTimer = window.setInterval(() => {
        setTime((time) => time + 1);
      }, 100);
      setTimer(tmpTimer);
    } else {
      alert('定时器正在运行');
    }
    /*
    if (timer.current === -1) {
      timer.current = window.setInterval(() => {
        setTime((time) => time + 1);
      }, 100);
    } else {
      alert('定时器正在运行.');
    }*/
  }, [timer]);

  // 暂停计时的事件处理函数
  const handlePause = useCallback(() => {
    window.clearInterval(timer);
    setTimer(-1);
    /*
    window.clearInterval(timer.current);
    timer.current = -1;*/
  }, [timer]);
  return (
    <div>
      <h1>计时器: {title}</h1>
      {time / 10} seconds.
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default Timer;
