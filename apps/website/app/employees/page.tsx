'use client';

import { useEffect, useState } from 'react';
import { EmployeeCard } from '../../components/EmployeeCard';

// good luck!
type AppStatus<T> =
  | {
      // resolved
      data: T;
      isLoading: false;
      hasError: false;
    }
  | {
      // pending
      data: undefined;
      isLoading: true;
      hasError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      hasError: true;
    };

interface ImageDto {
  id: string;
  filename: string;
  width: number;
  height: number;
  url: string;
  thumbnails: {
    full: string;
    large: string;
    small: string;
  };
}

interface EmployeeDto {
  id: string;
  fields: {
    first_name: string;
    last_name: string;
    role: string;
    picture: ImageDto[];
  };
}

// export default async function Page() {
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [employees, setEmployees] = useState<EmployeeDto[] | null>(null);

  useEffect(() => {
    fetch('/employees/api')
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setEmployees(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="mt-6">
      {/* {isError && <p>Error!</p>} */}
      {isError ? <p>Error!</p> : null}
      {isLoading && <p>Loading...</p>}
      <div>
        {employees &&
          employees.map((elem) => {
            return (
              <div key={elem.id}>
                <EmployeeCard
                  key={elem.id}
                  firstName={elem.fields.first_name}
                  lastName={elem.fields.last_name}
                  role={elem.fields.last_name}
                  picture={elem.fields?.picture[0].url}
                />
                {elem.fields.first_name} ({elem.fields.last_name})
              </div>
            );
          })}
      </div>
    </main>
  );
}
