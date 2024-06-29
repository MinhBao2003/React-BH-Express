import React, { useState, useEffect } from 'react';
import '../css/Register.css';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    sdt: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male'
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [nextId, setNextId] = useState(1); // State để lưu trữ mã ID tiếp theo

  useEffect(() => {
    // Fetch existing users to determine the next available ID
    fetch('http://localhost:3000/register')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const maxId = Math.max(...data.map(user => parseInt(user.id)));
          setNextId(maxId + 1);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu trùng khớp
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Kiểm tra số điện thoại có đúng định dạng
    if (!validatePhoneNumber(formData.sdt)) {
      setError('Số điện thoại phải là số và có đúng 10 chữ số');
      return;
    }

    // Tạo dữ liệu gửi đi
    const dataToSend = {
      ...formData,
      id: nextId.toString() // Sử dụng mã ID tiếp theo
    };

    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });

    if (response.ok) {
      setNextId(nextId + 1); // Tăng mã ID cho lần đăng ký tiếp theo
      setFormData({
        username: '',
        sdt: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: 'male'
      });
      setError('');
      setSuccess('Registration successful');
    } else {
      setError('Registration failed');
      setSuccess('');
    }
  };

  // Hàm kiểm tra số điện thoại
  const validatePhoneNumber = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  return (
    <div>
      <hr />
      <div className='dp'>
      <div className='register-dlg'>
        <div className="register-container">
          <div className="register-forms-container">
            <div className="register-signup-form">
              <form onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>
                <input
                  type="text" 
                  name="username"
                  placeholder="Tên đăng nhập"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="sdt"
                  placeholder="Số điện thoại"
                  value={formData.sdt}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="gender">Giới tính:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
                <button type="submit">Đăng ký</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
              </form>
              <span>hoặc đăng ký bằng</span>
              <div className="register-socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="register-intros-container">
            <div className="register-signup-intro">
              <div className="register-intro-control__inner">
                <h2>Hãy đến và tham gia cùng chúng tôi!</h2>
                <p>
                  Chúng tôi rất háo hức khi chào đón bạn ở đây. Nếu bạn chưa có, hãy tạo một tài khoản để có quyền truy cập vào các ưu đãi, phần thưởng và giảm giá độc quyền.
                </p>
                <button id="register-signin-btn">
                  <NavLink to="/login" activeClassName="" className="link">Đã có tài khoản? Đăng nhập</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Contact />
    </div>
  );
}

export default Register;
