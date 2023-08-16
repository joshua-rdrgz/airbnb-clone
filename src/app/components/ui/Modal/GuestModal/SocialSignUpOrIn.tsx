import { signIn } from 'next-auth/react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/app/components/ui/Button';

interface SocialSignUpOrInProps {
  toggleModal?(): void;
  footerLabel: string;
  footerButtonContent: string;
}

export const SocialSignUpOrIn: React.FC<SocialSignUpOrInProps> = ({
  toggleModal,
  footerLabel,
  footerButtonContent,
}) => {
  return (
    <div className='flex flex-col gap-4 mt-3 p-6'>
      <hr />
      <Button
        intent='secondary'
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        intent='secondary'
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className='justify-center text-neutral-500 mt-4 font-light'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <div>{footerLabel}</div>
          <div
            className='text-neutral-800 cursor-pointer hover:underline'
            onClick={toggleModal}
          >
            {footerButtonContent}
          </div>
        </div>
      </div>
    </div>
  );
};
