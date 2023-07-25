'use client';

import { useEffect, useState } from 'react';
import { Header } from '@ems/common-ui';
import { EmployeeCard } from 'apps/website/components/EmployeeCard';

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

const Employees = () => {
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
      <Header>Employees</Header>
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

  return <div>Movies</div>;
};

export default Employees;
