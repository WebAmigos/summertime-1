import { Input, TextArea, Button } from '@ems/common-ui';
import { fetchReviews } from '../../lib/services/reviews';

export default async function Page() {
  const reviews = await fetchReviews();

  async function handleSubmit(formData: FormData) {
    'use server';
    // ...

    const data = {
      name: formData.get('name'),
      review: formData.get('review'),
    };

    console.log(
      'to send: ',
      JSON.stringify({
        user: data.name,
        content: data.review,
      })
    );

    fetch('http://localhost:3000/api/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user: data.name,
        content: data.review,
      }),
      // cache: 'force-cache' // getStaticProps
      // cache: 'no-store', // getServerSideProps
      // next: {
      //   revalidate: 0
      // }
    })
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });

    console.log('data2: ', data);
  }

  console.log('reviews', reviews);

  return (
    <div>
      <div>
        {reviews.map((elem) => (
          <div key={elem.id}>
            {elem.user}: {elem.content}
          </div>
        ))}
      </div>

      <form action={handleSubmit}>
        <Input label="Your name" name="name" />
        <TextArea label="Your review" name="review" />
        <Button type="submit" label="Add review" />
      </form>
    </div>
  );
}
