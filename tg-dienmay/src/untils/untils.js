// src/utils/utils.js
export const getStatusVN = (status) => {
    switch (status) {
      case 'pending':
        return 'Đang chờ xác nhận';
      case 'completed':
        return 'Đã thanh toán';
      case 'uncompleted':
        return 'Chưa thanh toán';
      default:
        return 'Không xác định';
    }
  };
  