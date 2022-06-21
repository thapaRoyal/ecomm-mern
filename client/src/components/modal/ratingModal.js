import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const RatingModal = ({ children }) => {
  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);

  let history = useNavigate();
  let { slug } = useParams();

  //   console.log("PARAMS", params);

  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
      history.push({
        pathname: '/login',
        state: { from: `/product/${slug}` },
      });
    }
  };

  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined className="text-danger" /> <br />{' '}
        {user ? 'Leave rating' : ' Login to leave rating'}
      </div>
      <Modal
        title="Leave your rating"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success('Thanks for your review.');
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
