import { useState, useCallback } from 'react';

const useForm = (initialValues = {}, validators) => {
  // 设置 form 的状态: values
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  // 重置组件
  const resetField = useCallback(() => {
    setValues(initialValues);
    if (validators['name']) {
      const errMsg = validators['name'](initialValues['name']);
      setErrors((errors) => ({
        ...errors,
        ['name']: errMsg || null
      }));
    }
  }, [initialValues, validators]);

  // 提供方法设置values 对象 map
  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => ({
        ...values,
        [name]: value
      }));

      // 如果存在验证函数,则调用验证用户输入.
      if (validators[name]) {
        const errMsg = validators[name](value);
        setErrors((errors) => ({
          ...errors,
          [name]: errMsg || null
        }));
      }
    },
    [validators]
  );

  return { values, errors, setFieldValue, resetField };
};

export default useForm;
