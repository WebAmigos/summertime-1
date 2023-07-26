import { Input, TextArea, Button } from '@ems/common-ui';

export default function Page() {
  async function handleSubmit(formData: FormData) {
    'use server';
    // ...

    const data = {
      name: formData.get('name'),
      review: formData.get('review'),
    };
    console.log('data2: ', data);
  }

  return (
    <div>
      <form action={handleSubmit}>
        <Input label="Your name" name="name" />
        <TextArea label="Your review" name="review" />
        <Button type="submit" label="Add review" />
      </form>
    </div>
  );
}
