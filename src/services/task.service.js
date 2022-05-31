import api from './api'


export default class TaskService {

  static async getAll() {
    try {
      const { data } = await api.get('tasks');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async add(task) {
    try {
      const { data } = await api.post('tasks', task);
      return data
    } catch (error) {
      throw new Error(error);
    }
  }

  static async update(task) {
    try {
      const { _id, description, completed } = task
      await api.put(`tasks/${_id}`, {
        description,
        completed
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async delete(id) {
    try {
      await api.delete(`tasks/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}