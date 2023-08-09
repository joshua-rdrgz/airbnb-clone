'use client';

import {
  MouseEventHandler,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

/** CONTEXT */

interface CounterContextProps {
  value: number | null;
  onAdd: MouseEventHandler<HTMLButtonElement>;
  onReduce: MouseEventHandler<HTMLButtonElement>;
}

const CounterContext = createContext<CounterContextProps | null>(null);

const useCounter = () => {
  const context = useContext(CounterContext);
  return context as CounterContextProps;
};

/** COUNTER (PARENT) */

interface CounterProps {
  children: React.ReactNode;

  /** Can receive as child of controlled input */
  value?: any;

  /** Can receive as child of controlled input */
  onChange?(value: CounterProps['value']): void;
}

export const Counter = ({ children, value, onChange }: CounterProps) => {
  const [internalValue, setInternalValue] = useState<
    CounterContextProps['value'] | null
  >(value || null);

  useEffect(() => {
    onChange?.(internalValue);
  }, [onChange, internalValue]);

  const onAdd = useCallback(() => {
    setInternalValue((val) => {
      if (val !== null) return val + 1;
      return null;
    });
  }, []);

  const onReduce = useCallback(() => {
    setInternalValue((val) => {
      if (val !== null) {
        if (val === 1) return 1;
        return val - 1;
      }
      return null;
    });
  }, []);

  return (
    <CounterContext.Provider value={{ value: internalValue, onAdd, onReduce }}>
      <div className='flex flex-row items-center justify-between'>
        {children}
      </div>
    </CounterContext.Provider>
  );
};

/** HEADING (CHILD) */

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col'>
      <div className='font-medium'>{title}</div>
      <div className='font-light text-gray-600'>{subtitle}</div>
    </div>
  );
};

/** CONTENT (CHILD) */

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className='flex flex-row items-center gap-4'>{children}</div>;
};

/** BUTTON (CHILD) */

interface ButtonProps {
  type: 'add' | 'reduce';
}

const Button: React.FC<ButtonProps> = ({ type }) => {
  const { onAdd, onReduce } = useCounter();

  return (
    <button
      onClick={type === 'add' ? onAdd : onReduce}
      className='w-10 h-10 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition'
    >
      {type === 'add' ? <AiOutlinePlus /> : <AiOutlineMinus />}
    </button>
  );
};

/** COUNT (CHILD) */

const Count = () => {
  const { value } = useCounter();
  return <div className='font-light text-xl text-neutral-600'>{value}</div>;
};

// ASSIGN CHILDREN TO PARENT
Counter.Heading = Heading;
Counter.Content = Content;
Counter.Button = Button;
Counter.Count = Count;
