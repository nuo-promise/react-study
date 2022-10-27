import React, { useCallback, useMemo } from 'react';
import useForm from './useForm';

const MyForm: React.FC = () => {
  // 定义验证方法
  const validators = useMemo(() => {
    return {
      name: (value) => {
        if (value.length < 2) return 'Name length should be no less than 2.';
        return null;
      },
      email: (value) => {
        if (!value.includes('@')) return 'Invalid email address';
        return null;
      }
    };
  }, []);

  // 使用useForm得到表单的状态管理逻辑
  const { values, errors, setFieldValue, resetField } = useForm(
    { name: 'yandex', email: '752734357@qq.com' },
    validators
  );

  // 处理表单的提交事件
  const handleSubmit = useCallback(
    (evt) => {
      // 使用preventDefault()防止页面被刷新;
      evt.preventDefault();
      console.log(values);
    },
    [values]
  );

  const onClick = () => {
    resetField();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          value={values.name || null}
          onChange={(evt) => setFieldValue('name', evt.target.value)}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label>Email: </label>
        <input
          value={values.email || null}
          onChange={(evt) => setFieldValue('email', evt.target.value)}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
      <button onClick={onClick}>Reset</button>
    </form>
  );
};

export default MyForm;
