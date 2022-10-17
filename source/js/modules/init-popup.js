import {initModals} from '../modules/modals/init-modals';

export const initPopup = () => {
  const autoFocusInput = document.querySelector('#modal-name');
  initModals();
  autoFocusInput.focus();
};
