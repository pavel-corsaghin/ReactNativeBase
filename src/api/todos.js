import axiosInstance from './base';
export const postTodo = async (text) => {
  const response = await axiosInstance.post('/todos', {
    text: text,
    completed: false,
  });
  return response.data;
};

export const getAllTodos = async () => {
  const response = await axiosInstance.get('/todos');
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
};
