import axios from 'axios';

const API_URL = 'http://localhost:8080/api/courses';

// 從localStorage撈是否有token
const getToken = function () {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    return JSON.parse(savedUser).token;
  }
  return '';
};

class CourseService {
  get(instructorId) {
    const token = getToken();
    // 使用token發出call Api
    return axios.get(`${API_URL}/instructor/${instructorId}`, {
      headers: {
        Authorization: token,
      },
    });
  }
  // 新增課程
  post(title, description, price) {
    const token = getToken();
    console.log('post new course');

    return axios.post(
      API_URL,
      {
        title,
        description,
        price,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new CourseService();
