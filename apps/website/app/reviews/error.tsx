'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Header, Button } from '@ems/common-ui';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <Header>Something went wrong!</Header>
      <Button
        label="Try again"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      />
    </div>
  );
}
