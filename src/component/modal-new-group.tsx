import { FormEvent, useRef } from 'react';
import { Button } from './button';
import { InputText } from './input-text';
import { InputTextArea } from './input-text-area';
import { ModalContainer } from './modal-container';

interface ModalNewGroupProps {
  closeModal: () => void;
}

export function ModalNewGroup({ closeModal }: ModalNewGroupProps) {
  const formRef = useRef<HTMLFormElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const formValue = formRef.current!;
    const data = {
      title: formValue.groupTitle.value,
      description: formValue.description.value,
    };
    console.log('🚀 ~ submitHandler ~ data:', data);
  }

  return (
    <ModalContainer className='w-105'>
      <h5 className='color-dark-700 text-lg font-bold'>Add New Group</h5>
      <form
        className='mt-6 flex flex-col gap-5'
        ref={formRef}
        onSubmit={submitHandler}
      >
        <InputText
          label='Title'
          placeholder='Title'
          name='groupTitle'
          className='w-full'
        />
        <InputTextArea
          name='description'
          label='Description'
          placeholder='Description'
          className='w-full'
        />
        <div className='flex justify-end gap-2.5 pt-3'>
          <Button onClick={closeModal}>Cancel</Button>
          <Button
            variant='blue'
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
}
