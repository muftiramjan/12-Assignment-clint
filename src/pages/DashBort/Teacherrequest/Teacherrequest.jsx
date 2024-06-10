// import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const Teacherrequest = ({ user }) => {
    console.log('User ID:', user.id);
console.log('User Name:', user.name);
console.log('User Email:', user.email);
  const [experience, setExperience] = useState('beginner');
  const [category, setCategory] = useState('web development');
  const [title, setTitle] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    // Fetch the status of the teacher request
    axios.get(`/api/teacher-request-status/${user.id}`).then(response => {
      if (response.data.status === 'approved') {
        setApproved(true);
      }
      setSubmitted(response.data.status !== 'none');
    });
  }, [user.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: user.name,
      email: user.email,
      experience,
      category,
      title,
      image: user.image
    };

    axios.post('/api/submit-teacher-request', formData).then(() => {
      setSubmitted(true);
    });
  };

  if (approved) {
    return <div>You are now a teacher. Welcome!</div>;
  }

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={user.name} readOnly />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={user.email} readOnly />
          </div>
          <div>
            <label>Experience:</label>
            <select value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="mid-level">Mid-Level</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="web development">Web Development</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="graphic design">Graphic Design</option>
              <option value="data science">Data Science</option>
              <option value="cybersecurity">Cybersecurity</option>
            </select>
          </div>
          <div>
            <label>Image:</label>
            <img src={user.image} alt="User profile" />
          </div>
          <button type="submit">Submit for Review</button>
        </form>
      ) : (
        <div>Your request is under review. Please wait for admin approval.</div>
      )}
    </div>
  );
};

Teacherrequest.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Teacherrequest;
