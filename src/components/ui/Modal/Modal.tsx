'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  cloneElement,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';

interface ModalContextProps {
  openedModal: string | null;
  triggerModalAnimation: 'open' | 'close';
  openModal(modal: string): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  /** Handles actual closing and opening of modal */
  const [openedModal, setOpenedModal] =
    useState<ModalContextProps['openedModal']>(null);

  /** Handles animations for opening and closing modal */
  const [triggerModalAnimation, setTriggerModalAnimation] = useState<
    'open' | 'close'
  >('open');

  /** Everytime the modal opens or closes, trigger the animation */
  useEffect(() => {
    const openOrClose = openedModal === null ? 'close' : 'open';
    setTriggerModalAnimation(openOrClose);
  }, [openedModal]);

  const ANIMATION_DELAY = 300;
  const openModal = useCallback((modalToOpen: string) => {
    setOpenedModal(modalToOpen);

    setTimeout(() => {
      setTriggerModalAnimation('open');
    }, ANIMATION_DELAY);
  }, []);

  const closeModal = useCallback(() => {
    setTriggerModalAnimation('close');

    setTimeout(() => {
      /** Close the modal */
      setOpenedModal(null);
    }, ANIMATION_DELAY);
  }, []);

  return (
    <ModalContext.Provider
      value={{ openedModal, triggerModalAnimation, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

interface OpenProps {
  children: React.ReactElement;
  opens: string;
}

const Open: React.FC<OpenProps> = ({ children, opens: modalToOpen }) => {
  const { openModal } = useContext(ModalContext) as ModalContextProps;

  return cloneElement(children, { onClick: () => openModal(modalToOpen) });
};

interface WindowProps {
  children: React.ReactElement | React.ReactElement[];
  name: string;
}

const Window = ({ children, name }: WindowProps) => {
  const { openedModal, triggerModalAnimation, closeModal } = useContext(
    ModalContext
  ) as ModalContextProps;

  if (openedModal !== name) return null;

  const JSXReturned = (
    <>
      {/* OVERLAY */}
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
        {/* BACKGROUND CANVAS */}
        <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
          {/* ANIMATION CONTROL */}
          <div
            className={`translate duration-300 h-full ${
              triggerModalAnimation === 'open'
                ? 'translate-y-0'
                : 'translate-y-full'
            } ${
              triggerModalAnimation === 'open' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* BACKGROUND */}
            <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
              {React.Children.map(children, (child) =>
                cloneElement(child, { closeModal })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return createPortal(JSXReturned, document.body);
};

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  const { closeModal } = useContext(ModalContext) as ModalContextProps;
  return (
    <div className='flex items-center p-6 rounded-t justify-center relative border-b-[1px]'>
      <button
        onClick={closeModal}
        className='p-1 border-0 hover:opacity-70 transition absolute left-9'
      >
        <IoMdClose size={18} />
      </button>
      <div className='text-lg font-semibold'>{children}</div>
    </div>
  );
};

Modal.Open = Open;
Modal.Window = Window;
Modal.Heading = Heading;
