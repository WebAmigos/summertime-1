import { EmployeeCard } from '../../components/EmployeeCard';
import { fetchEmployees } from '../..//lib/services/employees';

// good luck!
export default async function Page() {
  const { records: employees } = await fetchEmployees();

  console.log({ employees });

  return (
    <main className="mt-6">
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
