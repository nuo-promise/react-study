import React from 'react';
import { createStore } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';

// 定义组件入参 props 类型
type reduxProps = {
  title: string;
};

// 初始化 state 对象的数据结构
const initialState = { value: 0 };

// 创建 reducer
function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case "counter/incremented":
      return {
        ...state,
        value: state.value + 1
      };
    case "counter/decremented":
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
}

// 创建 store
const store = createStore(counterReducer);

// 创建组件
const ReduxCounter: React.FC<reduxProps> = (props) => {
  const { title } = props;

  // 从state 中获取当前的计数值
  const count = useSelector((state: { value: number }) => state.value);

  // 获得当前store的dispatch方法
  const dispatch = useDispatch();

  return (
    <div>
      <p>ReduxCounter: {title}</p>
      <button onClick={() => dispatch({ type: 'counter/incremented' })}>
        Redux +{' '}
      </button>
      <span style={{ width: "50px", display: "inline-block", textAlign: "center" }}>{count}</span>
      <button onClick={() => dispatch({ type: 'counter/decremented' })}>
        Redux -{' '}
      </button>
    </div>
  );
};


export default function RCD() {
  return (
    <Provider store={store}>
      <ReduxCounter title={'unknow'} />
    </Provider>
  )
};
