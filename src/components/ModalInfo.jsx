import { motion } from 'framer-motion';

const ModalInfo = ({ visible, message, onClose, onConfirm }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <motion.div
        className="notification-success"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p>{message}</p>
        </div>
        {onConfirm && (
          <button onClick={onConfirm}>Presionar para Salir!!!</button>
        )}
        <button onClick={onClose} className="close-btn-success">
          X
        </button>
      </motion.div>
    </div>
  );
  //}
};
export default ModalInfo;
