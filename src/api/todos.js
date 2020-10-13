import axiosInstance from './base';
export const postTodo = async (text) => {
  const response = await axiosInstance.post('/todos', {
    text: text,
    completed: false,
  });
  return response && response.status === 201;
};

export const getAllTodos = async () => {
  const response = await axiosInstance.get('/todos');
  return response.data;
};
