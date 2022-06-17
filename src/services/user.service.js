export default class UserService {

    constructor(axiosIntance) {
      this.api = axiosIntance
    }

    async add(user) {
        try {
            const { data } = await this.api.post('users', user);
            return data
        } catch (error) {         
            throw new Error(error);
        }
    }
}
