'use client';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';

declare global {
  var cloudinary: any;
}

export const ImageStep = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading>
        <Heading.Title>Add a photo of your place</Heading.Title>
        <Heading.Subtitle>
          Show guests what your place looks like!
        </Heading.Subtitle>
      </Heading>
      <Form.ControlledInput name='imageSrc'>
        <ImageUpload />
      </Form.ControlledInput>
    </div>
  );
};

interface ImageUploadProps {
  /** Can receive as child of controlled input */
  onChange?: (value: string) => void;

  /** Can receive as child of controlled input */
  value?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange?.(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className='relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600'
          >
            <TbPhotoPlus size={50} />
            <div className='font-semibold text-lg'>Click to upload</div>
            {value && (
              <div className='absolute inset-0 w-full h-full'>
                <Image
                  alt='Upload'
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};
